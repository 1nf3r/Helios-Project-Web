import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {useRef} from "react";
import { Scroll, ScrollControls } from '@react-three/drei'
import { BufferAttribute, BufferGeometry, PointsMaterial } from "three";

//Not implemented (testing)

const ScrollAnimation = () => {
    const parameters = {
        materialColor: '#ffeded'
    }
    const objectsDistance = 4
    const particlesCount = 300
    const mesh1 = useRef(), mesh2 = useRef(), mesh3 = useRef()
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
    // const { height, width } = useThree((state) => state.viewport)

    return(
        <Canvas
        camera={{ fov: 40, near: 0.1, far: 100, position: [0, 0, 6] }}
        style={{position:"fixed", left:0, right:0, backgroundColor: '#1e1a20', zIndex: -1}} 
        >
          <mesh>
            <points args={[particlesGeometry]}>
                <pointsMaterial args={[particlesMaterial]} />
            </points>
          </mesh>
          <ScrollControls pages={3}>
            <Scroll>
              <mesh ref={mesh1} 
                position={[1.5,- objectsDistance * 0,0]} 
                >
                <torusBufferGeometry 
                args={[1,0.4,16,60]} 
                />
                <meshBasicMaterial color='white' />
              </mesh>
            </Scroll>
            <Scroll>
              <mesh ref={mesh2} 
              position={[-1.5,- objectsDistance * 1,0]} 
              >
                <coneBufferGeometry 
                args={[1,2,32]}
                />
                <meshBasicMaterial color='white' />
              </mesh>
            </Scroll>
            <Scroll>
              <mesh ref={mesh3} 
                position={[1.5,- objectsDistance * 2,0]}
                >
                <torusKnotBufferGeometry 
                args={[0.8,0.35,100,16]} 
                />
                <meshBasicMaterial color='white' />
              </mesh>
            </Scroll>
          </ScrollControls>
        </Canvas>
    )
}

export default ScrollAnimation