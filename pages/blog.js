import Head from 'next/head'
import Link from 'next/link'
import { getAllFilesMetadata } from '../lib/mdx'
import styles from '../styles/Blog.module.css'

import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Flex
} from '@chakra-ui/react'

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
      <Flex bg="gray.800">
<div className={styles.container}>
          <Head>
              <title>Helios Blog</title>
              <meta name="Helios Blog" content="IT Blogs" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <main className={styles.main}>
            <h1 className={styles.title}>
              Blogs Recientes
            </h1>

            <InputGroup bg="transparent">
              <Input aria-label='Search by title' placeholder='Search by title' onChange={(e) => setSearchValue(e.target.value)} />
              <InputRightElement>
                <SearchIcon color="white" />
              </InputRightElement>
            </InputGroup>

            <div className={styles.grid}>
              {!filteredBlogPost.length && 'No post found :('}
              {filteredBlogPost.sort(
                function (a,b){
                  return a.id - b.id
                }
              )
              .reverse()
              .map((post) => (
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
          <p>footer</p>
        </footer>
      </div>
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