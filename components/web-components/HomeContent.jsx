import Link from 'next/dist/client/link';
import { Box, Text, Button } from '../blog-components/ChakraElements'

const HomeContent = () => {
    return (
        <Box position='absolute' top='0' right='0' left='0' h='100vh'>
          <Box w='100%' p='2rem' h='100%'>
            <Text as='h1' 
            textAlign='center'
            fontFamily='Syne Mono'
            fontSize={['13vmin','11vmin','11vmin','11vmin','13vmin']}
            color='white'
            >
              HELIOS PROJECT
            </Text>
            <Box as='nav'
            textAlign= 'center'
            mt={['21rem','15rem','20rem','22rem','23rem','33rem']}
            >
              <Link href="/mis-proyectos">
                <a>
                  <Button as='button'
                   variant='outline'
                   border='1px'
                   borderColor='white'
                   color='white'
                   borderRadius='0'
                   fontFamily='Syne Mono' 
                   fontSize='1.25rem' 
                   ml='0.62rem'
                   mt={['0.62rem','0.62rem','0']}
                   w='13rem'
                   h='3.12rem'
                   _hover={{bg: '#ffffff', color:'#000000'}} 
                   >
                    Mis Proyectos
                  </Button>       
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  <Button as='button' 
                  variant='outline'
                  border='1px'
                  borderColor='white'
                  color='white'
                  borderRadius='0'
                  fontFamily='Syne Mono' 
                  fontSize='1.25rem'
                  ml='0.62rem'
                  mt={['0.62rem','0.62rem','0']}
                  w='13rem'
                  h='3.12rem'
                  _hover={{bg: '#ffffff', color:'#000000'}} 
                   >
                    Blog
                  </Button>                
                </a>
              </Link>
              <Link href="/contacto">
                <a>
                  <Button as='button' 
                  variant='outline'
                  border='1px'
                  borderColor='white'
                  color='white'
                  borderRadius='0'
                  fontFamily='Syne Mono' 
                  fontSize='1.25rem' 
                  ml='0.62rem'
                  mt={['0.62rem','0.62rem','0']}
                  w='13rem'
                  h='3.12rem'
                  _hover={{bg: '#ffffff', color:'#000000'}} 
                  >
                    Contacto
                  </Button>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
    )
}

export default HomeContent