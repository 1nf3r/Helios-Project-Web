
import React from "react";

const Core = (props) => {
  return (
    <mesh {...props} >
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Core;