import { useEffect, useRef } from "react";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";

const PortfolioSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.children;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % slides.length;
      slider.scrollTo({
        left: slides[index].offsetLeft,
        behavior: "smooth",
      });
    }, 3100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portofolio" className="px-6 py-7">
      <div className="relative max-w-3xl mx-auto">
        <div
          ref={sliderRef}
          className="flex aspect-video overflow-x-auto snap-x snap-mandatory scroll-smooth shadow-lg rounded-lg scrollbar-hide relative"
        >
          <img src={image1} className="flex-shrink-0 w-full snap-start object-cover" alt="Slide 1" />
          <img src={image2} className="flex-shrink-0 w-full snap-start object-cover" alt="Slide 2" />
          <img src={image3} className="flex-shrink-0 w-full snap-start object-cover" alt="Slide 3" />
          <img src={image4} className="flex-shrink-0 w-full snap-start object-cover" alt="Slide 4" />
          <img src={image5} className="flex-shrink-0 w-full snap-start object-cover" alt="Slide 5" />
        </div>
        <div className="flex gap-4 absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <button onClick={() => sliderRef.current.scrollTo({ left: 0, behavior: "smooth" })} className="w-2 h-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
          <button onClick={() => sliderRef.current.scrollTo({ left: slides[1]?.offsetLeft || 0, behavior: "smooth" })} className="w-2 h-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
          <button onClick={() => sliderRef.current.scrollTo({ left: slides[2]?.offsetLeft || 0, behavior: "smooth" })} className="w-2 h-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
          <button onClick={() => sliderRef.current.scrollTo({ left: slides[3]?.offsetLeft || 0, behavior: "smooth" })} className="w-2 h-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
          <button onClick={() => sliderRef.current.scrollTo({ left: slides[4]?.offsetLeft || 0, behavior: "smooth" })} className="w-2 h-2 rounded-full bg-white opacity-75 hover:opacity-100"></button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;
