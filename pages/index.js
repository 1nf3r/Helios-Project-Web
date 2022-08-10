import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import CameraEffect from '../components/three-components/CameraEffect';
import EnergyCore from '../components/three-components/EnergyCore/EnergyCore';
import HomeContent from '../components/web-components/HomeContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Helios Project</title>
        <meta name="description" content="Helios Project Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.scene}>
        <Canvas className={styles.canvas} >
          <PerspectiveCamera makeDefault position={[0, 0, 13]} />
          {/* <CameraEffect /> */}
          <EnergyCore />
        </Canvas>
        <HomeContent />
      </div>
    </div>
  )
}