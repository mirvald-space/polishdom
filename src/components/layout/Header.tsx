import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center text-sm text-[rgba(59,56,40,1)] leading-6 justify-between flex-wrap px-[220px] py-2.5 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex gap-[7px] overflow-hidden font-bold whitespace-nowrap my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/09ecf6ed7ff4d307fd9d9778d1b1617bff7f338d?placeholderIfAbsent=true"
          alt="PolishdDom Logo"
          className="aspect-[1] object-contain w-[26px] min-h-[26px] shrink-0 rounded-[56px]"
        />
        <div>PolishdDom</div>
      </div>
      <nav className="self-stretch flex min-w-60 items-center gap-6 font-normal uppercase flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Link to="#about" className="self-stretch my-auto">
          Обо мне
        </Link>
        <Link to="#how-it-works" className="self-stretch my-auto">
          Как проходят занятия
        </Link>
        <Link to="#services" className="self-stretch my-auto">
          Виды обучения
        </Link>
        <Link to="#testimonials" className="self-stretch my-auto">
          Отзывы
        </Link>
        <Link to="#contacts" className="self-stretch my-auto">
          Контакты
        </Link>
      </nav>
    </header>
  );
};
