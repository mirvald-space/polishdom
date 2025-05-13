import React from "react";

export const Pain2: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full bg-white p-5 max-md:max-w-full rounded-[20px]"
    >
      <h2 className="text-[24px] leading-[32px] font-bold uppercase max-md:max-w-full">
      Цена неэффективного изучения польского языка
      </h2>

      <div className="flex w-full items-stretch gap-0.5 flex-wrap mt-8 max-md:max-w-full">
        <div className="bg-[#FAFAFA] min-w-60 text-sm font-normal leading-5 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid max-md:max-w-full">
          <p className="text-[18px] leading-[24px] font-bold">Что происходит при традиционном подходе:</p>
          <div className="w-full mt-3 max-md:max-w-full">
          ❌ Потеря 1-2 лет жизни на изучение того, что можно освоить за 7-9 месяцев
            <br /> <br />
            ❌ Дополнительные расходы на учебники, курсы и программы (в среднем до 1500$)
            <br /> <br />
            ❌ Разочарование и потеря мотивации из-за отсутствия видимого прогресса
            <br /> <br />
            ❌ Неспособность использовать язык в реальных ситуациях, несмотря на годы обучения
            <br /> <br />
            ❌ Упущенные возможности для карьеры, учебы и жизни в Польше
          </div>
        </div>
      </div>
    </section>
  );
};
