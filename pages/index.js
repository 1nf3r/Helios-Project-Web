import Head from 'next/head'
import { Box } from '../components/web-components/ChakraElements'
import { Canvas } from "@react-three/fiber";
import EnergyCore from '../components/three-components/EnergyCore/EnergyCore';
import HomeContent from '../components/web-components/HomeContent';
import useWindowDimensions from '../components/web-components/WebDimensions';

export default function Home() {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <Head>
        <title>Helios Project</title>
        <meta name="description" content="Helios Project Website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Box position='relative' h={[height,'100vh']} bg='black'  >
        <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 13] }} >
          <EnergyCore />
        </Canvas>
        <HomeContent />
      </Box>
    </div>
  )
}