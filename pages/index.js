import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Canvas } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import CaptionTitle from '../components/three-components/CaptionTitle';
import CameraEffect from '../components/three-components/CameraEffect';
import MenuButtons from '../components/web-components/menu-buttons';
import EnergyCore from '../components/three-components/EnergyCore/EnergyCore';


export default function Home() {
  return (

    <div className={styles.container_fluid}>
      <Head>
        <title>Helios Project</title>
        <meta name="description" content="Helios Project Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.scene}>
        <Canvas
          className={styles.canvas}
          camera={{
            position: [0, 0, 7],
          }}
        >
          {/* <CaptionTitle>{`HELIOS PROJECT`}</CaptionTitle> */}
          {/* <CameraEffect /> */}
          <EnergyCore />
          
          <Html fullscreen >
            <h1 className={styles.title}>HELIOS PROJECT </h1>
            <nav className={styles.main}>
              <MenuButtons />
            </nav>
          </Html>
        </Canvas>
      </div>
    </div>
  )
}

        {/* <main className={styles.main}>
          <h1 className={styles.title}>
            Helios Project
          </h1>

          <div className={styles.grid}>
            <Link 
              key={"sobre-mi"}
              href={`sobre-mi`} 
            >
              <a className={styles.card}>
                <h2> Test &rarr;</h2>
                <p>Another test</p>
              </a>
            </Link>
          </div>
        </main> */}

      {/* <ambientLight color={"white"} intensity={0.3} /> */}
      
