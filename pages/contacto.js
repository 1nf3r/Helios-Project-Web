import { Navbar } from "../components/web-components/NavBar";
import Head from "next/head";
import ContactAnimation from "../components/three-components/ContactPage/ContactAnimation";

export default function Contacto() {
    return (
        <div>
            <Head>
                <title>Contacto</title>
                <meta name="Mis Proyectos" content="IT Proyects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactAnimation />
            <canvas 
            className="webgl" 
            style={{position:"fixed", left:0, right:0, backgroundColor: '#1e1a20'}} 
            >
            </canvas>
            <Navbar />
        </div>
    )
}