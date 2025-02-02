import { motion } from "motion/react";
import image from "/image.jpg";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center
      gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        
        >
          <img src={image} alt="" className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
             transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-5 hover:scale-105 
             hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]"/>
        </motion.div>

        <motion.div 
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        
        className="flex max-w-[800px] flex-col items-center
        justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 
          bg-clip-text text-transparent text-5xl font-light md:text-5xl">Dzulfiqar Ahnaf Nur Avicena</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 
          bg-clip-text text-transparent text-2xl md:text-3xl">Web Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a web developer. A dedicated student at SMK Telkom Purwokerto, majoring in Software and 
            Game Development (PPLG). Passionate about programming, with a great interest in building innovative 
            websites and a strong foundation in software development. Currently, I am actively learning and 
            honing my skills in programming, analysis, and problem-solving to prepare for the future challenges 
            of the technology industry.  I am a responsible individual, committed to hard work, and possess 
            strong problem-solving and time management abilities.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero