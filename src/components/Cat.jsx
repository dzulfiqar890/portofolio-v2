import { useState } from "react";
import { motion } from "framer-motion";
import normalImage from "/mingkem.png";
import hoverImage from "/mangap.png";
import food from "/apple.png";

const Cat = () => {
  const [imageSrc, setImageSrc] = useState(normalImage);
  const [fed, setFed] = useState(false);

  const handleFeed = () => {
    setFed(true);
    setTimeout(() => setFed(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
      <div className="flex items-end justify-center gap-0">
        <motion.img
          src={imageSrc}
          className="w-[80px] cursor-pointer select-none"
          alt="Cat easter egg"
          onMouseEnter={() => setImageSrc(hoverImage)}
          onMouseLeave={() => setImageSrc(normalImage)}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
          draggable={false}
        />
        <motion.img
          src={food}
          className="w-[40px] cursor-pointer select-none"
          alt="Feed the cat"
          onClick={handleFeed}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          draggable={false}
        />
      </div>
      <motion.span
        initial={{ opacity: 0, height: 0 }}
        animate={fed ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        className="text-[10px] font-body text-accent-glow"
      >
        🐱 Nom nom nom...
      </motion.span>
      <span className="text-[10px] font-body text-txt-muted">
        ← pssst... hover me
      </span>
    </div>
  );
};

export default Cat;
