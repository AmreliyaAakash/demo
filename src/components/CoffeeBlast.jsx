import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

export default function CoffeeBlast() {
    const scroll = useScroll()
    const sparkleRef = useRef()
    const sparkleRef2 = useRef()

    useFrame((state, delta) => {
        // Scroll delta gives us the speed/direction of scroll
        const scrollDelta = scroll.delta
        const offset = scroll.offset

        // Intensity based on scroll speed (fast scroll = big blast)
        const blastIntensity = THREE.MathUtils.lerp(0.5, 3, Math.abs(scrollDelta) * 100)

        // Animate scale/opacity based on scroll activity
        if (sparkleRef.current) {
            sparkleRef.current.scale.setScalar(12 + blastIntensity * 2)
            sparkleRef.current.material.opacity = 0.6 + Math.min(Math.abs(scrollDelta) * 5, 0.4)
        }

        if (sparkleRef2.current) {
            sparkleRef2.current.scale.setScalar(10 + blastIntensity * 2)
            // Rotate the blast slightly
            sparkleRef2.current.rotation.y += delta * 0.2
            sparkleRef2.current.rotation.z += delta * 0.1
        }

    })

    return (
        <group position={[0, 0, -2]}>
            {/* Golden crema particles */}
            <Sparkles
                ref={sparkleRef}
                count={100}
                scale={12}
                size={15}
                speed={0.8}
                opacity={0.6}
                color="#D2B48C"
                noise={2}
            />
            {/* Dark roast particles */}
            <Sparkles
                ref={sparkleRef2}
                count={80}
                scale={10}
                size={20}
                speed={0.5}
                opacity={0.4}
                color="#3E2723"
                noise={3}
            />
        </group>
    )
}
