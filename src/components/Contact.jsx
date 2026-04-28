import { motion } from "framer-motion";
import { BsInstagram, BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import Cat from "./Cat";

const contactLinks = [
  {
    icon: BsEnvelope,
    title: "Email",
    value: "avicenakom@gmail.com",
    href: "mailto:avicenakom@gmail.com",
    gradient: "from-red-600 to-orange-500",
    hoverBg: "hover:bg-red-500/10",
  },
  {
    icon: BsGithub,
    title: "GitHub",
    value: "dzulfiqar890",
    href: "https://github.com/dzulfiqar890",
    gradient: "from-gray-400 to-gray-200",
    hoverBg: "hover:bg-gray-500/10",
  },
  {
    icon: BsLinkedin,
    title: "LinkedIn",
    value: "Dzulfiqar Ahnaf",
    href: "https://www.linkedin.com/in/dzulfiqar-ahnaf-nur-avicena/",
    gradient: "from-blue-500 to-blue-300",
    hoverBg: "hover:bg-blue-500/10",
  },
  {
    icon: BsInstagram,
    title: "Instagram",
    value: "@zulfiqarawrrd",
    href: "https://www.instagram.com/zulfiqarawrrd/",
    gradient: "from-pink-500 to-purple-500",
    hoverBg: "hover:bg-pink-500/10",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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
          Contact
        </span>
        <h2 className="mt-2 text-3xl font-heading font-bold text-txt-primary md:text-5xl">
          Get in{" "}
          <span className="gradient-text-hero">Touch</span>
        </h2>
        <p className="mt-4 max-w-md mx-auto text-sm text-txt-secondary font-body leading-relaxed">
          Tertarik untuk berkolaborasi atau hanya ingin ngobrol? Jangan ragu untuk
          menghubungi saya melalui platform di bawah ini.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {contactLinks.map((contact, index) => (
          <motion.a
            key={contact.title}
            href={contact.href}
            target={contact.title !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group flex items-center gap-4 rounded-2xl glass glass-hover p-5 transition-all duration-500 hover:-translate-y-1 hover:glow-sm ${contact.hoverBg}`}
          >
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} p-[1px] flex-shrink-0`}>
              <div className="flex items-center justify-center w-full h-full rounded-xl bg-dark-primary">
                <contact.icon className="text-lg text-txt-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-body text-txt-muted uppercase tracking-wider">
                {contact.title}
              </span>
              <span className="text-sm font-body font-medium text-txt-primary group-hover:text-accent-glow transition-colors duration-300">
                {contact.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Easter Egg Cat */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-4"
      >
        <Cat />
      </motion.div>
    </section>
  );
};

export default Contact;