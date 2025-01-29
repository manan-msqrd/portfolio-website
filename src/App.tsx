import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

function App() {
  return <main className='max-w-7xl mx-auto'>
    <div className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  </main>

}

export default App
