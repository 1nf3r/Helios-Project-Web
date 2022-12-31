import {
    Box,
    Text,
    Flex,
} from '../components/web-components/ChakraElements'
import Footer from '../components/web-components/Footer'
import TitleSection from '../components/web-components/TitleSection'

export default function Portfolio() {
    return(
        <Box bgColor='gray.900'>
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
                <Box ml='1rem' mt='1rem'>
                    <Text
                        as='h2'
                        fontSize='3vmin'
                        color='white'
                        align='left'
                        >
                        Educación
                    </Text>
                </Box>
            </Flex>
            <Flex 
            w='100%'
            h='100vh'
            as='section' 
            align='left'
            m='auto'
            justify='star'
            direction='column'
            id='second-section'
            >
                <Box ml='1rem' mt='1rem'>
                    <Text
                        as='h2'
                        fontSize='3vmin'
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
                <Box ml='1rem' mt='1rem'>
                    <Text
                        as='h2'
                        fontSize='3vmin'
                        color='white'
                        align='left'
                        >
                        Habilidades
                    </Text>
                </Box>
            </Flex>
            <Footer />
        </Box>
    )
}