'use client'
import { useState, useEffect } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] overflow-hidden">

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, index) => (
          <img
            key={index}
            src={item.image || "/fallback.jpg"}
            alt="banner"
            className="min-w-full h-full object-co"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-0 w-full flex justify-center gap-2 sm:gap-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}