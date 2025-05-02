import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FreeResources } from "@/components/sections/FreeResources";
import { MarqueeText } from "@/components/ui/MarqueeText";

const marqueeItems = [
  { text: "Для взрослых" },
  { text: "|", type: "separator" },
  { text: "для детей" },
  { text: "|", type: "separator" },
  { text: "для Карти поляка" },
  { text: "|", type: "separator" },
  { text: "подготовка к Экзамену в восьмом классе" },
  { text: "|", type: "separator" },
  { text: "nil" },
  { text: "|", type: "separator" },
  { text: "сертификат (a1 - c1" },
  { text: "|", type: "separator" },
  { text: "matura" },
  { text: "|", type: "separator" },
  { text: "гражданство" },
  { text: "//", type: "separator" },
  { text: "для Начинающих" },
  { text: "//", type: "separator" },
  { text: "для Студентов" },
  { text: "//", type: "separator" },
  { text: "для Путешествий" },
  { text: "//", type: "separator" },
  { text: "для поддержания уровня языка" },
  { text: "//", type: "separator" },
];

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(235,240,231,1)] overflow-hidden">
      <Header />

      <main>
        <Hero />

        <MarqueeText items={marqueeItems} />

        <Features />

        <CTASection
          title="Нужна консультация"
          description="Оставь свои контакты, я с тобой свяжусь, чтобы провести консультацию"
          buttonText="Консультация (30 мин)"
        />

        <Services />

        <CTASection
          title={
            <>
              Пройдите бесплатный тест
              <br />
              на определение уровня языка
            </>
          }
          description="Оставь свои контакты, а мы с тобой свяжемся, чтобы провести консультацию"
          buttonText="Написать в телеграмм"
          variant="test"
        />

        <Testimonials />

        <CTASection
          title="Гайд к обучению"
          description="Как подойти к изучению польского, чтобы это было эффективно и легко?\nЯ составила для вас гайд, который повысит эффективность на 97%."
          buttonText="Получить бесплатно"
          variant="guide"
          image="https://cdn.builder.io/api/v1/image/assets/357bfe0bc0f0415b9faa01b415a5e466/5c5b328d67cce306e33becfd04f3bbf99c6870fa?placeholderIfAbsent=true"
        />

        <FreeResources />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
