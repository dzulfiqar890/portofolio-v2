import { BsGithub, BsInstagram, BsLinkedin, BsHeart } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Gradient separator line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 py-10 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-base font-heading font-bold gradient-text-hero">
              Dzulfiqar Ahnaf Nur Avicena
            </span>
            <p className="text-xs font-body text-txt-muted">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {["Home", "About", "Projects", "Tech", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-body text-txt-muted hover:text-txt-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/dzulfiqar890" target="_blank" rel="noopener noreferrer"
              className="text-txt-muted hover:text-white transition-colors duration-300" aria-label="GitHub">
              <BsGithub className="text-lg" />
            </a>
            <a href="https://www.instagram.com/zulfiqarawrrd/" target="_blank" rel="noopener noreferrer"
              className="text-txt-muted hover:text-pink-400 transition-colors duration-300" aria-label="Instagram">
              <BsInstagram className="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/dzulfiqar-ahnaf-nur-avicena/" target="_blank" rel="noopener noreferrer"
              className="text-txt-muted hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn">
              <BsLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-center">
          <p className="text-xs font-body text-txt-muted flex items-center gap-1">
            Built with <BsHeart className="text-accent-glow text-[10px]" /> using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
