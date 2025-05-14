import React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-5 w-full bg-white p-5 max-md:max-w-full max-md:px-5 rounded-[20px] border-[#E2DEDE] border"
    >
      <h2 className="text-[24px] leading[32px] uppercase font-bold">Инвестиции в ваше языковое будущее</h2>


        <ServiceCard
          description="Помогу вам быстро освоить разговорный польский для повседневного общения. Мои уроки строятся на живом диалоге и практических ситуациях, чтобы вы сразу начали говорить."
          features={[
            "Персональная программа обучения",
            "Разговорная практика",
            "Учебные материалы в электронном виде",
            "Домашние задания с проверкой",
            "Поддержка между занятиями"
          ]}
          price="Индивидуальный тариф"

          priceDescription="Стоимость зависит от формата и интенсивности занятий"
          
          buttonText="Забронировать урок"
          buttonUrl="https://t.me/katarzyna11"
        />

    </section>
  );
};
