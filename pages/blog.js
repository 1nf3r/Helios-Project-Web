import Head from 'next/head'
import Link from 'next/link'
import { getAllFilesMetadata } from '../lib/mdx'
import { useState } from "react";
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import {
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  SimpleGrid,
  Box,
  Img,
  Divider,
} from '../components/web-components/ChakraElements'
import { SearchIcon } from "../components/web-components/ChakraIcons";
import { Navbar } from '../components/web-components/NavBar';
import { PostListItem } from '../components/blog-components/PostListItem';
import Footer from '../components/web-components/Footer';
import Cube from '../components/three-components/BlogBanner/Cube';

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
      <Flex>
        <Head>
            <title>Helios Blog</title>
            <meta name="Helios Blog" content="IT Blogs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box>
              <Box w={["100%","100%","80%"]} 
              m='auto' 
              h="30vh"
              >
                <Canvas flat linear>
                  <PerspectiveCamera makeDefault position={[0, 0, 13]} />
                  <Cube />
                </Canvas>
              </Box>
              <Divider display={['none', 'flex', 'flex','flex']}/>
              <Navbar />
              <Divider mt='1.5rem' display={['none', 'flex', 'flex','flex']}/>
              <Box w={["100%", "35%"]} m='auto' my='10' >
              <InputGroup bg="transparent" width={['85%','80%']} m='auto' >
                  <Input aria-label='Buscar por categoria' 
                  placeholder='Buscar por categoria' 
                  onChange={(e) => setSearchValue(e.target.value)} />
                  <InputRightElement>
                  <SearchIcon />
                  </InputRightElement>
              </InputGroup>
              </Box>
          </Box>
          <SimpleGrid  columns={[1,1,2,3]} spacing={10} width={['95%','80%']}  m='auto' my='10'>
            {!filteredBlogPost.length && 'No se ha encontrado ningun post'}
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
                        src='https://cdn.pixabay.com/photo/2022/06/01/17/40/landscape-7236275_960_720.jpg'
                        alt='Test'
                      />
                    </Box>
                    <Box textAlign='left' mt='4'>
                    <PostListItem
                      title={post.title}
                      date={post.date}
                      tags={post.tags}
                    />
                    </Box>
                  </a>
                </Link>
            </Box>
            ))}
          </SimpleGrid>
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