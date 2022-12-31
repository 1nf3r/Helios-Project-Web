import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Vector2 } from "three";  

const coffeMaterial = {
    vertexShader: `
    uniform float uFrequency;
    uniform float uTime;

    varying vec2 vUv;
    varying float vElevation;

    void main()
    {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
        float elevation = sin(modelPosition.z * uFrequency - uTime) * 0.004;
    
        modelPosition.y += elevation;
    
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
        vec3 color = vec3(0.25,0.15,0.01);
        gl_FragColor = vec4(color, 1);
    }
    `,
    uniforms:
    {
      uFrequency: { value: 30.0 },
      uTime: { value: 0 },
    }
}

const Coffe = (props) => {
  const coffeRef = useRef();
  useFrame(({ clock }) => {
    coffeRef.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={coffeRef} rotation-x={Math.PI * -0.5} rotation-z={Math.PI * -0.5} {...props}>
      <circleBufferGeometry args={[0.1,32]} />
      <shaderMaterial attach="material" args={[coffeMaterial]} />
    </mesh>
  );
};

export default Coffe