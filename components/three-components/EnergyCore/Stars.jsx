import { useRef} from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

// const pixelRatio = Math.min(window.devicePixelRatio, 2)
const pixelRatio = 2 //MODIFICAR
const PointShaderMaterial = {
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    uniforms: {
      uSize: { value: 180 * pixelRatio }, //this.renderer.instance.getPixelRatio()
      u_time: {  value: 0 }
    },
    vertexShader: `
    uniform float uSize;
  uniform float uTime;
  
  attribute float aScale;
  attribute vec3 aRandomness;
  
  varying vec3 vColor;
  
  void main()
  {
      /**
      * Position
      */
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
      //Spin
      float angle = atan(modelPosition.x, modelPosition.z);
      float distanceToCenter = length(modelPosition.xz);
      float angleOffset = (1.0 / distanceToCenter) * uTime * 8.5 ;
      angle += angleOffset;
      modelPosition.x = cos(angle) * distanceToCenter;
      modelPosition.z = sin(angle) * distanceToCenter;
  
      //Randomness
      modelPosition.xyz += aRandomness;
  
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
  
      gl_PointSize = uSize * aScale;
      gl_PointSize *= ( 1.0 / - viewPosition.z );
  
      vColor = color;
  }
    `,
    fragmentShader: `
    varying vec3 vColor;
  
    void main()
    {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = 1.0 - strength;
        strength = pow(strength, 10.0);
    
        //Final color
        vec3 color = mix(vec3(0.0), vColor, strength);
        gl_FragColor = vec4(vec3(color), 1.0);
    }
    `
  }

const Stars = () => {
  const startTime = Date.now()
  const ref = useRef()
  let current = startTime
  let elapsed = 0
  let parameters = {}
  parameters.count = 10000
  parameters.size = 7
  parameters.radius = 5
  parameters.branches = 3
  parameters.spin = 1
  parameters.randomness = 0.5
  parameters.randomnessPower = 3
  parameters.insideColor = '#ffffff'
  parameters.outsideColor = '#BF40BF'

  const geometry = new THREE.BufferGeometry()
  let positions = new Float32Array(parameters.count * 3)
  let colors = new Float32Array(parameters.count * 3)
  let scales = new Float32Array(parameters.count * 1)
  let randomness = new Float32Array(parameters.count * 3)

  let insideColor = new THREE.Color(parameters.insideColor)
  let outsideColor = new THREE.Color(parameters.outsideColor)
  
  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3
    const radius = Math.random() * parameters.radius
    
    positions[i3    ] = (Math.random() -0.5) * 50
    positions[i3 + 1] = (Math.random() -0.5) * 50
    positions[i3 + 2] = (Math.random() -0.5) * 50

    // Color
    const mixedColor = insideColor.clone()
    mixedColor.lerp(outsideColor, radius / parameters.radius)

    colors[i3    ] = mixedColor.r
    colors[i3 + 1] = mixedColor.g
    colors[i3 + 2] = mixedColor.b

    scales[i] = Math.random()
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))
geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3))

useFrame(() => {
    const currentTime = Date.now()
    current = currentTime
    elapsed = current - startTime
    ref.current.rotation.y = elapsed * 0.00002
  });

return (
    <mesh>
        <points ref={ref} args={[geometry]}>
            <shaderMaterial args={[PointShaderMaterial]} />
        </points>
    </mesh>
  );
};

export default Stars