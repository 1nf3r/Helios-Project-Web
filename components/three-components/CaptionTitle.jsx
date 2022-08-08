import React from "react";
import { useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const CaptionTitle = ({ children }) => {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        position={[0, 5, 0]}
        lineHeight={0.8}
        font="/fonts/Syne_Mono/SyneMono-Regular.ttf"
        fontSize={width / 17}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle">
        {children}
      </Text>
    )
  }

  export default CaptionTitle