import Head from "next/head";
import ScrollAnimation from "../components/three-components/ProjectsPage/ScrollAnimation";
import MyPrHtmlContent from "../components/web-components/HtmlContentMyP";

export default function MisProyectos() {
    return (
        <div>
            <Head>
                <title>Mis Proyectos</title>
                <meta name="Mis Proyectos" content="IT Proyects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ScrollAnimation />
            <canvas 
            className="webgl" 
            style={{position:"fixed", left:0, right:0, backgroundColor: '#1e1a20', zIndex: -1}} 
            >
            </canvas>
            <MyPrHtmlContent />
        </div>
    )
}

