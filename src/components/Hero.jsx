import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "/image.jpg";
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  const roles = [
    "Junior Web Developer",
    "Front End Developer",
    "Back End Developer",
    "AI Engineer",
    "Student",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 40;
  const delay = 1500;

  useEffect(() => {
    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex((p) => p + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex((p) => p - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    };
    const timer = setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-28 md:px-8 lg:px-16"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center max-w-3xl">

        {/* Profile Image — grayscale → color on hover (retained) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Animated glow ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 opacity-25 blur-lg animate-pulse-slow" />
          <img
            src={image}
            alt="Dzulfiqar Ahnaf Nur Avicena"
            title="Dzulfiqar Ahnaf Nur Avicena"
            className="relative w-[160px] md:w-[200px] rounded-full border-2 border-red-700/30 object-cover
                       cursor-pointer grayscale transition-all duration-700 hover:grayscale-0
                       hover:shadow-2xl hover:shadow-red-700/40 hover:scale-105 animate-float"
          />
          {/* Status badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to work
            </span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-3xl font-heading font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text-hero">Dzulfiqar Ahnaf</span>
            <br />
            <span className="text-txt-primary text-2xl sm:text-4xl md:text-5xl font-light">
              Nur Avicena
            </span>
          </h1>

          {/* Typing effect */}
          <div className="flex items-center justify-center h-[40px] md:h-[48px]">
            <span className="text-lg md:text-2xl font-body font-light text-txt-secondary">
              A{" "}
            </span>
            <span className="text-lg md:text-2xl font-body font-medium gradient-text ml-1">
              {currentText}
            </span>
            <span className="text-lg md:text-2xl font-body font-medium text-accent-glow animate-pulse">
              |
            </span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl text-sm md:text-base text-txt-secondary leading-relaxed font-body"
        >
          Seorang siswa yang berdedikasi di SMK Telkom Purwokerto dengan jurusan
          PPLG. Sangat menyukai pemrograman, dengan minat besar untuk membangun
          situs web yang inovatif dan memiliki dasar kuat dalam pengembangan website.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 rounded-xl" />
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
            <span className="relative">Lihat Projects</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1G-n4k7fX6xF6oZ-oRSRYRlQJtrUVvI-1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-heading font-semibold text-sm text-txt-secondary glass glass-hover transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
          >
            Download CV ↗
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-txt-muted hover:text-txt-secondary transition-colors">
            <span className="text-xs font-body">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
              <BsArrowDown className="text-lg" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
