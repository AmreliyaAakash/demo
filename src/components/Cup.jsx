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
        if (offset < 0.33) {
            const t = offset / 0.33
            // Intro: Right to Center
            group.current.position.set(2, -0.5, 0.2)
            group.current.position.x = THREE.MathUtils.lerp(3, 0, t)
            group.current.position.y = THREE.MathUtils.lerp(-0.2, -0.8, t)
            group.current.scale.setScalar(THREE.MathUtils.lerp(0.009, 0.01, t))
        } else if (offset < 0.66) {
            const t = (offset - 0.33) / 0.33
            // Menu: Center to Left
            group.current.position.x = THREE.MathUtils.lerp(0, -2.5, t)
            group.current.position.y = THREE.MathUtils.lerp(-0.8, -0.2, t)
        } else {
            const t = (offset - 0.66) / 0.34
            // Features: Left to Center
            group.current.position.x = THREE.MathUtils.lerp(-2.5, 0, t)
            group.current.position.y = THREE.MathUtils.lerp(-0.2, -0.8, t)
            group.current.scale.setScalar(THREE.MathUtils.lerp(0.01, 0.009, t))
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

useGLTF.preload('/paper_coffee_cup.glb')
