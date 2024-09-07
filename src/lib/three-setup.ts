import * as THREE from 'three'

export const createScene = (): THREE.Scene => new THREE.Scene()

export const createCamera = (mount: HTMLDivElement): THREE.Camera => {
  const width = mount.clientWidth
  const height = mount.clientHeight
  return new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
}

export const createRenderer = (
  mount: HTMLDivElement,
  parameters?: THREE.WebGLRendererParameters,
): THREE.WebGLRenderer => {
  const width = mount.clientWidth
  const height = mount.clientHeight
  const renderer = new THREE.WebGLRenderer(parameters)
  renderer.setSize(width, height)
  // renderer.domElement is the canvas element
  mount.appendChild(renderer.domElement)
  return renderer
}

export const animate = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  animateFn: () => void,
) => {
  function animation() {
    requestAnimationFrame(animation)
    animateFn()

    renderer.render(scene, camera)
  }

  animation()
}
