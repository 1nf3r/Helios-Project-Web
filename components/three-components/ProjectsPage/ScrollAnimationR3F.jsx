import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { BufferAttribute, BufferGeometry, PointsMaterial } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ScrollAnimationR3F = () => {

    const Model3D = (props) => {
      const gltf = useLoader(GLTFLoader, `${props.route}`),
        [geometry, setGeometry] = useState()
      if (!geometry) {
        const scene = gltf.scene.clone(true)
        setGeometry(scene)
      }
      const primitiveProps = {
        object: geometry,
        position: props.position,
        scale: props.scale,
      }
      return <primitive {...primitiveProps} />
    }
    const parameters = {
        materialColor: '#ffeded'
    }
    const objectsDistance = 4
    const particlesCount = 300
    const mesh1 = useRef(), mesh2 = useRef(), mesh3 = useRef() 
    const lightRef = useRef()
    const sectionMeshes = [mesh1, mesh2, mesh3]
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 
    }
    const particlesGeometry = new BufferGeometry()
    particlesGeometry.setAttribute('position', new BufferAttribute(positions, 3))
    const particlesMaterial = new PointsMaterial({
        color: parameters.materialColor,
        sizeAttenuation: true,
        size: 0.03
    })
    useEffect(() => {
      let scrollY = window.scrollY
      let currentSection = 0

      window.addEventListener('scroll', () => {
          scrollY = window.scrollY
      })
    })

    function CameraEffects() {
      const startTime = Date.now()
      let current = startTime
      let elapsed = 0
      useFrame(({ camera }) => {
        const currentTime = Date.now()
        current = currentTime
        elapsed = current - startTime
        camera.position.y = - scrollY / window.innerHeight * objectsDistance
        mesh1.current.rotation.y -= -0.005;
        mesh2.current.rotation.y -= -0.005;
        mesh3.current.rotation.y -= -0.005;
        lightRef.current.intensity = Math.max(0.3, 
          Math.min(
            Math.abs(
              Math.cos(elapsed * 0.0009)), 
          1.5)
        )
      })
      return null
    }
    
    return(
        <group>
          <ambientLight ref={lightRef} />
          <mesh>
            <points args={[particlesGeometry]}>
                <pointsMaterial args={[particlesMaterial]} />
            </points>
          </mesh>
          <group 
           ref={mesh1}
           scale={[0.1,0.1,0.1]}
           position={[2,- objectsDistance * 0.1,0]}
          >
            <Model3D 
              position={[1.5,- objectsDistance * 0,0]}
              rotation={[0,0,0]}
              scale={[6,6,6]}
              route='/models/android_icon.glb'
            />
          </group>

          <group
           ref={mesh2}
           scale={[0.1,0.1,0.1]}
           position={[-2,- objectsDistance * 1,0]}
          >
            <Model3D 
              position={[1,- objectsDistance * 0.8,0]}
              rotation={[0,0,0]}
              scale={[6,6,6]}
              route='/models/java_icon.glb'
            />
          </group>
          
          <group 
           ref={mesh3}
           scale={[0.1,0.1,0.1]}
           position={[2,- objectsDistance * 1.9,0]}
          >
            <Model3D 
              position={[1.5,- objectsDistance * 2,0]}
              rotation={[0,0,0]}
              scale={[6,6,6]}
              route='/models/unity_icon.glb'
            />
          </group>
          <CameraEffects />
        </group>
    )
}

export default ScrollAnimationR3F