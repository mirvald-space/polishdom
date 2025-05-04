import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full gap-[40px_48px] flex-wrap px-[220px] py-10 border-[rgba(0,0,0,0.1)] border-t max-md:max-w-full max-md:px-5">
      <div className="flex flex-col items-stretch text-sm text-[rgba(59,56,40,1)]">
        <div className="flex gap-[7px] overflow-hidden font-bold whitespace-nowrap leading-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/d305ad212f8e932084c56ead563859e6de3d63e6?placeholderIfAbsent=true"
            alt="Логотип PolishDom - курсы польского языка онлайн"
            className="aspect-[0.96] object-contain w-[26px] min-h-[26px] shrink-0 rounded-[56px]"
          />
          <div>PolishdDom</div>
        </div>
        <div className="font-normal leading-5 mt-2">
          Мы делаем онлайн-обучение
          <br />
          увлекательным и интересным.
        </div>
      </div>

      <div className="flex min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="text-sm text-[rgba(59,56,40,1)] font-normal flex-1 shrink basis-[0%]">
          <div className="text-[#3B3828] text-base font-bold">Меню</div>
          <div className="leading-none mt-3">
            <Link to="#about">О школе</Link>
          </div>
          <div className="leading-none mt-3">
            <Link to="#services">Обучение</Link>
          </div>
          <div className="leading-none mt-3">
            <Link to="#pricing">Стоимость</Link>
          </div>
          <div className="leading-none mt-3">
            <Link to="#teachers">Преподаватели</Link>
          </div>
          <div className="leading-none mt-3">
            <Link to="#faq">Вопросы</Link>
          </div>
        </div>

        <div className="text-sm text-[rgba(59,56,40,1)] font-normal flex-1 shrink basis-[0%]">
          <div className="text-[#3B3828] text-base font-bold">Документы</div>
          <div className="leading-none mt-3">
            <Link to="#terms">Договор оферты</Link>
          </div>
          <div className="leading-5 mt-3">
            <Link to="#privacy">
              Политика <br />
              конфидециальности
            </Link>
          </div>
        </div>

        <div className="whitespace-nowrap flex-1 shrink basis-[0%]">
          <div className="text-[#3B3828] text-base font-bold">Контакты</div>
          <div className="text-[rgba(59,56,40,1)] text-sm font-medium leading-5 mt-3">
            <a href="mailto:polishdom.info@gmail.com">
              polishdom.info@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-stretch text-base text-[rgba(59,56,40,1)] w-[231px]">
        <div className="font-bold leading-6">
          Остались вопросы
          <br />
          или я могу помочь?
        </div>
        <div className="text-sm font-medium leading-5 mt-3">
          Напишите мне напрямую - я онлайн!
        </div>
        <Button className="mt-3">Задать вопрос</Button>
      </div>
    </footer>
  );
};
