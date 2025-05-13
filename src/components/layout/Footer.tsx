import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (

    <footer className="w-full p-5 bg-white rounded-[20px]">
      
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
          Сделаем онлайн-обучение увлекательным и интересным.
          </div>
        </div>

        <div className="flex flex-col gap-8">

          <div className="text-sm text-[rgba(59,56,40,1)] font-normal">
            <div className="text-[#3B3828] text-base font-bold">Документы</div>
            <div className="leading-none mt-3">
              <Link to="/terms-of-service">Договор оферты</Link>
            </div>
            <div className="leading-5">
              <Link to="/privacy-policy">
                Политика <br />
                конфидециальности
              </Link>
            </div>
          </div>

        </div>
      
    </footer>
  );
};
