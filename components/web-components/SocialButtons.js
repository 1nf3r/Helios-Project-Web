import { Box, IconButton } from './ChakraElements'
import { LinkedinIcon, GithubIcon } from './SocialIcons'

const SocialButtons = () => {
    return (
        <Box mt='1.7rem'>
            <a href="https://www.linkedin.com/in/jose-antonio-miranda-segura-159a99151/" rel="noreferrer" target="_blank">
                <IconButton
                variant='outline' 
                colorScheme='cyan'
                color='cyan.700'
                _hover={{bgColor: 'cyan.300'}}
                size='lg'
                fontSize='2.7rem'
                icon={<LinkedinIcon />}
                mr='1rem'
                />
            </a>
            <a href="https://github.com/1nf3r" rel="noreferrer" target="_blank">
                <IconButton
                variant='outline'
                colorScheme='red' 
                color='red.700'
                size='lg'
                fontSize='2.7rem'
                _hover={{bgColor: 'red.200'}}
                icon={<GithubIcon />} 
                />
            </a>
        </Box>
    )
}

export default SocialButtons