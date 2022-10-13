import Head from 'next/head'

export const HeadBlog = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="Helios Blog" content="IT Blogs" />
            <link rel="icon" href="/favicon.svg" />
        </Head>
    )
}  
