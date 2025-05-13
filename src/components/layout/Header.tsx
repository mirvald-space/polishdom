import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full text-sm bg-white leading-6 p-5 rounded-[20px]">
      {/* Overlay с эффектом размытия */}
      <div 
        className={`fixed inset-0 bg-black/5 backdrop-blur-sm transition-all duration-300 z-10 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      <div className="flex justify-between items-center">
        <div className="flex gap-[7px] overflow-hidden font-bold whitespace-nowrap z-20">
          <img
              src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/09ecf6ed7ff4d307fd9d9778d1b1617bff7f338d?placeholderIfAbsent=true"
              alt="Логотип PolishDom - школа польского языка"
              className="aspect-[1] object-contain w-[26px] min-h-[26px] shrink-0 rounded-[56px]"
            />
            <div>PolishdDom</div>
          </div>
          
          {/* Кнопка меню для всех разрешений */}
          <button 
            className="font-medium bg-[#FAFAFA] z-20 hover:text-gray-700 transition-colors px-[20px] py-[10px] border border-transparent hover:border-gray-200 rounded-[20px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Меню
          </button>
        </div>


      {/* Выпадающее меню для всех разрешений */}
      <nav className={`flex flex-col w-full bg-white absolute left-1/2 -translate-x-1/2 shadow-md transition-all duration-300 z-20 max-w-[462px] py-3 ${mobileMenuOpen ? 'opacity-100 translate-y-0 top-[20px] rounded-[20px]' : 'opacity-0 -translate-y-10 pointer-events-none top-[60px]'}`}>
        {/* Кнопка закрытия в правом верхнем углу */}
        <button 
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <Container>
          <Link 
            to="#about" 
            className="py-3 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Обо мне
          </Link>
          <Link 
            to="#how-it-works" 
            className="py-3 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Как проходят занятия
          </Link>
          <Link 
            to="#services" 
            className="py-3 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Виды обучения
          </Link>
          <Link 
            to="#testimonials" 
            className="py-3 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Отзывы
          </Link>
          <Link 
            to="#contacts" 
            className="py-3 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Контакты
          </Link>
        </Container>
      </nav>
    </header>
  );
};
