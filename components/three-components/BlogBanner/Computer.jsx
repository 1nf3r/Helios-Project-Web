import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from 'react';


const Computer = () => {
    const sceneRef = useRef()
    const gltf = useLoader(GLTFLoader, '/models/Computer.gltf')
    useFrame(() => {
      sceneRef.current.rotation.y += -0.005;
    });
    return (
        <group ref={sceneRef} position={[0,2,0]} rotation={[0.2,0,0]}>
          <primitive object={gltf.scene} />
        </group>
    )
};

export default Computer