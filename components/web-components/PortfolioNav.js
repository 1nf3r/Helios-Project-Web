import NextLink from 'next/link'
import { Text,Flex, Link } from './ChakraElements'

const PortfolioNav = ({direction}) => {
    return(
        <Flex direction={direction} justify='center' gap={['2rem','1rem']} my={['3rem','1rem']}>
            <Text fontSize={['7.2vmin','3.2vmin']} as='em' className='hover-underline'>
                <Link style={{textDecoration: 'none'}} as={NextLink} href="#first-section">Sobre Mí</Link>
            </Text>
            {/* <Text fontSize={['7.2vmin','3.2vmin']} as='em' className='hover-underline'>
                <Link style={{textDecoration: 'none'}} as={NextLink} href="#second-section">Experiencia</Link>
            </Text> */}
            <Text fontSize={['7.2vmin','3.2vmin']} as='em' className='hover-underline'>
                <Link style={{textDecoration: 'none'}} as={NextLink} href="#third-section">Habilidades</Link>
            </Text>
        </Flex>
    )
}

export default PortfolioNav