'use client' // 确保这是一个客户端组件

import { Canvas, useFrame } from '@react-three/fiber'
import { ShaderMaterial } from 'three'
import { vertexShader, fragmentShader } from './shaders/flowingLightShader'
import { useRef } from 'react'

interface ShaderMaterialProps extends ShaderMaterial {
  uniforms: {
    uTime: { value: number }
  }
}

const FlowingLight = () => {
  const materialRef = useRef<ShaderMaterialProps>(null)

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        ref={materialRef}
        args={[
          {
            vertexShader,
            fragmentShader,
            uniforms: {
              uTime: { value: 0 },
            },
          },
        ]}
      />
    </mesh>
  )
}

const LightClientComponent = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <FlowingLight />
    </Canvas>
  )
}

export default LightClientComponent
