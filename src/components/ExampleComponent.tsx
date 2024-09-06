// components/ThreeTextComponent.tsx
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

const ExampleComponent = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
  const [scene, setScene] = useState<THREE.Scene>()
  const [camera, setCamera] = useState<THREE.Camera>()

  const [font, setFont] = useState<Font>(null)
  const [group, setGroup] = useState<THREE.Group>()

  useEffect(() => {
    if (mountRef.current) {
      console.log(`Mounting Three.js scene to: ${mountRef.current}`)
      // Setup Three.js scene
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      // Scene is the container for all objects
      const scene = new THREE.Scene()

      // Camera is the viewer's perspective
      const camera = new THREE.PerspectiveCamera(76, width / height, 1, 1000)
      camera.position.set(0, 400, 500)

      // Renderer is the one that renders the scene
      // antialias: 抗锯齿
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(width, height)
      // renderer.domElement is the canvas element
      mountRef.current.appendChild(renderer.domElement)

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
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.4)
      dirLight.position.set(0, 0, 1).normalize()
      scene.add(dirLight)

      const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0)
      pointLight.color.setHSL(Math.random(), 1, 0.5)
      pointLight.position.set(0, 100, 90)
      scene.add(pointLight)

      const group = new THREE.Group()
      group.position.y = height / 4
      scene.add(group)

      setCamera(camera)
      setRenderer(renderer)
      setScene(scene)
      setGroup(group)

      // loadFont
      const loader = new FontLoader()
      loader.load(
        'fonts/helvetiker_bold.typeface.json',
        (loadedFont: Font) => {
          console.log(`Font loaded: ${loadedFont}`)
          setFont(loadedFont)
        },
        (progress: ProgressEvent) => {
          console.log(
            `Font loading progress: ${progress.lengthComputable} ${progress.loaded}/${progress.total}`,
          )
        },
        (error: unknown) => {
          console.error(`Font loading error: ${error}`)
        },
      )
    }
  }, [])

  const refreshText = useCallback(() => {
    if (font && group) {
      // Clear previous text meshes if any
      group.clear()

      const textGeo = new TextGeometry('Alfred', {
        font: font,
        size: 70,
        depth: 20,
        curveSegments: 4,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelEnabled: true,
      })

      textGeo.computeBoundingBox()
      console.log(
        `Text geometry boundingBox: ${JSON.stringify(textGeo.boundingBox)}`,
      )

      const materials = [
        new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
        new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
      ]

      const textMesh1 = new THREE.Mesh(textGeo, materials)
      textMesh1.position.x =
        -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x)
      textMesh1.position.y = 30

      group.add(textMesh1)
    }
  }, [font])

  useEffect(() => {
    if (group && font && renderer && scene && camera) {
      // Animation loop
      refreshText()

      const animate = () => {
        group.rotateY(0.01)
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }

      animate()
    }
  }, [group, font])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
}

export default ExampleComponent
