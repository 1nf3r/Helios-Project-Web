import { Navbar } from "../components/web-components/NavBar";
import Head from "next/head";
import ContactAnimation from "../components/three-components/ContactPage/ContactAnimation";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Box, Divider } from '../components/web-components/ChakraElements'
import { OrbitControls } from "@react-three/drei";
import ContactContent from "../components/web-components/ContactContent";
import { Perf } from 'r3f-perf'

export default function Contacto() {
    const canvasStyle = {
        position:"fixed", 
        left:0, 
        right:0, 
        backgroundColor: '#1e1a20', 
        zIndex: -1,
        display: 'block'
    } 
    return (
        <div>
            <Head>
                <title>Contacto</title>
                <meta name="Mis Proyectos" content="IT Proyects" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Canvas
                camera={{ fov: 40, near: 0.1, far: 100, position: [0, 2.5, 10] }}
                style={canvasStyle} 
                >
                    <Perf />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <directionalLight color={'#e3cb8f'} />
                        <ContactAnimation />
                    </Suspense>
            </Canvas>
            {/* <Box color='white' bgColor='gray.900' display={['none','block']}>
                <Navbar />
                <Divider mt='1rem'  />
            </Box>
            <Box display={['flex','none']}>
                <Navbar />
            </Box>
            <ContactContent /> */}
        </div>
    )
}