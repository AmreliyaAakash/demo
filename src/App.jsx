import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'

function App() {
  return (
    <div className="relative w-full h-full bg-slate-900">
      <UI />

      <Canvas
        camera={{ position: [0, 4, 8], fov: 45 }}
        className="w-full h-full touch-none"
        shadows
        dpr={[1, 2]} // Optimize pixel ratio
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
