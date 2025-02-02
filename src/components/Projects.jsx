import { motion } from "motion/react"
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import { div, span } from "motion/react-client";

const projectsData = [
  {
    image: image1,
    title: "My First Portofolio",
    description: "Ini adalah portofolio pertama saya. Sudah memiliki kualitas yang baik dalam responsive, desain dan lain-lain ",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image2,
    title: "Wedding",
    description: "Saya membuat website undangan pernikahan yang memiliki kualitas yang baik dalam responsive dan memiliki banyak fitur-fitur keren contohnya ada musik dan lain-lain",
    technologies: ["HTML", "CSS-Boostrap", "JavaScript", "MySql", "Laravel"],
  },
  {
    image: image3,
    title: "Nexura Bank",
    description: "Saya membuat website bank untuk mempromosikan bank kami yaitu Nexura Bank. Memiliki banyak fitur dan masih bisa responsive dengan baik ",
    technologies: ["HTML", "CSS"],
  },
  {
    image: image4,
    title: "Simple Quiz",
    description: "Saya membuat website quiz karena tugas ekstrakurikuler webtech. Memiliki fitur penilaian skor yang baik dan memiliki soal yang rumit ",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image5,
    title: "The Me Lug'o",
    description: "Saya membuat website cuaca tapi masih dalam tahapan pengembangan dan masih banyak bug tapi memiliki desain yang unik dan bagus secara visualisasi",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row
    md:gap-24">
      <img src={project.image} alt="" className="w-full
      cursor-pointer rounded-2xl transition-all duration-300 
      hover:scale-105 md:w-[300px]"/>
      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>
        
      </div>
    </div>
    </ScrollReveal>
  )

}


const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col
    items-center justify-center gap-16 p-4 md:px-14 md:py-24">

      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16
      text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects