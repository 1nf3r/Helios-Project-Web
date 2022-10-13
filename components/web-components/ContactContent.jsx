import Footer from "./Footer"
import { useState, useEffect } from "react"
import { Box,Text,useColorModeValue } from './ChakraElements'

const ContactContent = () => {
    const bg = useColorModeValue('white', 'gray.900')
    const color = useColorModeValue('black', 'white')
    const [show, setShow] = useState(false)
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true)
      }, 3500)
      return () => clearTimeout(timeout)
    }, [show])
    if (!show) return null
    return(
        <Box bg={bg} color={color}>
            <Box minH='80vh' m='auto'w='80%' pt='4rem' >
                <Text as='h1' 
                style={{textDecoration: 'underline'}}  
                textAlign={['center','left']} 
                fontSize='4xl'>
                  Sobre mi
                </Text>
            </Box>
            <Footer />
        </Box>
    )
  }
  
export default ContactContent