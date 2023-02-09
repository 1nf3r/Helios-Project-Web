import { Flex, Box, Text } from './ChakraElements'

const ExpSection = () => {
    return (
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
                <Box w={['75%','65%']} mx='auto'>
                    <Text
                    as='p'
                    fontSize={['7vmin','3.7vmin']}
                    color='white'
                    align='left'
                    >
                    
                    </Text>
                </Box>
            </Flex>
    )
}

export default ExpSection