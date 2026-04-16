import { OrbitControls, Environment, ContactShadows, ScrollControls, Scroll, Sparkles, SpotLight } from '@react-three/drei'
import Cup from './Cup'
import CoffeeBlast from './CoffeeBlast'
import ScrollContent from './ScrollContent'
import UI from './UI'

export default function Scene() {
  return (
    <>


      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <Environment preset="city" />

      {/* Global Lighting for Atmosphere */}
      <SpotLight
        position={[0, 5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={20}
        color="#d4a373"
        distance={20}
      />

      {/* Background "Coffee Blast" Effect */}
      <group position={[0, 0, -5]}>
        <Sparkles
          count={150}
          scale={15}
          size={8}
          speed={0.4}
          opacity={0.6}
          color="#D2B48C"
          position={[0, 2, -2]}
        />
      </group>

      {/* Scroll Controls wrapping the content */}
      <ScrollControls pages={8} damping={0.2}>

        {/* The 3D Content */}
        <Cup />
        <CoffeeBlast />

        {/* Scrollable HTML Content */}
        <Scroll html style={{ width: '100vw', height: '100vh' }}>
          <ScrollContent />
        </Scroll>

      </ScrollControls>

      <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#1a1a1a" />
    </>
  )
}
