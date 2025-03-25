import { Canvas } from "@react-three/fiber";
import { myProjects } from "../constants"
import { Suspense, useState } from "react";
import { Center } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { OrbitControls } from "@react-three/drei";

const Projects = () => {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = myProjects[currentProjectIndex];

    const handleNavigation = (direction: string) => {
        setCurrentProjectIndex((prevIndex) => {
            if (direction === 'next') {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
            }
        })
    }

  return (
    <section className="c-space my-20">
        <p className="head-text">My Projects</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                    <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                </div>
                <div style={currentProject.logoStyle} className="p-3 backdrop-filter backdrop-blur-xl w-fit rounded-lg">
                    <img src={currentProject.logo} alt="logo" className="h-10 shadow-sm"/>
                </div>
                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>
                <div className="flex items-center gap-3 justify-between flex-wrap">
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                    </div>
                    <a className="flex items-center gap-2 cursor-pointer text-white-600" target="_blank" rel="noreferrer" href={currentProject.href}>
                        <p>Check Live Link</p>
                        <img className="w-3 h-3" src="/assets/arrow-up.png" alt="arrow" />
                    </a>
                </div>
                <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => {handleNavigation('previous')}}>
                        <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                    </button>
                    <button className="arrow-btn" onClick={() => {handleNavigation('next')}}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                    </button>
                </div>
            </div>

            <div className="border border-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                    <ambientLight intensity={3} />
                    <directionalLight position={[-5,20,20]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                            <group scale={1.9} position={[0.1, -0.7, 1]} rotation={[0.2, -0.2, 0]}>
                                <DemoComputer texture={currentProject.texture}/>
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects