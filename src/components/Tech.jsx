import { 
  BiLogoBootstrap, 
  BiLogoDiscord, 
  BiLogoDjango, 
  BiLogoFigma, 
  BiLogoJavascript, 
  BiLogoPhp, 
  BiLogoPython, 
  BiLogoReact, 
  BiLogoTailwindCss
} from "react-icons/bi";
import { motion } from "framer-motion"; 

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const technologies = [
    { icon: BiLogoDjango, color: "text-green-500" },
    { icon: BiLogoPython, color: "text-blue-400" }, 
    { icon: BiLogoPhp, color: "text-indigo-600" }, 
    { icon: BiLogoJavascript, color: "text-yellow-400" }, 
    { icon: BiLogoBootstrap, color: "text-purple-600" }, 
    { icon: BiLogoReact, color: "text-blue-500" }, 
    { icon: BiLogoTailwindCss, color: "text-blue-400" }, 
    { icon: BiLogoDiscord, color: "text-blue-500" }, 
  ];

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 
        variants={variants} 
        initial="hidden" 
        whileInView="visible" 
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-20 p-4">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div 
              key={index} 
              variants={variants} 
              initial="hidden" 
              whileInView="visible" 
              transition={{ duration: 0.5 }}
            >
              <Icon className={`cursor-pointer text-[80px] ${tech.color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
