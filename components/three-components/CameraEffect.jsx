import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const CameraEffect = ({ v = new THREE.Vector3() }) => {
    return useFrame((state) => {
      state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 1)
    })
  }

  export default CameraEffect