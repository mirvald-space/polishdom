import React from "react";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="bg-[rgba(24,45,14,1)] flex w-full overflow-hidden text-white justify-between flex-wrap px-[220px] py-10 max-md:max-w-full max-md:px-5">
      <div className="flex min-w-60 flex-col items-stretch text-sm font-bold leading-6 flex-1 shrink basis-[0%] max-md:max-w-full">
        <h1 className="text-[50px] leading-[56px] uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
          Польский
          <br />
          для всех целей
        </h1>
        <p className="font-normal mt-4 max-md:max-w-full">
          6 лет успешного опыта подготовки к Карте поляка и экзаменам.
          <br />
          Индивидуальный подход к каждому ученику, от начинающих до продвинутого
          уровня.
        </p>
        <Button className="mt-4 self-start uppercase">Консультация (30 мин)</Button>
      </div>

      <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="flex w-full items-stretch gap-0.5 flex-wrap max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/423adc84d53e55d95e66ea70af513256ff2f8bba?placeholderIfAbsent=true"
            alt="Teacher"
            className="aspect-[1] object-contain w-[200px] min-h-[200px] shrink-0 rounded-[18px]"
          />
          <div className="min-w-70 flex-1 ">
            <div className="flex w-full items-stretch gap-0.5">
              <div className="bg-[rgba(255,255,255,0.05)] border flex gap-3 h-full flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(255,255,255,0.1)] border-solid">
                <div className="w-full flex-1 shrink basis-[0%]">
                  <div className="text-lg font-bold leading-none">6</div>
                  <div className="text-base font-normal leading-6 mt-1">
                    Лет опыта работы
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] border flex gap-3 h-full flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(255,255,255,0.1)] border-solid">
                <div className="w-full flex-1 shrink basis-[0%]">
                  <div className="text-lg font-bold leading-none">200+</div>
                  <div className="text-base font-normal leading-6 mt-1">
                    Довольных учеников
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] border flex w-full gap-3 flex-1 h-fit p-[18px] rounded-[18px] border-[rgba(255,255,255,0.1)] border-solid">
              <div className="min-w-60 w-full flex-1 shrink basis-[0%]">
                <div className="text-lg font-bold leading-none">2799+</div>
                <div className="text-base font-normal mt-1">Провела уроков</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.05)] flex w-full flex-col items-stretch text-sm font-normal leading-5 p-[18px] rounded-[18px] border-[rgba(255,255,255,0.05)] border-solid border-2 max-md:max-w-full mt-0.5">
          <div className="flex min-h-6 gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-yellow-400"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
          <div className="mt-2 max-md:max-w-full">
            " Екатерина прекрасный преподаватель! Объясняет понятно,
            поддерживает и мотивирует. Уроки проходят легко и интересно, и
            главное – дают результат!
          </div>
        </div>
      </div>
    </section>
  );
};
