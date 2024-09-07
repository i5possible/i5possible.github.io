'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createCamera, createRenderer, createScene } from '@/lib/three-setup'

const ExampleComponent = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
  const [scene, setScene] = useState<THREE.Scene>()
  const [camera, setCamera] = useState<THREE.Camera>()
  const [orbitControls, setOrbitControls] = useState<OrbitControls>()
  const animationRef = useRef<number>()

  useEffect(() => {
    if (mountRef.current) {
      console.log(`Mounting Three.js scene to: ${mountRef.current}`)
      const scene = createScene()

      // Camera is the viewer's perspective
      const camera = createCamera(mountRef.current)
      camera.position.set(0, 100, 500)

      // Renderer is the one that renders the scene
      // antialias: 抗锯齿
      const renderer = createRenderer(mountRef.current, { antialias: true })

      // Lights
      /*
      List of lights:
      - AmbientLight (light that gets applied to all objects equally)
      - DirectionalLight (light that gets emitted in a specific direction)
      - HemisphereLight (light that gets emitted from the sky)
      - PointLight (light that gets emitted from a single point)
      - RectAreaLight (light that gets emitted from a rectangle)
      - SpotLight (light that gets emitted from a specific point in a specific direction
       */
      // simple ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      setCamera(camera)
      setRenderer(renderer)
      setScene(scene)

      // Add Axes to the scene
      const axesHelper = new THREE.AxesHelper(100)
      scene.add(axesHelper)

      // Add OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.update()
      setOrbitControls(controls)

      // Add Floor to the scene
      const floorGeometry = new THREE.PlaneGeometry(100, 100)
      const floorMaterial = new THREE.MeshBasicMaterial({
        color: 0x303030,
        side: THREE.DoubleSide,
      })
      const floor = new THREE.Mesh(floorGeometry, floorMaterial)
      floor.rotation.x = Math.PI / 2
      floor.receiveShadow = true

      scene.add(floor)

      const gridHelper = new THREE.GridHelper(30)
      scene.add(gridHelper)

      renderer.render(scene, camera)
      return () => {
        mountRef.current?.removeChild(renderer.domElement)
      }
    }
  }, [])

  useEffect(() => {
    function animate() {
      if (renderer && scene && camera && orbitControls) {
        renderer.render(scene, camera)
        orbitControls.update()
      }
    }
    if (renderer && scene && camera) {
      renderer.setAnimationLoop(animate)
    }
    return () => {
      renderer?.setAnimationLoop(null)
    }
  }, [renderer, scene, camera, orbitControls])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
}

export default ExampleComponent
