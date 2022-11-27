import { Code } from '../web-components/ChakraElements'
export const Route = ({ruta}) => {
    return (
        <Code  variant='solid' children={`${ruta}`}/> 
    )
}