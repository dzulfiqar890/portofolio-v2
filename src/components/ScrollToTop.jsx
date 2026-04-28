import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-xl glass glow-sm text-txt-primary hover:text-white hover:glow-md transition-all duration-300 hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <BsArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
