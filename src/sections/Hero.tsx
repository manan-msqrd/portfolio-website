import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { HackerRoom } from "../components/HackerRoom"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import ReactLogo from "../components/ReactLogo"
import { JSLogo } from "../components/JSLogo"
import { GitHubLogo } from "../components/GitHubLogo"
import { PythonLogo } from "../components/PythonLogo"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"



const Hero = () => {

    const isSmall = useMediaQuery({maxWidth:480})
    const isMobile = useMediaQuery({maxWidth:768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1200})

    const sizes = calculateSizes(Number(isSmall), Number(isMobile), Number(isTablet));


  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-26">
            <p className="sm:text3xl text-2xl font-medium text-white text-center font-generalsans">
                Hi, I'm Manan <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">
                Building Products & Projects
            </p>
        </div> 
        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0,0,30]} />

                <HeroCamera isMobile={isMobile}>
                    <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition as [number, number, number]} rotation={[0.2,3.15,0]} />
                </HeroCamera>

                <group>
                    <ReactLogo scale={sizes.reactLogoScale} position={sizes.reactLogoPosition}/>
                    <JSLogo scale={sizes.jsLogoScale} position={sizes.jsLogoPosition} />
                    <GitHubLogo scale={sizes.gitLogoScale} position={sizes.gitLogoPosition}/>
                    <PythonLogo scale={sizes.pythonLogoScale} position={sizes.pythonLogoPosition} />
                </group> 
                
                <ambientLight intensity={0.7}/>
                <directionalLight intensity={1} position={[10,10,10]}/>

                </Suspense>
            </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href='#contact' className="w-fit">
                <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:max-w-56"/>
            </a>

        </div>
    </section>
  )
}

export default Hero