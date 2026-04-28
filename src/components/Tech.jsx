import { motion } from "framer-motion";
import {
  BiLogoBootstrap,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPython,
  BiLogoTailwindCss,
} from "react-icons/bi";

const technologies = [
  { icon: BiLogoPython,     name: "Python",     color: "text-blue-400",   shadow: "hover:shadow-blue-500/20"  },
  { icon: BiLogoPhp,        name: "PHP",         color: "text-indigo-400", shadow: "hover:shadow-indigo-500/20"},
  { icon: BiLogoJavascript, name: "JavaScript",  color: "text-yellow-400", shadow: "hover:shadow-yellow-500/20"},
  { icon: BiLogoBootstrap,  name: "Bootstrap",   color: "text-purple-400", shadow: "hover:shadow-purple-500/20"},
  { icon: BiLogoTailwindCss,name: "Tailwind",    color: "text-cyan-400",   shadow: "hover:shadow-cyan-500/20"  },
];

const TechCard = ({ tech, index }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group flex flex-col items-center justify-center gap-3 rounded-2xl glass glass-hover p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 cursor-default hover:shadow-xl ${tech.shadow}`}
    >
      <Icon className={`text-[50px] md:text-[64px] ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
      <span className="text-sm font-body font-medium text-txt-secondary group-hover:text-txt-primary transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section
      id="tech"
      className="flex w-full max-w-4xl flex-col items-center gap-12 px-4 py-20 md:px-8 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-body font-medium text-accent-primary uppercase tracking-widest">
          Skills
        </span>
        <h2 className="mt-2 text-3xl font-heading font-bold text-txt-primary md:text-5xl">
          Tech{" "}
          <span className="gradient-text-hero">Stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full">
        {technologies.map((tech, index) => (
          <TechCard key={index} tech={tech} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Tech;
