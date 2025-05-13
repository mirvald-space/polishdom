import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (

    <footer className="flex flex-col w-full p-5 gap-5 bg-white rounded-[20px]">
      
        <div className="flex flex-col gap-5 items-stretch text-sm text-[rgba(59,56,40,1)]">
          <div className="flex  overflow-hidden font-bold whitespace-nowrap leading-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/d305ad212f8e932084c56ead563859e6de3d63e6?placeholderIfAbsent=true"
              alt="Логотип PolishDom - курсы польского языка онлайн"
              className="aspect-[0.96] object-contain w-[26px] min-h-[26px] shrink-0 rounded-[56px]"
            />
            <div>PolishdDom</div>
          </div>
          <div className="font-normal text-base leading-5 mt-2">
          Сделаем онлайн-обучение увлекательным и интересным.
          </div>
        </div>

        <div className="flex flex-col gap-1 p-5 bg-[#fafafa] rounded-[20px]">
            <div className="flex items-center justify-center gap-2">
              <Link to="/terms-of-service" target="_blank">Договор</Link>
              <Link to="/privacy-policy" target="_blank">
                Политика
              </Link>
            </div>
        </div>

        <div className="text-sm text-center text-[rgba(59,56,40,1)] font-normal">
          © 2025 PolishDom. Все права защищены.
        </div>

      
    </footer>
  );
};
