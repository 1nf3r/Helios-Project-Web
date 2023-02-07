import {
    Box,
    Text,
    Flex,
} from '../components/web-components/ChakraElements'
import Footer from '../components/web-components/Footer'
import SkillSquare from '../components/web-components/SkillSquare'
import TitleSection from '../components/web-components/TitleSection'
import { useState,useEffect } from 'react'
import { Navbar } from '../components/web-components/NavBar'

export default function Portfolio() {
    const useWindowDimensions = function () {
        let dimensions = useState({
            width: undefined,
            height: undefined,
        }), windowDimensions = dimensions[0], setWindowDimensions = dimensions[1];
        useEffect(function () {
            function handleResize() {
                setWindowDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            handleResize();
            window.addEventListener('resize', handleResize);
            return function () { return window.removeEventListener('resize', handleResize); };
        }, []); // Empty array ensures that effect is only run on mount
        return windowDimensions;
    };
    const { width, height } = useWindowDimensions();
    return(
        <Box bgColor='#111618' >
            <Box  display={['block','none']}>
                <Navbar />
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
                <Box mx={['auto','15rem']} my='4rem'>
                    <Text
                    as='h2'
                    fontSize={['8.7vmin','4.7vmin']}
                    color='white'
                    align='left'
                    >
                        Sobre mí
                    </Text>
                </Box>
            </Flex>
            <Flex 
            w='98vw'
            h={[height,'$100vh']}
            as='section' 
            align='left'
            m='auto'
            justify='star'
            direction='column'
            id='second-section'
            >
                <Box mx={['auto','15rem']} my='4rem'>
                    <Text
                    as='h2'
                    fontSize={['8.7vmin','4.7vmin']}
                    color='white'
                    align='left'
                    >
                        Experiencia
                    </Text>
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