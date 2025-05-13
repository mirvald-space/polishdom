import React from "react";

export const Pain1: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full bg-white p-5 max-md:max-w-full rounded-[20px]"
    >
      <h2 className="text-[24px] leading-[32px] font-bold uppercase max-md:max-w-full">
        С чем сталкиваются при изучении польского языка
      </h2>

      <div className="flex w-full items-stretch gap-0.5 flex-wrap mt-8 max-md:max-w-full">
        <div className="bg-[#FAFAFA] min-w-60 text-sm font-normal leading-5 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid max-md:max-w-full">
          <p className="text-[18px] leading-[24px] font-bold">Основные трудности: </p>
          <div className="w-full mt-3 max-md:max-w-full">
          ❌ Сложная грамматика с 7 падежами и многочисленными исключениями
            <br /> <br />
            ❌ Необычная фонетика и сложное произношение (ą, ę, ś, ć, ń, etc.)
            <br /> <br />
            ❌ Недостаточная практика разговорной речи и аудирования
            <br /> <br />
            ❌ Неэффективные методики, растягивающие обучение на годы
            <br /> <br />
            ❌ Проблемы с мотивацией из-за медленного прогресса
          </div>
        </div>
      </div>
    </section>
  );
};
