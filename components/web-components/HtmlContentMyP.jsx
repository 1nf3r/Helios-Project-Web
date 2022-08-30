import { Navbar } from "./NavBar";
import { Divider, Box } from './ChakraElements'
import ProjectCard from "./ProjectCard";

const MyPrHtmlContent = () => {
    const firstCard = {
        title: 'ProdisCom',
        position: 'unset',
        content: 'Aplicación de mensajería instantánea para Android realizada para la fundación de Prodis.',
        link:'http://localhost:3000/mis-proyectos',
        img: '/images/prodiscom.png',
        alt: 'Logo de la aplicacion Prodiscom'
    }
    const secondCard = {
        title: 'ERP Java',
        position: 'flex-end',
        content: 'Software de gestión empresarial web con módulo de ventas creado con Spring Boot.',
        link:'http://localhost:3000/mis-proyectos',
        img: '/images/sales_4_us.png',
        alt: 'Logo del erp Sales 4 Us'
    }

    const thirdCard = {
        title: 'Snuck Fish',
        position: 'unset',
        content: 'Videojuego creado con unity, basado en el tradicional juego para móviles "snake".',
        link:'http://localhost:3000/mis-proyectos',
        img: '/images/snuck_fish.jpg',
        alt: 'Videojuego SnuckFish'
    }
    return (
        <>
            <Box color='white' bgColor='gray.900'>
                <Navbar />
                <Divider mt='1rem'/>
            </Box>
            <ProjectCard data={firstCard}/>
            <ProjectCard data={secondCard}/>
            <ProjectCard data={thirdCard}/>
        </>
    )
}

export default MyPrHtmlContent