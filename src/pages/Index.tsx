import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPointsAndStats } from "@/components/sections/PainPointsAndStats";
import { Services } from "@/components/sections/Services";
import { StudentResults } from "@/components/sections/StudentResults";
import { CTASection } from "@/components/sections/CTASection";
import { MarqueeText } from "@/components/ui/MarqueeText";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import { Results } from "@/components/sections/Results";
import { Methodology } from "@/components/sections/Methodology";
import { FAQ } from "@/components/sections/FAQ";

const marqueeItems = [
  { text: "Для взрослых" },
  { text: "|", type: "separator" as const },
  { text: "для детей" },
  { text: "|", type: "separator" as const },
  { text: "для Карти поляка" },
  { text: "|", type: "separator" as const },
  { text: "подготовка к Экзамену в восьмом классе" },
  { text: "|", type: "separator" as const },
  { text: "nil" },
  { text: "|", type: "separator" as const },
  { text: "сертификат (a1 - c1" },
  { text: "|", type: "separator" as const },
  { text: "matura" },
  { text: "|", type: "separator" as const },
  { text: "гражданство" },
  { text: "|", type: "separator" as const },
  { text: "для Начинающих" },
  { text: "|", type: "separator" as const },
  { text: "для Студентов" },
  { text: "|", type: "separator" as const },
  { text: "для Путешествий" },
  { text: "|", type: "separator" as const },
  { text: "для поддержания уровня языка" },
  { text: "|", type: "separator" as const },
];

const Index: React.FC = () => {
  // Структурированные данные Schema.org для локального бизнеса
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PolishDom",
    "description": "Уроки польского языка для детей и взрослых. Подготовка к Карте поляка, экзаменам, сертификации.",
    "image": "/hero.png",
    "email": "polishdom.info@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Польша"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://facebook.com/polishdom",
      "https://instagram.com/polishdom"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const scrollToResults = () => {
    const resultsSection = document.getElementById('results');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title="PolishDom - Изучение польского языка | Карта поляка | Сертификаты"
        description="Уроки польского языка для детей и взрослых. Подготовка к Карте поляка, экзаменам, сертификации. 6 лет опыта в обучении польскому языку."
        schema={schemaData}
      />
      
      <main>
        <Container>
          <Header />
          <Hero />
          <MarqueeText items={marqueeItems} />
          <PainPointsAndStats />
          <Results />
          <Methodology />
          
          <CTASection
            title="Подготовка к собеседованию на Карту поляка"
            description="Тренируйтесь отвечать на вопросы консула с помощью моего AI-бота. Симуляция реального собеседования поможет чувствовать себя увереннее и повысит ваши шансы на успех."
            buttonText="Перейти к боту"
            image="/consul.png"
            linkTo="https://t.me/polishdom_bot"
            isExternal={true}
            blank={true}
            bgGradient="linear-gradient(to right, #0BA360, #3CBA92)"
            textColor="text-white"
            buttonClassName="bg-white text-black hover:bg-white/90 hover:text-black font-bold"
          />
          <StudentResults />
          <CTASection
            title="ЕЖЕДНЕВНЫЕ УПРАЖНЕНИЯ И СОВЕТЫ В TELEGRAM"
            description="Изучайте польский язык и культуру с моими ежедневными материалами в Telegram: практические упражнения, полезные фразы, культурные заметки и эксклюзивные советы для быстрого прогресса"
            buttonText="ПОДПИСАТЬСЯ НА КАНАЛ"
            bgGradient="linear-gradient(to right, #57B9EB, #42A5D7)"
            textColor="text-white"
            image="/channel.png"
            linkTo="https://t.me/polishdom"
            isExternal={true}
            blank={true}
            buttonClassName="bg-white text-black hover:bg-white/90 hover:text-black font-bold"
          />
          <Services />
          <FAQ />
          <CTASection
            title="НАЧНИТЕ ГОВОРИТЬ ПО-ПОЛЬСКИ УЖЕ ЧЕРЕЗ 1 МЕСЯЦ"
            description="На бесплатном пробном занятие определим ваш текущий уровень, составим персональный план обучения, спрогнозируем ориентировочные сроки достижения для вашего уровня"
            buttonText="🎁 ЗАПИСАТЬСЯ НА ЗАНЯТИЕ"
            image="/rozmowy.png"
            linkTo="https://t.me/katarzyna11"
            isExternal={true}
            blank={true}
            bgGradient="linear-gradient(to right, #8E2DE2, #4A00E0)"
            textColor="text-white"
            buttonClassName="bg-white text-black hover:bg-white/90 hover:text-black font-bold"
          />
          
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default Index;
