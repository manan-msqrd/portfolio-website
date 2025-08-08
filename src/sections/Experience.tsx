import React, { useEffect, useRef, useState } from "react";
import { workExperiences } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEntry {
  title: string;
  logo: string; // Add logo field
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Add scroll progress and animated height for the blue line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>
        <div ref={containerRef} className="max-w-7xl mx-auto pb-20">
          <div ref={ref} className="relative">
            {data.map((item, index) => (
              <div key={index} className="flex justify-start pt-16 md:pt-56 md:gap-16 gap-8">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-3xl bg-black-600 flex items-center justify-center border border-black-300 absolute left-1 top-0 md:top-auto">
                    {/* Company logo as timeline bullet */}
                    <img src={item.logo} alt={item.title + ' logo'} className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-2xl" />
                  </div>
                  <h3 className="hidden md:block text-2xl md:pl-24 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ml-2">{item.title}</h3>
                </div>
                <div className="relative pl-24 pr-4 md:pl-8 w-full">
                  <h3 className="md:hidden block text-3xl mb-6 text-left font-bold text-neutral-500 dark:text-neutral-500">{item.title}</h3>
                  <div className="bg-black-300 rounded-xl p-8 shadow-lg">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
            {/* Timeline vertical line with animated blue gradient and scroll progress */}
            <div
              style={{ height: height + "px" }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
              <motion.div
                style={{ height: heightTransform, opacity: opacityTransform }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  // Convert workExperiences to TimelineEntry[]
  const timelineData: TimelineEntry[] = workExperiences.map((exp) => ({
    title: exp.name,
    logo: exp.icon, // Pass logo for timeline bullet
    content: (
      <div>
        <p className="font-bold text-white-800 mb-4 text-xl md:text-2xl">{exp.pos} | {exp.duration}</p>
        <ul className="list-disc mt-4 text-lg md:text-xl text-gray-300 space-y-4 pl-6">
          {exp.contributions.map((point: string, idx: number) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ),
  }));

  return <Timeline data={timelineData} />;
};

export default Experience;