import {MDXRemote} from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "../lib/mdx"
import MDXComponents from '../components/blog-components/MDXComponents';

export default function Post({source, frontmatter})  {
    return <MDXRemote {...source} components={MDXComponents}/>
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