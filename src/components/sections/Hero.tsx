import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

export const Hero: React.FC = () => {
  const scrollToResults = () => {
    const resultsSection = document.getElementById('results');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[346px] overflow-hidden rounded-[20px]">
      {/* Container with fixed aspect ratio */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/с фоном.png" 
            alt="Warsaw skyline" 
            className="w-full h-full object-cover  filter"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Text overlay - positioned BEHIND the building */}
        <div className="absolute inset-0 flex justify-center p-5 z-10">
          <h1 className="text-[32px] md:text-[32px] leading-[1.2] font-bold uppercase text-white text-center max-w-[800px]">
            Выучить польский до уровня B2 возможно за 7-9 месяцев
          </h1>
        </div>
        
        {/* Building image without background - positioned on top of text */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-20 w-full flex justify-center">
          <img 
            src="/Без фона.png" 
            alt="Palace of Culture and Science" 
            className="h-[346px] w-auto"
          />
        </div>
        
        {/* Arrow down button with animation */}
        <button 
          onClick={scrollToResults} 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-full p-3 hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300"
          aria-label="Прокрутить вниз"
        >
          <FaAnglesDown 
            size={24} 
            color="white" 
            className="animate-bounce motion-safe:animate-bounce drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          />
        </button>
      </div>
    </section>
  );
};
