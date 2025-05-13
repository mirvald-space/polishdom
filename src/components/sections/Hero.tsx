import React from "react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  const scrollToResults = () => {
    const resultsSection = document.getElementById('results');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col gap-5 p-5 bg-[#CA4237] w-full text-white justify-between rounded-[20px]">
        <h1 className="text-[32px] leading-[40px] font-bold uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
        Выучить польский до уровня B2 возможно за 7-9 месяцев
        </h1>
        <p className="font-normal max-md:max-w-full text-xl">
        Большинство студентов тратят более 2 лет на то, что можно освоить гораздо быстрее
        </p>
        <Button 
          className="self-start uppercase bg-white text-black font-bold w-full hover:bg-white/80 hover:text-black" 
          size="default" 
          onClick={scrollToResults}
        >
          Узнать, как выучить польский быстрее
        </Button>
    </section>
  );
};
