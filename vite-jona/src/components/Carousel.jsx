import { useEffect, useState } from "react";
import ResponsiveImage from "./ResponsiveImage";

const INTERVAL = 3500;

function Carousel({ slides, sizes }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div className="group relative w-full h-full" role="group" aria-label="Featured projects">
      {slides.map(({ image, alt }, i) => (
        <ResponsiveImage
          key={image}
          image={image}
          alt={i === active ? alt : ""}
          sizes={sizes}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        className="hidden can-hover:block absolute left-2 bottom-2 px-2 py-1 bg-white dark:bg-darkBg text-black dark:text-white font-plus font-light text-xs opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
      >
        {paused ? "PLAY" : "PAUSE"}
      </button>
    </div>
  );
}

export default Carousel;
