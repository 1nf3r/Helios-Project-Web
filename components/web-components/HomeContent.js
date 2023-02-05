import Link from 'next/link';
import { Box, Text } from './ChakraElements'
import HomeButton from './HomeButton';

const HomeContent = () => {
    return (
        <Box position='fixed' top='0' right='0' left='0' h='100vh'>
          <Box w='100%' mt={['2vh','4vh']} h='100%'>
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
            position='fixed'
            w='100%'
            mt={['45vh','50vh']}
            >
              <Link href="/mis-proyectos">
                  <HomeButton title='Mis Proyectos' />      
              </Link>
              <Link href="/blog">
                  <HomeButton title='Blog' />
              </Link>
              <Link href="/contacto">
                  <HomeButton title='Sobre Mí' />
              </Link>
            </Box>
          </Box>
        </Box>
    )
}

export default HomeContent