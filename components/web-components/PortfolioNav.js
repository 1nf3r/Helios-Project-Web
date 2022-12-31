import NextLink from 'next/link'
import { Text,Flex, Link } from './ChakraElements'

const PortfolioNav = ({direction}) => {
    return(
        <Flex direction={direction} justify='center' gap='1rem' my='1rem'>
            <Text fontSize='2.8vmin' as='em' className='hover-underline'>
                <Link as={NextLink} href="#first-section">Educación</Link>
            </Text>
            <Text fontSize='2.8vmin' as='em' className='hover-underline'>
                <Link as={NextLink} href="#second-section">Experiencia</Link>
            </Text>
            <Text fontSize='2.8vmin' as='em' className='hover-underline'>
                <Link as={NextLink} href="#third-section">Habilidades</Link>
            </Text>
        </Flex>
    )
}

export default PortfolioNav