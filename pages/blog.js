import Head from 'next/head'
import Link from 'next/link'
import { getAllFilesMetadata } from '../lib/mdx'
// import styles from '../styles/Blog.module.css'
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  SimpleGrid,
  Box,
  Img,
} from '@chakra-ui/react'
import { Navbar } from '../components/web-components/NavBar';
import BlogHeader from '../components/blog-components/BlogHeader';

 const Blog = ({ posts }) => {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPost = posts
      .sort(
        (a, b) => (a.id - b.id)
      )
      .filter((data) => 
      data.title.toLowerCase().includes(searchValue.toLowerCase())
      )

    return (
      <Flex bg="transparent">
        <Head>
            <title>Helios Blog</title>
            <meta name="Helios Blog" content="IT Blogs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <BlogHeader />
          <SimpleGrid  columns={3} spacing={10} width='80%'  m='auto' my='10'>
            {!filteredBlogPost.length && 'No post found :('}
            {filteredBlogPost.sort(
              function (a,b){
                return a.id - b.id
              }
            )
            .reverse()
            .map((post) => (
              <Box p={4} display={{ md: 'flex' }}>
                <Link key={post.slug} href={`/${post.slug}`} >
                  <a>
                    <Box flexShrink={0}>
                      <Img
                        borderRadius='lg'
                        
                        src='https://bit.ly/2jYM25F'
                        alt='Test'
                      />
                    </Box>
                    <Box textAlign='center' mt='4'>
                          <h2>{post.title}</h2>
                          <p>{post.date}</p>
                    </Box>
                  </a>
                </Link>
            </Box>
            ))}
          </SimpleGrid>
        </main>
        {/* <footer>
          <p>footer ❤️</p>
        </footer> */}
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