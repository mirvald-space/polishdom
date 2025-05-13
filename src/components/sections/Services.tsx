import React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-5 w-full bg-white p-5 max-md:max-w-full max-md:px-5 rounded-[20px]"
    >
      <h2 className="text-[24px] leading[32px] uppercase font-bold">Инвестиции в ваше языковое будущее</h2>


        <ServiceCard
          title="Индивидуальное занятие"
          description="Помогу вам быстро освоить разговорный польский для повседневного общения. Мои уроки строятся на живом диалоге и практических ситуациях, чтобы вы сразу начали говорить."
          price="от 119zł"
          priceDescription="/ за 60-минутный урок"
          buttonText="Забронировать урок"
          buttonUrl="https://t.me/katarzyna11"
        />

    </section>
  );
};
