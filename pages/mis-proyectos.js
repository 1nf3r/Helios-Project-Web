import { Navbar } from "../components/web-components/NavBar";
import { Divider, Box } from '../components/web-components/ChakraElements'
import ProjectCard from "../components/web-components/ProjectCard";
import { useEffect } from "react";
import * as THREE from 'three'
import gsap from 'gsap'
import Head from "next/head";

export default function MisProyectos() {

    useEffect(function mount() {
        const parameters = {
            materialColor: '#ffeded'
        }
        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene()               
        const objectsDistance = 4

        const material = new THREE.MeshBasicMaterial({color: '#00ff00'})
    
        const mesh1 = new THREE.Mesh(
            new THREE.TorusGeometry(1,0.4,16,60),
            material
        )
        
        const mesh2 = new THREE.Mesh(
            new THREE.ConeGeometry(1,2,32),
            material
        )
        
        const mesh3 = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.8,0.35,100,16),
            material
        )
        
        mesh1.position.y = - objectsDistance * 0
        mesh2.position.y = - objectsDistance * 1
        mesh3.position.y = - objectsDistance * 2
        
        mesh1.position.x = 1.5
        mesh2.position.x = - 1.5
        mesh3.position.x = 1.5
        
        scene.add(mesh1,mesh2,mesh3)
        
        const sectionMeshes = [mesh1, mesh2,mesh3]
        const particlesCount = 200
        const positions = new Float32Array(particlesCount * 3)
        
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
            
        }
        
        const particlesGeometry = new THREE.BufferGeometry()
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const particlesMaterial = new THREE.PointsMaterial({
            color: parameters.materialColor,
            sizeAttenuation: true,
            size: 0.03
        })

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)
        const directionalLight = new THREE.DirectionalLight('#ffffff',1)
        directionalLight.position.set(1,1,0)
        scene.add(directionalLight)
        
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        
        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
        
            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
        
            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
        
        const cameraGroup = new THREE.Group()
        scene.add(cameraGroup)

        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 6
        cameraGroup.add(camera)

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
        let scrollY = window.scrollY
        let currentSection = 0
        
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
            const newSection = Math.round(scrollY / sizes.height)
        
            if(newSection != currentSection) {
                currentSection = newSection
                gsap.to(
                    sectionMeshes[currentSection].rotation,
                    {
                        duration:1.5,
                        ease: 'power2.inOut',
                        x: '+=6',
                        y: '+=3',
                        z: '+=1.5'
                    }
                )
            }
        
        })
        
        const cursor ={}
        cursor.x = 0
        cursor.y = 0
        
        window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX /sizes.width  - 0.5
            cursor.y = event.clientY /sizes.height - 0.5
        }) - 0.5
        
        const clock = new THREE.Clock()
        let previousTime = 0
        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime
        
            //Animate meshes
            for(const mesh of sectionMeshes){
                mesh.rotation.x += deltaTime * 0.1 //Si se pone elapsedTime la rotacion fallara
                mesh.rotation.y += deltaTime * 0.12
            }
        
            //Animate camera 
            camera.position.y = - scrollY / sizes.height * objectsDistance
        
            const parallaxX = cursor.x * 0.5
            const parallaxY = - cursor.y * 0.5
            cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
            cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime
            // Render
            renderer.render(scene, camera)
        
            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        
        tick()
      });
              
    const firstCard = {
        title: 'ProdisCom',
        position: 'unset',
        content: 'Aplicación de mensajería instantánea para Android realizada para la fundación de Prodis.',
        link:'#',
        img: '/images/prodiscom.png',
        alt: 'Logo de la aplicacion Prodiscom'
    }
    const secondCard = {
        title: 'ERP Java',
        position: 'flex-end',
        content: 'Software de gestión empresarial web con módulo de ventas creado con Spring Boot.',
        link:'#',
        img: '/images/sales_4_us.png',
        alt: 'Logo del erp Sales 4 Us'
    }

    const thirdCard = {
        title: 'Snuck Fish',
        position: 'unset',
        content: 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers',
        link:'#',
        img: '/images/snuck_fish.jpg',
        alt: 'Videojuego SnuckFish'
    }

    return (
        <div>
            <Head>
                <title>Mis Proyectos</title>
                <meta name="Mis Proyectos" content="IT Proyects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <canvas 
            className="webgl" 
            style={{position:"fixed", left:0, right:0, backgroundColor: '#1e1a20', zIndex: -1}} 
            >
            </canvas>
            <Box color='white'>
                <Navbar />
                <Divider mt='1rem'/>
            </Box>
            <ProjectCard data={firstCard}/>
            <ProjectCard data={secondCard}/>
            <ProjectCard data={thirdCard}/>
        </div>
    )
}