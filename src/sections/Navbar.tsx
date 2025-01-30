import { useState } from "react"
import { navLinks } from "../constants"


const NavItems = ({ sectionRefs }: { sectionRefs: Record<string, React.RefObject<HTMLDivElement>> }) => {

    const handleScroll = (id: string) => {
        console.log(sectionRefs)
        sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <div>
        <ul className="nav-ul">
            {
                navLinks.map(({id, name, href}) => (
                    <li key={id} className="nav-li">
                        <button onClick={() => handleScroll(href)} className="nav-li_a cursor-pointer">
                            {name}
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}


const Navbar = ({ sectionRefs }: { sectionRefs: Record<string, React.RefObject<HTMLDivElement>> }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0 z-50 ">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mx-auto py-5 c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Manan
                </a>
                <button onClick={() => toggleMenu()} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                    <img  src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6 cursor-pointer"/>
                </button>

                <nav className="sm:flex hidden">
                    <NavItems sectionRefs={sectionRefs} />
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5">
                <NavItems sectionRefs={sectionRefs} />
            </nav>

        </div>
    </header>
  )
}

export default Navbar; NavItems