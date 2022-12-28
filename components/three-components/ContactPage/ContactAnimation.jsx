import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ContactAnimation = () => {
  const desktop = useLoader(GLTFLoader, '/models/office_stuff_modified_test.glb')
  function UpdateCamera() {
    useFrame(({ camera, clock }) => {
      if(camera.position.z > 4 && clock.elapsedTime < 12){
        camera.position.z -= (clock.elapsedTime * 0.01)
      }
    })
    return null
  }
  return(
      <group rotation={[0,1.5,0]} scale={[2,2,2]}>
        <primitive object={desktop.scene} position={[0,-1.5,22.5]} />
        <UpdateCamera />
      </group>
  )
}

export default ContactAnimation