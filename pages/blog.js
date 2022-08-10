import Head from 'next/head'
import Link from 'next/link'
import { getAllFilesMetadata } from '../lib/mdx'
import styles from '../styles/Blog.module.css'

 const Blog = ({ posts }) => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Helios Blog</title>
            <meta name="Helios Blog" content="IT Blogs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Helios Blog
        </h1>

        {/* <p className={styles.description}>
          Comienza editando{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/${post.slug}`} 
          >
            <a className={styles.card}>
              <h2>{post.title} &rarr;</h2>
              <p>{post.date}</p>
            </a>

          </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>test</p>
      </footer>
    </div>
  )
 }

export async function getStaticProps(){
    const posts = await getAllFilesMetadata()
    return {
      props: {posts}
    }
  }

  export default Blog