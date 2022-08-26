import { Box,Text,Image, Flex } from './ChakraElements'
import { GithubIcon } from './ChakraIcons';
import Link from 'next/link';

const ProjectCard = ({data}) => {
    return (
        <Flex h='100vh' justifyContent={data.position} >
            <Box
            as='section'
            position='relative'
            my={['0rem', 'auto']}
            mx={['auto','3rem']}
            p={4}
            display={{ md: 'flex' }} 
            w={['95%','50%']}
            h={['65vh','60vh','30vh','30vh']}
            bgColor='gray.600'
            borderRadius='1rem'
            zIndex={-1}
            >
                <Box flexShrink={0} m='auto'>
                    <Image
                    m='auto'
                    borderRadius='lg'
                    width={['100%', '100%','18rem']}
                    height={['16rem', '14rem']}
                    src={data.img}
                    alt={data.alt}
                    />
                </Box>
                <Box mt={{ base: 4, md: 3 }} ml={{ md: 6 }}>
                    <Text
                    as='h2'
                    fontWeight='bold'
                    textTransform='uppercase'
                    textDecoration='underline'
                    fontFamily='Comfortaa'
                    fontSize={['8vmin','5vmin','5vmin','5vmin','6vmin']}
                    color='white'
                    >
                    {data.title}
                    </Text>
                    <Text 
                    color='white'
                    as='h3'
                    mb={['0.5rem', '1.5rem']}
                    >
                    {data.content}
                    </Text>
                    <Link
                    display='block'
                    fontSize='lg'
                    lineHeight='normal'
                    fontWeight='semibold'
                    href={data.link}
                    >
                        <a>
                            <p style={{display: 'flex', color:'aqua'}}>
                                Link del proyecto en Github 
                                <GithubIcon style={{marginTop:'0.3rem', marginLeft:'0.5rem'}}/>
                            </p>
                        </a>
                    </Link>
                </Box>
            </Box>
        </Flex>
    )
}

export default ProjectCard