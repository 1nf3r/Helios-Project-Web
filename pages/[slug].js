import {MDXRemote} from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "../lib/mdx"
import MDXComponents from '../components/blog-components/MDXComponents';
import styles from '../styles/Blog.module.css' //Hay que quitarlo


export default function Post({source, frontmatter})  {
    return (
        <div className={styles.container}>
            <MDXRemote {...source} components={MDXComponents}/>
        </div>
    )
}

export async function getStaticProps({params}) {
    const {source, fronmatter} = await getFileBySlug(params.slug)
    return {
        props: { source, fronmatter}
    }
}

export async function getStaticPaths(){
    const posts = await getFiles()
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, "")
        }
    }))
    return {
        paths,
        fallback: false,
    }
}