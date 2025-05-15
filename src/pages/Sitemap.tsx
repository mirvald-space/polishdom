import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SEO } from "@/components/layout/SEO";

const Sitemap: React.FC = () => {
  // Используем текущую дату 2025-05-15
  const currentDate = "15 мая 2025";
  
  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title="Карта сайта - PolishDom"
        description="Навигационная карта сайта PolishDom для удобного поиска информации (обновлено: 15 мая 2025)"
        canonical="/sitemap"
      />
      
      <Container>
        <Header />
        <main className="py-12">
          <h1 className="text-3xl font-bold mb-8">Карта сайта</h1>
          <p className="text-sm text-gray-500 mb-8">Последнее обновление: {currentDate}</p>
          
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Главные страницы</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Главная страница</Link></li>
              <li><Link to="/blog" className="text-blue-600 hover:underline">Блог</Link></li>
              <li><Link to="/sitemap" className="text-blue-600 hover:underline">Карта сайта</Link></li>
            </ul>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Статьи блога</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/blog/10-sposobow-uczyc-sie-slowek" className="text-blue-600 hover:underline">10 способов учить словечки</Link></li>
              <li><Link to="/blog/przygotowanie-do-rozmowy-karta-polaka" className="text-blue-600 hover:underline">Подготовка к собеседованию на Карту поляка</Link></li>
              <li><Link to="/blog/polskie-seriale-do-nauki-jezyka" className="text-blue-600 hover:underline">Польские сериалы для изучения языка</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Правовые документы</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/terms-of-service" className="text-blue-600 hover:underline">Условия использования</Link></li>
              <li><Link to="/privacy-policy" className="text-blue-600 hover:underline">Политика конфиденциальности</Link></li>
            </ul>
          </div>
        </main>
        <Footer />
      </Container>
    </div>
  );
};

export default Sitemap; 