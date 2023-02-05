import { Button } from './ChakraElements'

const HomeButton = ({title}) => {
    return (
        <Button as='button'
        variant='outline'
        border='1px'
        borderColor='white'
        color='white'
        borderRadius='0'
        fontFamily='Syne Mono' 
        fontSize='1.25rem' 
        ml='0.62rem'
        mt={['0.62rem','0.62rem','0']}
        w='13rem'
        h='3.12rem'
        _hover={{bg: '#ffffff', color:'#000000'}} 
        >
        {title}
    </Button>  
   )
}

export default HomeButton