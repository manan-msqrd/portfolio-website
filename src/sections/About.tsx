import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = ({ sectionRefs }: { sectionRefs: Record<string, React.RefObject<HTMLDivElement>> }) => {

    const [hasCopied, setHasCopied] = useState<boolean>(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('mananmanchanda+portfolio@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    const handleContactScroll = () => {
        sectionRefs.contact?.current?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/manan-grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">Hi, I'm Manan</p>
                        <p className="grid-subtext">With 2 years of experience, I've honed my skills as a Gen AI and Full Stack Developer by building practical personal and enterprise applications.</p>
                    </div>
                </div>
            </ div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/manan-grid2.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialise in MERN apps, Gen AI apps and also have good knowledge of Python/Flask applications and SQL databases like PostgreSQL and MongoDB.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor="rgb(0,0,0,0)"
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        // labelsData={[{
                        //     lat: 15,
                        //     lng:77,
                        //     text:"I'm here",
                        //     color:'white',
                        //     size:100
                        // }]}
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">Open to working remotely over different timezones</p>
                        <p className="grid-subtext">I'm based out of India 🖥️.</p>
                        <Button name="Let's Connect!" isBeam containerClass="w-full mt-10" onClick={handleContactScroll}></Button>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-1" className="w-full sm:h-[266px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">I love solving problems and bringing products through code. It isn't just my profession, for me it's bring art to life.</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-1" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />

                            <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">mananmanchanda@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default About