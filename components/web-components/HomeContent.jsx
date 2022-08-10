import styles from '../../styles/Home.module.css'
import Link from 'next/dist/client/link';

const HomeContent = () => {
    return (
        <div className={styles.htmlContent}>
          <div className={styles.container}>
            <h1 className={styles.title}>HELIOS PROJECT</h1>
            <nav className={styles.main}>
              <Link href="/mis-proyectos"><a><button className={styles.main_menu}>Mis Proyectos</button></a></Link>
              <Link href="/blog"><a><button className={styles.main_menu}>Blog</button></a></Link>
              <Link href="/sobre-mi"><a><button className={styles.main_menu}>Sobre Mi</button></a></Link>
            </nav>
          </div>
        </div>
    )
}

export default HomeContent