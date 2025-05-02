import React from "react";
import { FeatureCard } from "../ui/FeatureCard";

export const Features: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full px-[220px] py-10 max-md:max-w-full max-md:px-5"
    >
      <h2 className="text-[rgba(59,87,52,1)] text-[32px] font-bold uppercase max-md:max-w-full">
        Как проходят занятия со мной:
      </h2>

      <div className="flex w-full items-stretch gap-0.5 flex-wrap mt-8 max-md:max-w-full">
        <div className="bg-white border min-w-60 text-sm text-[rgba(59,56,40,1)] font-normal leading-5 flex-1 shrink basis-[0%] p-[18px] rounded-[18px] border-[rgba(59,56,40,0.1)] border-solid max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/5068f6ee64eb0679c57ea1d16f4f660fc779448a?placeholderIfAbsent=true"
            alt="Teacher"
            className="aspect-[0.96] object-contain w-24"
          />
          <div className="w-full mt-3 max-md:max-w-full">
            Привет! Я Катя, твой личный репетитор польского языка.
            <br />
            <br />
            Помогу освоить язык быстро и эффективно, используя современные
            методы и индивидуальный подход.
            <br />
            <br />
            Готовлю к Карте Поляка, экзаменам и жизни в Польше. Гибкий график и
            доступные цены.
          </div>
        </div>

        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-9 max-md:max-w-full">
          <div className="flex w-full gap-0.5 flex-wrap max-md:max-w-full">
            <FeatureCard
              title="Максимум пользы"
              description="Практика с первого занятия. Много разговоров, разборов реальных тем и ситуаций, особенно если готовишься к Карте Поляка или гражданству."
            />
            <FeatureCard
              title="Максимум пользы"
              description="Практика с первого занятия. Много разговоров, разборов реальных тем и ситуаций, особенно если готовишься к Карте Поляка или гражданству."
            />
          </div>

          <div className="flex w-full items-stretch gap-0.5 flex-wrap max-md:max-w-full">
            <FeatureCard
              title="Индивидуальный подход"
              description="Каждый ученик — это отдельная история. Я подбираю материалы и темп обучения так, чтобы ты продвигался уверенно и с интересом, вне зависимости от стартового уровня."
              className="flex-col"
            />
            <FeatureCard
              title="Современные методы"
              description="Без скучных учебников — только актуальные материалы, интерактив, реальные диалоги и ситуации. Учим так, как говорят в жизни."
              className="flex-col"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
