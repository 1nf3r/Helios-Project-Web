import {
    Box,
    Text,
    Flex,
} from '../components/web-components/ChakraElements'
import Footer from '../components/web-components/Footer'
import SkillSquare from '../components/web-components/SkillSquare'
import TitleSection from '../components/web-components/TitleSection'

export default function Portfolio() {
    return(
        <Box bgColor='#111618' >
            <TitleSection />
            <Flex 
            w='100%'
            h='100vh'
            as='section' 
            align='left'
            m='auto' 
            direction='column'
            justify='star'
            id='first-section'
            >
                <Box mx='15rem' my='4rem'>
                    <Text
                    as='h2'
                    fontSize='4.7vmin'
                    color='white'
                    align='left'
                    >
                        Sobre mí
                    </Text>
                </Box>
            </Flex>
            <Flex 
            w='98vw'
            h='100vh'
            as='section' 
            align='left'
            m='auto'
            justify='star'
            direction='column'
            id='second-section'
            >
                <Box mx='15rem' my='4rem'>
                    <Text
                    as='h2'
                    fontSize='4.7vmin'
                    color='white'
                    align='left'
                    >
                        Experiencia
                    </Text>
                </Box>
            </Flex>
            <Flex 
            w='100%'
            h='100vh'
            as='section' 
            align='left'
            m='auto' 
            direction='column'
            justify='star'
            id='third-section'
            >
                <Box mx='15rem' my='4rem' mb='2rem'>
                    <Text
                        as='h2'
                        fontSize='4.7vmin'
                        color='white'
                        align='left'
                        >
                        Habilidades
                    </Text>
                </Box>
                <Box 
                mx='14rem' 
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