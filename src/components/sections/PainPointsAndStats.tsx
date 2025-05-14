import React from "react";

export const PainPointsAndStats: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* First section: Learning Challenges */}
      <section className="w-full bg-white p-5 max-md:max-w-full rounded-[20px] border-[#E2DEDE] border">
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

      {/* Second section: Cost of Ineffective Learning */}
      <section className="w-full bg-white p-5 max-md:max-w-full rounded-[20px] border-[#E2DEDE] border">
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

      {/* Third section: Statistics */}
      <section className="flex flex-col w-full bg-white p-5 max-md:max-w-full rounded-[20px] border-[#E2DEDE] border gap-5">
        <h2 className="text-[24px] leading-[32px] font-bold uppercase max-md:max-w-full">
        Немного статистики
        </h2>

        <div className="bg-[#FAFAFA] min-w-60 text-sm font-normal leading-5 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid max-md:max-w-full">
          👉 78% самостоятельно изучающих польский бросают занятия в первые 3 месяца
          <br /> <br />
          👉 Около 65% выпускников языковых курсов не могут свободно общаться после 2 лет обучения
          <br /> <br />
          👉 В среднем студент тратит в 3 раза больше времени и денег, чем необходимо
        </div>
        
        <p className="text-[16px] leading-[24px] font-normal">
          Узнаете себя в этих пунктах? Вы не одиноки – большинство взрослых учеников проходят через эти трудности на пути к свободному владению польским языком.
        </p>
      </section>
    </div>
  );
}; 