import React from "react";

export const Results: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 w-full bg-[#0F3516] text-white p-5 max-md:max-w-full rounded-[20px]">
      <h2 className="text-[24px] leading-[32px] font-bold uppercase max-md:max-w-full">
        МОИ РЕЗУЛЬТАТЫ ЗА 6+ ЛЕТ ОБУЧЕНИЯ:
      </h2>

      <div className="flex flex-col md:flex-row gap-5 items-center max-md:max-w-full">
        <div className="md:w-1/2">
          <img 
            src="/ava.png" 
            alt="Фото преподавателя" 
            className="w-full min-w-[128px] max-w-[128px] rounded-[20px]"
          />
        </div>
          <p className="text-base">
            Привет, меня зовут Катя, и я помогаю ученикам уверенно говорить на польском языке и успешно получать Карту поляка.
          </p>
      </div>
      <ul className="list-none">
            <li>• С 8 класса училась польскому в школе</li>
            <li>• Получила образование в польском вузе</li>
            <li>• Разработала методику быстрого освоения языка до уровня B2</li>
          </ul>
      <p className="text-base">
            Больше всего в преподавании меня вдохновляют успехи моих учеников, их искренняя обратная связь и эмоции, которыми мы обмениваемся на занятиях. Мой подход к обучению – не просто преподавание языка, а создание пространства для комфортного погружения в польскую культуру и развития навыков, необходимых для достижения ваших целей.
          </p>
      
      <div className="flex flex-col gap-[4px] mt-8">
        <div className="flex justify-between items-center bg-[#072e0d] p-5 rounded-[20px]">
          <div className="text-[32px] font-bold text-white mr-10 w-32">6+</div>
          <div className="text-base text-white">лет опыта преподавания</div>
        </div>
        
        <div className="flex justify-between items-center bg-[#072e0d] p-5 rounded-[20px] ">
          <div className="text-[32px] font-bold text-white mr-10 w-32">250+</div>
          <div className="text-base text-white">учеников обучила</div>
        </div>
        
        <div className="flex justify-between items-center bg-[#072e0d] p-5 rounded-[20px]">
          <div className="text-[32px] font-bold text-white mr-10 w-32">2 800+</div>
          <div className="text-base text-white">занятий провела онлайн</div>
        </div>
      </div>
    </section>
  );
}; 