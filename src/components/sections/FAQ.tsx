import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Что нужно для занятий?",
      answer: "Компьютер с интернетом, ручка и тетрадь. Все материалы предоставляю."
    },
    {
      question: "За какое время реально выучить польский?",
      answer: "До уровня B1 - 3-4 месяца, до B2 - 7-9 месяцев при регулярных занятиях."
    },
    {
      question: "Как проходят занятия?",
      answer: "Онлайн через платформу polishdom: новая тема, практика, закрепление, домашнее задание."
    },
    {
      question: "Можно ли подготовиться к Карте поляка?",
      answer: "Да, это дополнительная услуга, которую можно добавить к основному курсу."
    }
  ];

  return (
    <section
      id="faq"
      className="w-full bg-white p-5 max-md:max-w-full max-md:px-5 rounded-[20px]"
    >
      <h2 className="text-[24px] leading-[32px] uppercase font-bold mb-6">Частые вопросы</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}; 