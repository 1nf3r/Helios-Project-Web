import { Box,Text,Image, Flex, Button } from './ChakraElements'
import { GithubIcon } from './ChakraIcons';
import NextLink from 'next/link';


const ProjectCard = ({data}) => {
    let contador = 10;
    setTimeout(() => { contador += contador }, 5000);
    console.log(contador);
    
    return (
        <Flex h={['80vh','100vh']} justifyContent={data.position} >
            <Box
            as='section'
            position='relative'
            my={['0rem', 'auto']}
            mx={['auto','3rem']}
            p={4}
            display={{ md: 'flex' }} 
            w={['95%','50%']}
            h={['65vh','60vh','36vh','36vh','40vh','30vh']}
            bgColor='gray.600'
            borderRadius='1rem'
            >
                <Box flexShrink={0} m='auto'>
                    <Image
                    m='auto'
                    borderRadius='lg'
                    width={['100%','13rem','9rem','12rem', '14rem']}
                    height={['16rem','13rem','9rem','12rem', '14rem']}
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
                    fontSize={['8vmin','5vmin','5vmin','4vmin','6vmin']}
                    color='white'
                    >
                    {data.title}
                    </Text>
                    <Text 
                    color='white'
                    as='h3'
                    mb={['0.5rem','0.5rem','0.5rem','0.5rem', '1.5rem']}
                    >
                    {data.content}
                    </Text>
                    <NextLink href={data.link}>
                        <a>
                        <Button variant='ghost' colorScheme='teal'>
                            Ver Codigo <GithubIcon style={{marginLeft: '0.5rem'}}/>
                        </Button>
                        </a>
                    </NextLink>
                </Box>
            </Box>
        </Flex>
    )
}

export default ProjectCard