import {MDXRemote} from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "../lib/mdx"
import MDXComponents from '../components/blog-components/MDXComponents';
import { Layout } from '../components/blog-components/Layout';
// import styles from '../styles/Blog.module.css' //Hay que quitarlo


export default function Post({source, frontmatter})  {
    return (
        <Layout type='post' metadata={frontmatter}>
            <MDXRemote {...source} components={MDXComponents}/>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const {source, frontmatter} = await getFileBySlug(params.slug)
    return {
        props: { 
            source,
            frontmatter
        }
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