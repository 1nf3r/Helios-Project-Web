import { Box, Text, Flex, Img } from './ChakraElements'
import { ArrowDownIcon } from './ChakraIcons'
import NextLink from 'next/link'
import PortfolioNav from './PortfolioNav'
import SocialButtons from './SocialButtons'

const TitleSection = () => {
    return(
        <Flex 
        w='100%'
        h='100vh'
        top='7rem'
        as='section' 
        align='center'
        m='auto' 
        direction='column'
        justify='star' 
        position='relative'
        >
            <Img
            borderRadius='full'
            boxSize='8.5rem'
            src='/favicon.svg'
            alt='Helios Project'
            />
            <Box mt='1rem'>
                <Text
                    as='h1'
                    fontFamily='Comfortaa'
                    fontSize='5.9vmin'
                    color='white'
                    >
                    Jose Antonio Miranda
                </Text>
                <Text
                    as='h2'
                    fontSize='3vmin'
                    fontFamily='Comfortaa'
                    color='white'
                    align='center'
                    >
                    Desarrollador y Sysadmin
                </Text>
            </Box>
            <Box mt='3rem' align='center'>
                <PortfolioNav direction={"row"} />
                <SocialButtons />
            </Box>
            <Box mt='7rem'>
                <NextLink href="#first-section"> 
                    <ArrowDownIcon fontSize='1.5rem' style={{cursor: 'pointer', color: '#C8F9FF'}} />
                </NextLink>
            </Box>
            
        </Flex>
    )
}

export default TitleSection