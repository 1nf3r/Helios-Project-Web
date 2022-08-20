import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react'
import { Navbar } from "../web-components/NavBar";


const BlogHeader = () => {
    return (
        <Box>
                <Canvas style={{ position: "relative", width: "100%",height: "30vh", backgroundColor: "white"}}>
                    <PerspectiveCamera makeDefault position={[0, 0, 13]} />
                    <mesh>
                        
                    </mesh>
                </Canvas>
            <Navbar />
            <Box w="35%" m='auto' my='10' >
            <InputGroup bg="transparent" width="80%" m='auto' >
                <Input aria-label='Buscar por categoria' placeholder='Buscar por categoria' onChange={(e) => setSearchValue(e.target.value)} />
                <InputRightElement>
                <SearchIcon />
                </InputRightElement>
            </InputGroup>
            </Box>
        </Box>
        
    )
}

export default BlogHeader

