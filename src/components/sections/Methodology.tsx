import React from "react";

interface MethodologyStepProps {
  number: string;
  title: string;
  description: string;
}

const MethodologyStep: React.FC<MethodologyStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-center gap-5 p-5 bg-[#FAFAFA] rounded-[20px]">
      <div className="text-[24px] items-center leading-[32px] font-bold min-w-8">{number}</div>
      <div>
        <h3 className="text-lg font-bold uppercase">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export const Methodology: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "ДИАГНОСТИКА И ПЕРСОНАЛЬНЫЙ ПЛАН",
      description: "Определяем уровень и разрабатываем индивидуальную стратегию."
    },
    {
      number: "02",
      title: "ИНТЕНСИВНОЕ ПОГРУЖЕНИЕ",
      description: "Базовая лексика и грамматика с фокусом на устную речь."
    },
    {
      number: "03",
      title: "ИНТЕРАКТИВНАЯ ПРАКТИКА",
      description: "Работа с аутентичными материалами, аудио и видео."
    },
    {
      number: "04",
      title: "ДОСТИЖЕНИЕ ЦЕЛИ",
      description: "Выход на уровень B2 с возможностью работы, учебы или получения Карты поляка."
    }
  ];

  return (
    <section className="w-full bg-white p-5 max-md:max-w-full mt-8 rounded-[20px]">
      <h2 className="text-[24px] leading-[32px] font-bold uppercase max-md:max-w-full">
        КАК МОИ УЧЕНИКИ ДОСТИГАЮТ УРОВНЯ B2 ЗА 7-9 МЕСЯЦЕВ
      </h2>

      <p className="mt-4 text-base">
        Путь к свободному владению польским языком состоит из 4 последовательных шагов:
      </p>

      <div className="flex flex-col gap-[4px] mt-6">
        {steps.map((step, index) => (
          <MethodologyStep 
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
      
      <p className="mt-6 text-sm italic">
        *Каждый этап адаптируется под ваши индивидуальные потребности и темп обучения – я гибко подстраиваюсь под ваши интересы, предпочитая чтение или просмотр видео в зависимости от того, что вам ближе.
      </p>
    </section>
  );
}; 