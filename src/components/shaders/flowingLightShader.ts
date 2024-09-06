export const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec3 color = vec3(0.0);
    float flow = sin(vUv.y * 10.0 + uTime) * 0.5 + 0.5;
    color = mix(vec3(0.0, 0.5, 1.0), vec3(1.0, 0.0, 0.0), flow);
    gl_FragColor = vec4(color, 1.0);
  }
`
