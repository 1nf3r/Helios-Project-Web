import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import ScrollAnimationR3F from "../components/three-components/ProjectsPage/ScrollAnimationR3F";
import MyPrHtmlContent from "../components/web-components/HtmlContentMyP";

export default function MisProyectos() {
    const canvasStyle = {
        position:"fixed", 
        left:0, 
        right:0, 
        backgroundColor: '#000000',  //'#1e1a20'
        zIndex: -1
      } 
    return (
        <div>
            <Head>
                <title>Mis Proyectos</title>
                <meta name="Mis Proyectos" content="IT Proyects" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Canvas
            camera={{ fov: 40, near: 0.1, far: 100, position: [0, 0, 6] }}
            style={canvasStyle} 
            >
                <Suspense fallback={null} >
                    <ScrollAnimationR3F />
                </Suspense>
            </Canvas>
            <MyPrHtmlContent />
        </div>
    )
}