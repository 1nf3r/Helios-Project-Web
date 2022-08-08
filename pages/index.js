import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Core from '../components/three-components/Core';
import CaptionTitle from '../components/three-components/CaptionTitle';
import CameraEffect from '../components/three-components/CameraEffect';
// import DButton from '../components/three-components/Buttons'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.scene}>
      <Canvas
        className={styles.canvas}
        camera={{
          position: [0, 0, 7],
        }}
      >
        <CaptionTitle>{`HELIOS PROJECT`}</CaptionTitle>
        <CameraEffect />
        {/* <button className={styles.button}>Test</button> */}


        {/* <DButton>{`Inicio`}</DButton> */}

        {/* <ambientLight color={"white"} intensity={0.3} /> */}
        {/* <Core position={[0, -1, 0]} /> */}

      </Canvas>

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
    </div>
  )
}
