import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsInstagram, BsDownload } from "react-icons/bs";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech", href: "#tech" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: BsDownload,
    href: "https://drive.google.com/file/d/1G-n4k7fX6xF6oZ-oRSRYRlQJtrUVvI-1/view?usp=sharing",
    title: "Download CV",
    hoverColor: "hover:text-red-400",
  },
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/zulfiqarawrrd/",
    title: "Instagram",
    hoverColor: "hover:text-pink-400",
  },
  {
    icon: BsGithub,
    href: "https://github.com/dzulfiqar890",
    title: "Github",
    hoverColor: "hover:text-white",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/dzulfiqar-ahnaf-nur-avicena/",
    title: "LinkedIn",
    hoverColor: "hover:text-blue-400",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all duration-500 md:px-12 lg:px-20 ${
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      {/* Logo — nama lengkap */}
      <a href="#home" className="group text-sm sm:text-base font-heading font-bold tracking-tight">
        {/* <span className="gradient-text-hero">Dzulfiqar Ahnaf</span> */}
        <span className="text-txt-muted font-normal">Portofolio</span>
      </a>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeSection === link.href.replace("#", "")
                  ? "text-white"
                  : "text-txt-secondary hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-white/[0.07] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Social Icons */}
      <ul className="hidden md:flex items-center gap-4">
        {socialLinks.map((s) => (
          <li key={s.title}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.title}
              className={`text-lg text-txt-muted transition-all duration-300 ${s.hoverColor} hover:scale-110 inline-block`}
            >
              <s.icon />
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="block md:hidden text-2xl text-white p-2 z-50"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-[280px] z-40 md:hidden glass border-l border-accent-primary/20 flex flex-col justify-center"
            >
              <ul className="flex flex-col gap-2 px-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`block py-3 px-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                        activeSection === link.href.replace("#", "")
                          ? "text-white bg-white/[0.07]"
                          : "text-txt-secondary hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mb-6" />
                <ul className="flex items-center gap-5">
                  {socialLinks.map((s) => (
                    <li key={s.title}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl text-txt-muted transition-all duration-300 ${s.hoverColor}`}
                      >
                        <s.icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;