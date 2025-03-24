import { useRef } from "react"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);


  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    work: workRef,
    contact: contactRef,
  };

  return (
    <main className="max-w-7xl mx-auto">
      <div className="text-white">
        <Navbar sectionRefs={sectionRefs} />
        <section ref={homeRef}> <Hero sectionRefs={sectionRefs} /></section>
        <section ref={aboutRef}><About sectionRefs={sectionRefs}/></section>
        <section ref={workRef}><Experience /></section>
        <section ref={contactRef}><Contact /></section>
        <Footer />
      </div>
    </main>
  );
}

export default App
