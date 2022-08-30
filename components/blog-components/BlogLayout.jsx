import Link from 'next/link'
import { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber';
import {
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Box,
  Img,
  Divider,
} from '../web-components/ChakraElements'
import { SearchIcon } from '../web-components/ChakraIcons';
import { Navbar } from '../web-components/NavBar';
import { PostListItem } from './PostListItem';
import Computer from '../three-components/BlogBanner/Computer';
import Loader from '../three-components/ProgressLoader';

const BlogLayout = ({posts}) => {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPost = posts
      .sort(
        (a, b) => (a.id - b.id)
      )
      .filter((data) => 
      data.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    return (
        <Box>
            <Box>
                <Box w={["100%","100%","80%"]} 
                m='auto' 
                h="30vh"
                >
                <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 30] }} >
                    <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.1} />
                    <directionalLight />
                    <Computer />
                    </Suspense>
                    
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
                        src='https://cdn.pixabay.com/photo/2022/06/01/17/40/landscape-7236275_960_720.jpg' /* ={`/${post.coverPage}`} */
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
        </Box>
    )
}

export default BlogLayout