import {
    Box,
    Text,
    Flex,
    Img,
} from '../components/web-components/ChakraElements'
import Footer from '../components/web-components/Footer'
import SkillSquare from '../components/web-components/SkillSquare'
import TitleSection from '../components/web-components/TitleSection'
import useWindowDimensions from '../components/web-components/WebDimensions'
import { Navbar } from '../components/web-components/NavBar'

export default function Portfolio() {
    
    const { width, height } = useWindowDimensions();
    return(
        <Box bgColor='#111618' >
            <Box display={['block','none']}>
                <Navbar height={height} width={width} top={'55rem'} />
            </Box>
            <TitleSection height={height} />
            <Flex 
            w='100%'
            h={[height,'$100vh']}
            as='section' 
            align='left'
            m='auto' 
            direction='column'
            justify='star'
            id='first-section'
            >
                <Box mx={['auto','15rem']} my='3rem'>
                    <Text
                    as='h2'
                    fontSize={['8.7vmin','4.7vmin']}
                    color='white'
                    align='left'
                    >
                        Sobre mí
                    </Text>
                </Box>
                <Box w={['75%','65%']} mx='auto'>
                    <Text
                    as='p'
                    fontSize={['7vmin','3.7vmin']}
                    color='white'
                    align={['left','justify']}
                    >
                        Administrador de sistemas y desarrollador de aplicaciones web y multiplataforma,
                        entusiasta del sistema operativo Linux, formándome actualmente para acceder
                        a la carrera de inteligencia artificial.
                    </Text>
                    <Img
                    borderRadius='lg'
                    mt='3rem'
                    mx='auto'
                    boxSize={['19rem']}
                    src='/images/sobre-mi/profile.jpg'
                    alt='My Profile'
                    />
                </Box>
            </Flex>
            <Flex 
            w='100%'
            h={[height/1.5,'$100vh']}
            as='section' 
            align='left'
            m='auto' 
            direction='column'
            justify='star'
            id='third-section'
            >
                <Box mx={['auto','15rem']} my='4rem' mb='2rem'>
                    <Text
                        as='h2'
                        fontSize={['8.7vmin','4.7vmin']}
                        color='white'
                        align='left'
                        >
                        Habilidades
                    </Text>
                </Box>
                <Box 
                mx={['2rem','14rem']} 
                h='100%'
                my='1rem'
                align='center'
                >
                    <SkillSquare />                  
                </Box>
            </Flex>
            <Footer />
        </Box>
    )
}