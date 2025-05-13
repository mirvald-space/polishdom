import React from "react";

export const Stats: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="flex flex-col w-full bg-white p-5 max-md:max-w-full rounded-[20px] gap-5"
    >
      <h2 className="text-[24px] leading-[32px] font-bold uppercase max-md:max-w-full">
      Статистика
      </h2>

        <div className="bg-[#FAFAFA] min-w-60 text-sm font-normal leading-5 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid max-md:max-w-full">
          👉 78% самостоятельно изучающих польский бросают занятия в первые 3 месяца
            <br /> <br />
            👉 Около 65% выпускников языковых курсов не могут свободно общаться после 2 лет обучения
            <br /> <br />
            👉 В среднем студент тратит в 3 раза больше времени и денег, чем необходимо

        
      </div>
      <p className="text-[16px] leading-[24px] font-normal">Узнаете себя в этих пунктах? Вы не одиноки – большинство взрослых учеников проходят через эти трудности на пути к свободному владению польским языком.</p>
    </section>
  );
};
