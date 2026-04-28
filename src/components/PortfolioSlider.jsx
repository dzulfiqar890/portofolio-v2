import { useEffect, useRef, useState } from "react";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";

const slides = [
  { image: image1, title: "Company Profile",     alt: "Arte Con Clase" },
  { image: image2, title: "Wedding Invitation",  alt: "Reza & Agnes Wedding" },
  { image: image3, title: "Nexura Bank",         alt: "Nexura Bank Website" },
  { image: image4, title: "Simple Quiz",         alt: "Quiz Platform" },
  { image: image5, title: "The Me Lug'o",        alt: "Weather App" },
];

const PortfolioSlider = () => {
  const sliderRef  = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next     = (prev + 1) % slides.length;
        const children = slider.children;
        if (children[next]) {
          slider.scrollTo({ left: children[next].offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const children = slider.children;
    if (children[index]) {
      slider.scrollTo({ left: children[index].offsetLeft, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative max-w-3xl w-full mx-auto">
      {/* Slider */}
      <div className="relative rounded-2xl overflow-hidden glass glow-sm">
        <div
          ref={sliderRef}
          className="flex aspect-video overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0 w-full snap-start">
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.alt} />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="p-4 md:p-6">
                  <span className="text-xs font-body text-accent-glow uppercase tracking-wider">
                    Featured
                  </span>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-white mt-1">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 h-2 bg-accent-primary"
                : "w-2 h-2 bg-txt-muted/40 hover:bg-txt-muted/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;
