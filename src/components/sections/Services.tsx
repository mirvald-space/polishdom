import React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full overflow-hidden text-[rgba(59,56,40,1)] px-[220px] py-10 max-md:max-w-full max-md:px-5"
    >
      <h2 className="text-[32px] font-semibold">Виды занятий</h2>

      <div className="flex w-full gap-1 text-sm font-bold flex-wrap mt-8 rounded-xl max-md:max-w-full">
        <ServiceCard
          title="Занятия 1:1"
          description="Помогу вам быстро освоить разговорный польский для повседневного общения. Мои уроки строятся на живом диалоге и практических ситуациях, чтобы вы сразу начали говорить."
          price="30$"
          priceDescription="/ урок 50 минут"
          buttonText="Забронировать урок"
        />

        <ServiceCard
          title="Карта поляка"
          description="Готовлю к собеседованию на Карту поляка уже 6 лет. Знаю все тонкости процесса и помогу вам уверенно ответить на все вопросы комиссии о польской культуре, истории и традициях."
          price="от 35$"
          priceDescription="/ урок 50 минут"
          buttonText="Консультация (30 мин)"
        />

        <ServiceCard
          title="Экзамены"
          description="Подготовлю вас к сдаче любого уровня польского языка от A1 до C1. Моя методика обеспечивает комплексное развитие всех навыков: чтения, письма, аудирования и говорения."
          price="от 35$"
          priceDescription="/ урок 50 минут"
          buttonText="Консультация (30 мин)"
        />
      </div>
    </section>
  );
};
