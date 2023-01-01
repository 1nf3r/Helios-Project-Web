import { Box, IconButton } from './ChakraElements'
import { LinkedinIcon, GithubIcon } from './ChakraIcons'

const SocialButtons = () => {
    return (
        <Box mt='1.7rem'>
            <a href="https://www.linkedin.com/in/jose-antonio-miranda-segura-159a99151/" rel="noreferrer" target="_blank">
                <IconButton
                variant='outline' 
                colorScheme='cyan'  
                size='lg'
                icon={<LinkedinIcon fontSize='2.3rem' />}
                mr='1rem'
                />
            </a>
            <a href="https://github.com/1nf3r" rel="noreferrer" target="_blank">
                <IconButton
                variant='outline' 
                colorScheme='cyan'  
                size='lg'
                icon={<GithubIcon fontSize='2.3rem' />} 
                />
            </a>
        </Box>
    )
}

export default SocialButtons