import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, lazy } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Button from "../components/Button"
import ErrorBoundary from "../components/ErrorBoundary"

// Lazy load all 3D components
const HackerRoom = lazy(() => import("../components/HackerRoom"))
const ReactLogo = lazy(() => import("../components/ReactLogo"))
const JSLogo = lazy(() => import("../components/JSLogo"))
const GitHubLogo = lazy(() => import("../components/GitHubLogo"))
const PythonLogo = lazy(() => import("../components/PythonLogo"))
const HeroCamera = lazy(() => import("../components/HeroCamera"))


const Hero = ({ sectionRefs }: { sectionRefs: Record<string, React.RefObject<HTMLDivElement>> }) => {

    const isSmall = useMediaQuery({maxWidth:480})
    const isMobile = useMediaQuery({maxWidth:768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1200})

    const sizes = calculateSizes(Number(isSmall), Number(isMobile), Number(isTablet));

    const handleContactScroll = () => {
        sectionRefs.contact?.current?.scrollIntoView({ behavior: "smooth" });
      };

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
        <ErrorBoundary>
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0,0,30]} />
              <ErrorBoundary>
                <Suspense fallback={null}>
                  <HeroCamera isMobile={isMobile}>
                    <HackerRoom 
                      scale={sizes.deskScale} 
                      position={sizes.deskPosition as [number, number, number]} 
                      rotation={[0.2,3.15,0]} 
                    />
                  </HeroCamera>
                </Suspense>
              </ErrorBoundary>

              <ErrorBoundary>
                <Suspense fallback={null}>
                  <group>
                    <ReactLogo scale={sizes.reactLogoScale} position={sizes.reactLogoPosition}/>
                    <JSLogo scale={sizes.jsLogoScale} position={sizes.jsLogoPosition} />
                    <GitHubLogo scale={sizes.gitLogoScale} position={sizes.gitLogoPosition}/>
                    <PythonLogo scale={sizes.pythonLogoScale} position={sizes.pythonLogoPosition} />
                  </group>
                </Suspense>
              </ErrorBoundary>

              <ambientLight intensity={0.7}/>
              <directionalLight intensity={1} position={[10,10,10]}/>
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Button
          name="Let's work together"
          isBeam
          containerClass="sm:w-fit w-full sm:max-w-56"
          onClick={handleContactScroll}
        />
      </div>
    </section>
  )
}

export default Hero