import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "/image.jpg";

const Hero = () => {
  const texts = [" Junior Web Developer", " Front End Developer", " Back End Developer", " Student"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 30;
  const delay = 1300;

  useEffect(() => {
    const typeEffect = () => {
      if (!isDeleting) {
        if (charIndex < texts[index].length) {
          setCurrentText((prev) => prev + texts[index].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="profile"
            title="Dzulfiqar Ahnaf Nur Avicena"
            className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
            transition-all duration-300 grayscale hover:grayscale-0 
            hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[800px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-5xl">
            Dzulfiqar Ahnaf Nur Avicena
          </h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-indigo-600 bg-clip-text text-transparent text-2xl md:text-3xl h-[60px] flex items-center">
            A{currentText || "_"}
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Saya adalah seorang web developer. Seorang siswa yang berdedikasi di SMK Telkom Purwokerto dengan jurusan Pengembangan Perangkat Lunak dan Game (PPLG). Sangat menyukai pemrograman, dengan minat yang besar untuk membangun situs web yang inovatif dan memiliki dasar yang kuat dalam pengembangan website. Saat ini, saya aktif belajar dan mengasah kemampuan saya dalam pemrograman, analisis, dan pemecahan masalah untuk mempersiapkan diri menghadapi tantangan masa depan.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
