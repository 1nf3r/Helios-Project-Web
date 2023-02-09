import { Navbar } from "./NavBar";
import { Divider, Box } from './ChakraElements'
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

const MyPrHtmlContent = () => {
    const firstCard = {
        title: 'ProdisCom',
        position: 'unset',
        content: 'Aplicación de mensajería instantánea para Android realizada para la fundación de Prodis.',
        link:'https://github.com/1nf3r/ProdisComApp',
        img: '/images/prodiscom.png',
        alt: 'Logo de la aplicacion Prodiscom'
    }
    const secondCard = {
        title: 'ERP Java',
        position: 'flex-end',
        content: 'Software de gestión empresarial web con módulo de ventas creado con Spring Boot.',
        link:'https://github.com/1nf3r/ERP_Java',
        img: '/images/sales_4_us.png',
        alt: 'Logo del erp Sales 4 Us'
    }

    const thirdCard = {
        title: 'Snuck Fish',
        position: 'unset',
        content: 'Videojuego creado con unity, basado en el tradicional juego para móviles "snake".',
        link:'https://github.com/1nf3r/SnuckFishGame',
        img: '/images/snuck_fish.jpg',
        alt: 'Videojuego SnuckFish'
    }

    const fourthCard = {
        title: 'Helios Project',
        position: 'flex-end',
        content: 'Static site generator web-portfolio creada con NextJs, Chakra-ui y la libreria 3D ThreeJs',
        link:'https://github.com/1nf3r/Helios-Project-Web',
        img: '/images/favicon.svg',
        alt: 'Web Logo Helios Project'
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
            <ProjectCard data={fourthCard}/>
            <Footer />
        </>
    )
}

export default MyPrHtmlContent