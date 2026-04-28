import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <>
      <ParticleBackground />
      <main className="relative flex flex-col items-center overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Tech />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
