import { useEffect } from "react";
import * as THREE from 'three'

const ContactAnimation = () => {
  useEffect(function mount() {
    const parameters = {
        materialColor: '#ffeded'
    }
    const canvas = document.querySelector('canvas.webgl')
    const scene = new THREE.Scene()               
    const objectsDistance = 4

    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance 
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

    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    let scrollY = window.scrollY
    
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY    
        console.log('sigue funcionando');
    })
        
    const clock = new THREE.Clock()
    let previousTime = 0
    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime
        //Animate camera 
        camera.position.y = - scrollY / sizes.height * objectsDistance
    
        // Render
        renderer.render(scene, camera)
    
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
    
    tick()
  });
  return (
    <>
    </>
  )
}

export default ContactAnimation