import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
    boxRef.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[4,4,4]} />
      <meshBasicMaterial color={"blue"} />
    </mesh>
  );
};

export default Cube