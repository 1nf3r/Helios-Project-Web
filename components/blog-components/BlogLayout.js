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
  Text,
} from '../web-components/ChakraElements'
import { SearchIcon } from '../web-components/SocialIcons';
import { Navbar } from '../web-components/NavBar';
import { PostListItemV1 } from './PostListItemsV1';
import Computer from '../three-components/BlogBanner/Computer';
import Loader from '../three-components/ProgressLoader';

const BlogLayout = ({posts}) => {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPost = posts
      .sort(
        (a, b) => (a.id - b.id)
      )
      .filter((data) => 
        data.tag.toLowerCase().includes(searchValue.toLowerCase())
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
                        <directionalLight  color={'#ffffff'} position={[3,0,3]} intensity={1}/>
                        <directionalLight  color={'#ffffff'} position={[-3,0,3]} intensity={0.5}/>
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
            {!filteredBlogPost.length && 
            <Box width={['80vw']} minH={'30vh'} textAlign={'center'}>
                <br/>
                <br/>
                <br/>
                <Text>No se ha encontrado ningun post</Text>
            </Box>
            }
            {filteredBlogPost.sort(
                function (a,b){
                return a.id - b.id
                }
            )
            .reverse()
            .map((post) => (
                <Box key={post.slug} p={4} display={{ md: 'flex' }}>
                <Link href={`/${post.slug}`} >
                    <Box>
                        <Box flexShrink={0}>
                            <Img
                            borderRadius='lg'
                            src={post.coverPage}
                            alt='Null'
                            />
                        </Box>
                        <Box textAlign='left' mt='4'>
                        <PostListItemV1
                            title={post.title}
                            date={post.date}
                            tag={post.tag}
                        />
                        </Box>
                    </Box>
                </Link>
            </Box>
            ))}
            </SimpleGrid>
        </Box>
    )
}

export default BlogLayout