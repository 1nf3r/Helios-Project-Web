import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ContactAnimation = () => {
  const desktop = useLoader(GLTFLoader, '/models/office_stuff_modified.gltf')
  const startTime = Date.now()
  let current = startTime
  let elapsed = 0
  function UpdateCamera() {
    useFrame(({ camera }) => {
      const currentTime = Date.now()
      current = currentTime
      elapsed = current - startTime
      if(camera.position.z > 0){
        camera.position.z -= (elapsed * 0.0001)
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