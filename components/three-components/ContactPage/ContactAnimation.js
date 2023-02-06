import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import Coffe from "./CoffeShader";
import Smoke from "./SmokeShader";

const ContactAnimation = () => {
  const desktop = useLoader(GLTFLoader, '/models/office_stuff_modified.glb')
  const lightHelper = useRef()
  const lightHelper2 = useRef()
  useHelper(lightHelper, DirectionalLightHelper,'cyan' )
  useHelper(lightHelper2, DirectionalLightHelper,'cyan' )
  function UpdateCamera() {
    useFrame(({ camera, clock }) => {
      if(camera.position.z > 4.5){
        camera.position.z -= (clock.elapsedTime * 0.01)
      }
    })
    return null
  }
  return(
      <group rotation={[0,1.55,0]} scale={[2,2,2]}>
        <pointLight color={'#F5B5B1'} position={[0,1,-7]} />
        <pointLight color={'#ffffff'} position={[-2,-2,0]} intensity={0.1} />
        <pointLight color={'#F2E7CB'} position={[0,6,-10]} intensity={0.6} />

        <Coffe position={[-0.33,0.54,0.83]} />
        <Smoke position={[-0.33,0.64,0.82]} rotation-y={Math.PI * -1.22} />
        <Smoke position={[-0.33,0.64,0.77]} rotation-y={Math.PI * -0.22} />
        <Smoke position={[-0.33,0.64,0.88]} rotation-y={Math.PI * -0.22} />

        <primitive object={desktop.scene} position={[0,-1.5,22.5]}>
          <Html 
          rotation={ [0,4.7,0] }
          transform
          wrapperClass="htmlScreen" 
          distanceFactor={0.49}
          position={ [-0.06, 2.45, -22.654] }
          >
            <iframe src="/portfolio" />
          </Html>
        </primitive>
        <UpdateCamera />
      </group>
  )
}

export default ContactAnimation