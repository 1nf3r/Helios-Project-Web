import Head from 'next/head'
import { Box } from '../components/web-components/ChakraElements'
import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from 'react'
// import CameraEffect from '../components/three-components/CameraEffect';
import EnergyCore from '../components/three-components/EnergyCore/EnergyCore';
import HomeContent from '../components/web-components/HomeContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Helios Project</title>
        <meta name="description" content="Helios Project Website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Box position='relative' h='100vh' bg='black'  >
      {/* <Suspense fallback={null}> */}
        <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 13] }} >
          {/* <CameraEffect /> */}
          <EnergyCore />
        </Canvas>
      {/* </Suspense> */}
        <HomeContent />
      </Box>
    </div>
  )
}