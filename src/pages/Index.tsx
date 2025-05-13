import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pain1 } from "@/components/sections/Pain-1";
import { Pain2 } from "@/components/sections/Pain-2";
import { Services } from "@/components/sections/Services";
import { StudentResults } from "@/components/sections/StudentResults";
import { CTASection } from "@/components/sections/CTASection";
import { MarqueeText } from "@/components/ui/MarqueeText";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import { Stats } from "@/components/sections/Stats";
import { Results } from "@/components/sections/Results";
import { Methodology } from "@/components/sections/Methodology";
import { Button } from "@/components/ui/button";
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
    "image": "/og-image.jpg",
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
    }
  };

  return (
    <div className="bg-[#E7E7E7] overflow-hidden">
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
          <Pain1 />
          <Pain2 />
          <Stats />
          <Results />
          <Methodology />
          
          <CTASection
            title="Подготовка к собеседованию на Карту поляка"
            description="Тренируйтесь отвечать на вопросы консула с помощью моего AI-бота. Симуляция реального собеседования поможет чувствовать себя увереннее и повысит ваши шансы на успех."
            buttonText="Перейти к боту"
            variant="telegram"
            image="/consul.png"
            linkTo="https://t.me/polishdom_bot"
            isExternal={true}
            blank={true}
          />
          <Services />
          <FAQ />
          <CTASection
            title="ЕЖЕДНЕВНЫЕ УПРАЖНЕНИЯ И СОВЕТЫ В TELEGRAM"
            description="Изучайте польский язык и культуру с моими материалами в Telegram"
            buttonText="ПОДПИСАТЬСЯ НА КАНАЛ"
            variant="telegram"
            image="/bell.png"
            linkTo="https://t.me/polishdom"
            isExternal={true}
            blank={true}
          />
          <StudentResults />
          
          <CTASection
            title="15 СЕКРЕТОВ БЫСТРОГО ИЗУЧЕНИЯ ПОЛЬСКОГО"
            description="Я составила для вас подробный гайд, который повысит эффективность вашего обучения на 97%. Узнайте проверенные методики и секреты быстрого освоения польского языка."
            buttonText="ПОЛУЧИТЬ ЗА 0,99 ЗЛОТЫЙ (PDF)"
            variant="guide"
            image="/pdf.png"
            linkTo="/guide"
          />
          <CTASection
            title="НАЧНИТЕ ГОВОРИТЬ ПО-ПОЛЬСКИ УЖЕ ЧЕРЕЗ 1 МЕСЯЦ"
            description="На бесплатном пробном занятии: Определите свой текущий уровень, Получите персональный план обучения, Узнаете точные сроки достижения B1 и B2"
            buttonText="ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗАНЯТИЕ"
            variant="guide"
            image="/pdf.png"
          />
          
          <Footer />
        </Container>
      </main>

      
    </div>
  );
};

export default Index;
