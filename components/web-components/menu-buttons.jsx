import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const MenuButtons = () => {
    return <div>
        <button className={styles.main_menu}><Link href={`/sobre-mi`}><a>Mis Proyectos</a></Link></button>
        <button className={styles.main_menu}><Link href={`/sobre-mi`}><a>Blog</a></Link></button>
        <button className={styles.main_menu}><Link href={`/sobre-mi`}><a>Sobre Mi</a></Link></button>
    </div>
}

export default MenuButtons