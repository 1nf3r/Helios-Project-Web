import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";

const coffeMaterial = {
    transparent: true,
    vertexShader: `
    uniform float uFrequency;
    uniform float uTime;

    varying vec2 vUv;
    varying float vElevation;

    void main()
    {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
        float elevation = sin(modelPosition.y * uFrequency - uTime) * 0.02;
    
        modelPosition.x += elevation;
    
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
    
        gl_Position = projectedPosition;
    
        vUv = uv;
        vElevation = elevation;
    }
    `,
    fragmentShader: `
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vElevation;

    void main()
    {
        vec4 textureColor = texture2D(uTexture, vUv);
        vec3 color = vec3(28);
        gl_FragColor = vec4(color, 0.6);
    }
    `,
    side: DoubleSide,
    uniforms:
    {
      uFrequency: { value: 50.0 },
      uTime: { value: 0 },
    }
}

const Smoke = (props) => {
  const smokeRef = useRef();
  useFrame(({ clock }) => {
    smokeRef.current.material.uniforms.uTime.value = clock.elapsedTime;
    
  });

  return (
    <mesh ref={smokeRef} {...props}>
      <planeGeometry args={[0.05, 0.1, 32, 32]} />
      <shaderMaterial attach="material" args={[coffeMaterial]} />
    </mesh>
  );
};

export default Smoke