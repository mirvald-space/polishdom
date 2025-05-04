import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center text-sm text-[rgba(59,56,40,1)] leading-6 justify-between px-[220px] py-2.5 max-lg:px-10 max-md:px-5 max-sm:flex-wrap">
      <div className="flex gap-[7px] overflow-hidden font-bold whitespace-nowrap z-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/09ecf6ed7ff4d307fd9d9778d1b1617bff7f338d?placeholderIfAbsent=true"
          alt="Логотип PolishDom - школа польского языка"
          className="aspect-[1] object-contain w-[26px] min-h-[26px] shrink-0 rounded-[56px]"
        />
        <div>PolishdDom</div>
      </div>
      
      {/* Мобильная кнопка меню */}
      <button 
        className="hidden max-md:flex flex-col justify-center items-center w-8 h-8 z-10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-[rgba(59,56,40,1)] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[rgba(59,56,40,1)] my-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-[rgba(59,56,40,1)] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Десктопное меню */}
      <nav className="flex gap-6 font-normal uppercase max-md:hidden">
        <Link to="#about" className="my-auto hover:text-[rgba(59,56,40,0.7)] transition-colors">
          Обо мне
        </Link>
        <Link to="#how-it-works" className="my-auto hover:text-[rgba(59,56,40,0.7)] transition-colors">
          Как проходят занятия
        </Link>
        <Link to="#services" className="my-auto hover:text-[rgba(59,56,40,0.7)] transition-colors">
          Виды обучения
        </Link>
        <Link to="#testimonials" className="my-auto hover:text-[rgba(59,56,40,0.7)] transition-colors">
          Отзывы
        </Link>
        <Link to="#contacts" className="my-auto hover:text-[rgba(59,56,40,0.7)] transition-colors">
          Контакты
        </Link>
      </nav>

      {/* Мобильное меню */}
      <nav className={`hidden max-md:flex flex-col w-full bg-white py-5 absolute top-[60px] left-0 shadow-md transition-all duration-300 z-20 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <Link 
          to="#about" 
          className="py-3 px-5 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Обо мне
        </Link>
        <Link 
          to="#how-it-works" 
          className="py-3 px-5 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Как проходят занятия
        </Link>
        <Link 
          to="#services" 
          className="py-3 px-5 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Виды обучения
        </Link>
        <Link 
          to="#testimonials" 
          className="py-3 px-5 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Отзывы
        </Link>
        <Link 
          to="#contacts" 
          className="py-3 px-5 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Контакты
        </Link>
      </nav>
    </header>
  );
};
