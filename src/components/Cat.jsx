import { useState } from "react";
import { motion } from "framer-motion";
import normalImage from "/mingkem.png"; 
import hoverImage from "/mangap.png"; 
import food from "/apple.png"; 

const Cat = () => {
  const [imageSrc, setImageSrc] = useState(normalImage);

  return (
    <div id="cat" className="px-2 flex w-full items-center justify-center py-2 md:px-8">
      <div className="flex flex-col items-center justify-center gap-6 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <img
            src={imageSrc}
            className="w-[200px] cursor-pointer "
            onMouseEnter={() => setImageSrc(hoverImage)} 
            onMouseLeave={() => setImageSrc(normalImage)} 
          />
          <img
            src={food}
            className="w-[100px] cursor-pointer "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Cat;
