import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Core from '../components/three-components/core';
import Caption from '../components/three-components/Caption';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.scene}>
      <Canvas
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <Caption>{`Helios Project`}</Caption>
        {/* <ambientLight color={"white"} intensity={0.3} /> */}
        {/* <Core position={[0, -1, 0]} /> */}

      </Canvas>
      <main className={styles.main}>
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
      </main>
    </div>
  )
}

