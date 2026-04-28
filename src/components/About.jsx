import { motion } from "framer-motion";
import { BsBriefcase, BsAward, BsImage } from "react-icons/bs";

const experiences = [
  {
    type: "magang",
    title: "Pengalaman Magang",
    icon: BsBriefcase,
    items: [
      {
        role: "Web Developer Intern",
        place: "Pengalaman Kerja Lapangan",
        period: "2024 - 2025",
        description:
          "Mengembangkan dan memelihara aplikasi web, berkolaborasi dengan tim development, serta menerapkan best practices dalam pengembangan perangkat lunak.",
        docImage: null, // Ganti dengan path foto dokumentasi magang jika ada, contoh: "/magang-doc.jpg"
        docLabel: "Dokumentasi Magang",
      },
    ],
  },
  {
    type: "sertifikasi",
    title: "Sertifikasi",
    icon: BsAward,
    items: [
      {
        role: "Web Development Fundamentals",
        place: "Sertifikasi Kompetensi",
        period: "2024",
        description:
          "Sertifikasi dalam pengembangan web dasar meliputi HTML, CSS, JavaScript, dan framework modern.",
        docImage: null, // Ganti dengan path foto sertifikat, contoh: "/sertifikat-1.jpg"
        docLabel: "Lihat Sertifikat",
      },
      {
        role: "Front End Development",
        place: "Sertifikasi Profesional",
        period: "2024",
        description:
          "Sertifikasi dalam pengembangan front end dengan fokus pada responsive design dan user experience.",
        docImage: null, // Ganti dengan path foto sertifikat, contoh: "/sertifikat-2.jpg"
        docLabel: "Lihat Sertifikat",
      },
    ],
  },
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "5+", label: "Tech Stack" },
  { value: "2+", label: "Sertifikasi" },
  { value: "1+", label: "Tahun Coding" },
];

// Placeholder untuk foto dokumentasi saat gambar asli belum tersedia
const DocImagePlaceholder = ({ label }) => (
  <div className="flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl bg-dark-primary/50 border border-accent-primary/10">
    <BsImage className="text-2xl text-txt-muted" />
    <span className="text-xs font-body text-txt-muted text-center px-2">{label}</span>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="flex w-full max-w-5xl flex-col items-center gap-12 px-4 py-20 md:px-8 md:py-28"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-body font-medium text-accent-primary uppercase tracking-widest">
          About Me
        </span>
        <h2 className="mt-2 text-3xl font-heading font-bold text-txt-primary md:text-5xl">
          Pengalaman &{" "}
          <span className="gradient-text-hero">Sertifikasi</span>
        </h2>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl glass p-5 transition-all duration-300 hover:glow-sm"
          >
            <span className="text-2xl md:text-3xl font-heading font-bold gradient-text-hero">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm font-body text-txt-secondary">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="w-full space-y-10">
        {experiences.map((section, sectionIndex) => (
          <motion.div
            key={section.type}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.15 }}
          >
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/15 text-accent-glow">
                <section.icon className="text-lg" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-txt-primary">
                {section.title}
              </h3>
            </div>

            {/* Items */}
            <div className="space-y-5 ml-5 border-l border-accent-primary/20 pl-6">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: sectionIndex * 0.15 + itemIndex * 0.1,
                  }}
                  className="group relative rounded-xl glass glass-hover p-5 transition-all duration-300 hover:-translate-y-0.5 hover:glow-sm"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-dark-primary border-2 border-accent-primary group-hover:bg-accent-primary transition-colors duration-300" />

                  {/* Two-column layout: text + doc image */}
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <h4 className="text-base font-heading font-semibold text-txt-primary">
                            {item.role}
                          </h4>
                          <span className="text-sm font-body text-accent-glow">
                            — {item.place}
                          </span>
                        </div>
                        <span className="text-xs font-body text-txt-muted whitespace-nowrap bg-accent-primary/10 px-3 py-1 rounded-full w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm font-body text-txt-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Documentation Image */}
                    <div className="w-full md:w-[200px] flex-shrink-0 h-[120px] rounded-xl overflow-hidden border border-accent-primary/10">
                      {item.docImage ? (
                        <img
                          src={item.docImage}
                          alt={item.docLabel}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <DocImagePlaceholder label={item.docLabel} />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
