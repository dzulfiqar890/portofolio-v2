import { motion } from "framer-motion";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import PortfolioSlider from "./PortfolioSlider";
import { BsArrowUpRight } from "react-icons/bs";

const projectsData = [
  {
    image: image1,
    title: "Website Company Profile",
    description:
      "Berkonstribusi dalam membuat website company profile Arte Con Clase yang mencerminkan komitmen perusahaan dalam menciptakan karya seni dan desain yang penuh estetika.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://dzulfiqar890.github.io/company-accstudio/",
  },
  {
    image: image2,
    title: "Website Wedding",
    description:
      "Website undangan pernikahan berkualitas tinggi dengan responsive design dan fitur-fitur interaktif seperti musik dan animasi.",
    technologies: ["HTML", "Bootstrap", "JavaScript", "MySQL", "Laravel"],
    link: "https://dzulfiqar890.github.io/RezaAgnesWedding/",
  },
  {
    image: image3,
    title: "Website Nexura Bank",
    description:
      "Website promosi untuk Nexura Bank dengan banyak fitur dan responsive design yang optimal di berbagai perangkat.",
    technologies: ["HTML", "CSS"],
    link: "https://dzulfiqar890.github.io/NexuraBank/",
  },
  {
    image: image4,
    title: "Website Simple Quiz",
    description:
      "Platform quiz interaktif dengan fitur penilaian skor yang akurat, dibuat untuk tugas ekstrakurikuler webtech.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://dzulfiqar890.github.io/Hosting-Pertama/",
  },
  {
    image: image5,
    title: "Website The Me Lug'o",
    description:
      "Aplikasi cuaca dengan desain unik dan visualisasi yang menarik, masih dalam tahapan pengembangan.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://dzulfiqar890.github.io/Latihan-Hosting/",
  },
];

const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const techColorMap = {
  HTML:       "bg-orange-500/15 text-orange-300 border-orange-500/20",
  CSS:        "bg-blue-500/15 text-blue-300 border-blue-500/20",
  JavaScript: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  Bootstrap:  "bg-purple-500/15 text-purple-300 border-purple-500/20",
  MySQL:      "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  Laravel:    "bg-red-500/15 text-red-300 border-red-500/20",
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className={`group relative flex flex-col gap-6 rounded-2xl glass glass-hover p-4 transition-all duration-500 hover:-translate-y-1 hover:glow-sm md:flex-row md:gap-8 md:p-6 ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden rounded-xl w-full md:w-[360px] flex-shrink-0"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[190px] md:h-[210px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="flex items-center gap-1 text-sm font-medium text-white">
              Visit Site <BsArrowUpRight className="text-xs" />
            </span>
          </div>
        </a>

        {/* Content */}
        <div className="flex flex-col justify-center gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-heading font-semibold text-txt-primary">
              {project.title}
            </h3>
            <p className="text-sm text-txt-secondary leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`rounded-lg border px-3 py-1 text-xs font-medium ${
                  techColorMap[tech] ||
                  "bg-red-500/15 text-red-300 border-red-500/20"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-glow hover:text-white transition-colors w-fit"
          >
            Lihat Project <BsArrowUpRight className="text-xs" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-20 md:px-8 md:py-28"
    >
      <ScrollReveal>
        <div className="text-center">
          <span className="text-sm font-body font-medium text-accent-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-txt-primary md:text-5xl">
            Featured{" "}
            <span className="gradient-text-hero">Projects</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <PortfolioSlider />
      </ScrollReveal>

      <div className="flex w-full flex-col gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;