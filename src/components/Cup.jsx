import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Cup() {
    const group = useRef()
    const scroll = useScroll()
    const { nodes, materials } = useGLTF('/paper_coffee_cup.glb')

    useFrame((state, delta) => {
        const offset = scroll.offset

        // Rotating the cup as it scrolls
        group.current.rotation.y = offset * Math.PI * 2

        // Tilt Animation: "Little right down"
        // We add a base tilt and animate slightly around it
        // X axis tilt (down/forward), Z axis tilt (right)
        group.current.rotation.x = 0.2 + (Math.sin(state.clock.elapsedTime) * 0.05)
        group.current.rotation.z = -0.2 + (Math.cos(state.clock.elapsedTime) * 0.05)

        // Scroll Path Logic
        // Scroll Path Logic
        const introEnd = 0.125 // Page 1
        const menuEnd = 0.250 // Page 2

        if (offset < introEnd) {
            const t = offset / introEnd
            // Intro: Right to Center
            group.current.position.set(2, -0.5, 0.2)
            group.current.position.x = THREE.MathUtils.lerp(3, 0, t)
            group.current.position.y = THREE.MathUtils.lerp(-0.2, -0.8, t)
            group.current.scale.setScalar(THREE.MathUtils.lerp(0.009, 0.01, t))
        } else if (offset < menuEnd) {
            const t = (offset - introEnd) / (menuEnd - introEnd)
            // Menu: Center to Left
            group.current.position.x = THREE.MathUtils.lerp(0, -2.5, t)
            group.current.position.y = THREE.MathUtils.lerp(-0.8, -0.2, t)
        } else {
            const t = (offset - menuEnd) / (1 - menuEnd)
            // Features -> Footer
            // Transition from Left to Center and then stay/subtle float
            const featureTransitionEnd = 0.7 // Section 7 (CTA) starts around here
            
            if (t < featureTransitionEnd) {
                const ft = t / featureTransitionEnd
                group.current.position.x = THREE.MathUtils.lerp(-2.5, 0, ft)
                group.current.position.y = THREE.MathUtils.lerp(-0.2, -0.6, ft)
                group.current.scale.setScalar(THREE.MathUtils.lerp(0.01, 0.012, ft))
                group.current.rotation.y += Math.sin(ft * Math.PI) * 0.5
                
                // Reset opacity for preceding sections and ENSURE SHARPNESS
                materials.material.transparent = false
                materials.material_1.transparent = false
                materials.material.opacity = 1
                materials.material_1.opacity = 1
                group.current.visible = true
            } else {
                const lastT = (t - featureTransitionEnd) / (1 - featureTransitionEnd)
                // Resting position for footer: gradual shrink, pan, and FADE OUT
                group.current.position.x = THREE.MathUtils.lerp(0, 3, lastT)
                group.current.position.y = THREE.MathUtils.lerp(-0.6, -0.4, lastT)
                group.current.scale.setScalar(THREE.MathUtils.lerp(0.012, 0.007, lastT))
                group.current.rotation.y = offset * Math.PI * 2 + (Math.sin(state.clock.elapsedTime * 0.5) * 0.2)
                
                // Fade out effect
                const fadeOpacity = THREE.MathUtils.lerp(1, 0, lastT)
                materials.material.transparent = true
                materials.material_1.transparent = true
                materials.material.opacity = fadeOpacity
                materials.material_1.opacity = fadeOpacity

                // Hide completely when invisible to save performance
                group.current.visible = fadeOpacity > 0
            }
        }
    })

    return (
        <group ref={group} dispose={null} position={[2, -0.5, 0]} rotation={[0.2, 0, -0.2]} scale={0.009}>

            {/* 1. Cup Body */}
            <mesh
                geometry={nodes.cup_cup_0.geometry}
                material={materials.material}
                position={[2.559, 17.306, -1.577]}
                rotation={[-Math.PI / 2, 0, 1]} // Kept user's rotation preference for logo visibility
                scale={100}
                castShadow
                receiveShadow
            />

            {/* 2. Lid */}
            <mesh
                geometry={nodes.lid_lid_0.geometry}
                material={materials.material_1}
                position={[2.658, 243.33, -3.63]}
                rotation={[-Math.PI / 2, 0, -0.214 + 0.65]} // Adjusted accordingly
                scale={100}
                castShadow
            />

        </group>
    )
}

useGLTF.preload('/paper_coffee_cup.glb')
