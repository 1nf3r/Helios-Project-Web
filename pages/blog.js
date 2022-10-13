import Head from 'next/head'
import { getAllFilesMetadata } from '../lib/mdx'
import { Flex } from '../components/web-components/ChakraElements'
import Footer from '../components/web-components/Footer';
import BlogLayout from '../components/blog-components/BlogLayout';

 const Blog = ({ posts }) => {
    return (
      <Flex>
        <Head>
            <title>Helios Blog</title>
            <meta name="Helios Blog" content="IT Blogs" />
            <link rel="icon" href="/favicon.svg" />
        </Head>
        <main>
          <BlogLayout posts={posts} />
          <Footer />
        </main>
      </Flex>
  )
 }

export async function getStaticProps(){
    const posts = await getAllFilesMetadata()
    return {
      props: {posts}
    }
  }

  export default Blog