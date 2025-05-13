import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    
    // Плавная прокрутка к якорю
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Если элемент не найден, прокручиваем к соответствующему разделу по селектору
      const section = document.querySelector(`.${id}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Если ничего не найдено, прокручиваем в начало
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full text-sm bg-white leading-6 p-5 rounded-[20px]">
      {/* Overlay с эффектом размытия */}
      <div 
        className={`fixed inset-0 bg-black/5 backdrop-blur-sm transition-all duration-300 z-10 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      <div className="flex justify-between items-center">
        <Link to="/" className="flex gap-[7px] overflow-hidden font-bold items-center whitespace-nowrap z-20" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/09ecf6ed7ff4d307fd9d9778d1b1617bff7f338d?placeholderIfAbsent=true"
            alt="Логотип PolishDom - школа польского языка"
            className="aspect-[1] object-contain w-[26px] min-h-[26px] shrink-0 rounded-[56px]"
          />
          <div>PolishdDom</div>
        </Link>
        
        {/* Кнопка меню для всех разрешений */}
        <button 
          className="font-medium bg-[#FAFAFA] z-20 hover:text-gray-700 transition-colors px-[20px] py-[10px] border border-transparent hover:border-gray-200 rounded-[20px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Меню
        </button>
      </div>

      {/* Выпадающее меню для всех разрешений */}
      <nav className={`flex flex-col p-5 w-full bg-white absolute left-1/2 -translate-x-1/2 shadow-md transition-all duration-300 z-20 max-w-[462px] py-3 ${mobileMenuOpen ? 'opacity-100 translate-y-0 top-[20px] rounded-[20px]' : 'opacity-0 -translate-y-10 pointer-events-none top-[60px]'}`}>
          <a 
            href="#methodology" 
            className="py-3 text-center bg-white hover:bg-gray-50 transition-all duration-200 rounded-[20px] mb-2 flex items-center justify-center font-medium"
            onClick={(e) => handleNavLinkClick(e, 'methodology')}
          >
            Методология
          </a>
          <a 
            href="#services" 
            className="py-3 text-center bg-white hover:bg-gray-50 transition-all duration-200 rounded-[20px] mb-2 flex items-center justify-center font-medium"
            onClick={(e) => handleNavLinkClick(e, 'services')}
          >
            Услуги
          </a>
          <a 
            href="#results" 
            className="py-3 text-center bg-white hover:bg-gray-50 transition-all duration-200 rounded-[20px] mb-2 flex items-center justify-center font-medium"
            onClick={(e) => handleNavLinkClick(e, 'results')}
          >
            Результаты
          </a>
          <a 
            href="#testimonials" 
            className="py-3 text-center bg-white hover:bg-gray-50 transition-all duration-200 rounded-[20px] mb-2 flex items-center justify-center font-medium"
            onClick={(e) => handleNavLinkClick(e, 'testimonials')}
          >
            Отзывы
          </a>
          <a 
            href="#faq" 
            className="py-3 text-center bg-white hover:bg-gray-50 transition-all duration-200 rounded-[20px] mb-2 flex items-center justify-center font-medium"
            onClick={(e) => handleNavLinkClick(e, 'faq')}
          >
            FAQ
          </a>
          
          {/* Кнопка закрыть внизу */}
          <button 
            className="mt-2 py-3 text-center bg-[#FAFAFA] hover:bg-gray-100 transition-all duration-200 rounded-[20px] w-full border border-transparent font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Закрыть
          </button>
      </nav>
    </header>
  );
};
