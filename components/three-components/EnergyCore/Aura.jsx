
import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useEffect } from "react";

const randoms = new Float32Array(2145)
for(let i = 0; i < 2145; i++)
{
    randoms[i] = Math.random()
}
const SphereShaderMaterial = {
  transparent: true,
  uniforms: {
    u_time: {  value: 0 }
  },
  vertexShader: `
  uniform float u_time;
  attribute float aRandom;
  varying float vRandom;
  varying float vTime;
  
  void main(){
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.z = aRandom * 1.5;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
  
      vRandom = aRandom;
      vTime = u_time;
  }
  `,
  fragmentShader: `
  varying float vRandom;
  varying float vTime;
  
  void main(){
      vec3 color = vec3(abs(sin(vRandom * (vTime * 0.001))));
      vec3 normalColor = vec3(1.0,1.0,1.0);
      gl_FragColor = vec4(normalColor,max(0.2, min(abs(cos(vTime * 0.0006)), 0.6)));
  }
  `
};

const Aura = (props) => {
  const sphereRef = useRef();
  const sphereGeo = useRef();
  const startTime = Date.now()
  let current = startTime
  let elapsed = 0
  

  useFrame(({  }) => {
    const currentTime = Date.now()
    current = currentTime
    elapsed = current - startTime
    sphereRef.current.material.uniforms.u_time.value = elapsed;
    sphereRef.current.rotation.y = elapsed * 0.0001;
  });
  
  useEffect(() => {
    if(sphereGeo.current){
        sphereGeo.current.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1))
    }
  }, [])
  
  return (
    <mesh ref={sphereRef} {...props}>
      <sphereGeometry ref={sphereGeo} args={[2, 64, 32]} />
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
};

export default Aura