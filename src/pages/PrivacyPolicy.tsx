import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";

const PrivacyPolicy: React.FC = () => {
  // Структурированные данные Schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Политика конфиденциальности | PolishDom",
    "description": "Политика конфиденциальности школы польского языка PolishDom",
  };

  return (
    <div className="bg-[#E7E7E7] overflow-hidden">
      <SEO 
        title="Политика конфиденциальности | PolishDom"
        description="Политика конфиденциальности школы польского языка PolishDom"
        schema={schemaData}
      />
      
      <main>
        <Container>
          <Header />
          
          <section className="bg-white rounded-[20px] max-w-4xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>
            
            <div className="prose prose-lg">
              <p className="mb-4">Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта и услуг PolishDom.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
              <p className="mb-4">1.1. Настоящая Политика конфиденциальности применяется к отношениям, связанным с обработкой персональных данных, осуществляемой ИП "PolishDom".</p>
              <p className="mb-4">1.2. Используя сайт и услуги PolishDom, вы даете согласие на обработку ваших персональных данных в соответствии с данной Политикой.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. СОБИРАЕМАЯ ИНФОРМАЦИЯ</h2>
              <p className="mb-4">2.1. Мы можем собирать следующие категории персональных данных:</p>
              <p className="mb-4">- Контактная информация (имя, фамилия, электронный адрес, номер телефона);</p>
              <p className="mb-4">- Информация об образовании и знании польского языка;</p>
              <p className="mb-4">- Платежная информация;</p>
              <p className="mb-4">- Информация о пользовании нашим сайтом (cookies, IP-адрес, данные о посещениях).</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. ЦЕЛИ СБОРА И ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
              <p className="mb-4">3.1. Мы обрабатываем ваши персональные данные в следующих целях:</p>
              <p className="mb-4">- Предоставление образовательных услуг;</p>
              <p className="mb-4">- Обработка платежей;</p>
              <p className="mb-4">- Коммуникация с пользователями;</p>
              <p className="mb-4">- Улучшение качества услуг;</p>
              <p className="mb-4">- Маркетинговые цели (с вашего согласия).</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. ХРАНЕНИЕ И ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
              <p className="mb-4">4.1. Мы принимаем необходимые и достаточные организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования и иных неправомерных действий.</p>
              <p className="mb-4">4.2. Срок хранения персональных данных определяется целями их обработки и требованиями законодательства.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ</h2>
              <p className="mb-4">5.1. Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением следующих случаев:</p>
              <p className="mb-4">- Если это необходимо для оказания услуг (например, платежным системам);</p>
              <p className="mb-4">- В случаях, предусмотренных законодательством;</p>
              <p className="mb-4">- Для защиты наших прав и интересов.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. ИСПОЛЬЗОВАНИЕ COOKIES</h2>
              <p className="mb-4">6.1. Наш сайт использует cookies для улучшения пользовательского опыта и сбора аналитической информации.</p>
              <p className="mb-4">6.2. Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на функциональность сайта.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. ПРАВА ПОЛЬЗОВАТЕЛЕЙ</h2>
              <p className="mb-4">7.1. В соответствии с законодательством вы имеете право:</p>
              <p className="mb-4">- Получать информацию об обработке ваших персональных данных;</p>
              <p className="mb-4">- Требовать уточнения, блокирования или удаления ваших персональных данных;</p>
              <p className="mb-4">- Отозвать свое согласие на обработку персональных данных;</p>
              <p className="mb-4">- Обжаловать действия или бездействие оператора персональных данных.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">8. ИЗМЕНЕНИЕ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h2>
              <p className="mb-4">8.1. Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Новая редакция Политики вступает в силу с момента ее размещения на сайте.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">9. КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
              <p className="mb-4">По вопросам, связанным с обработкой персональных данных, вы можете обращаться:</p>
              <p className="mb-4">Email: polishdom.info@gmail.com</p>
              
              <p className="mt-8 text-gray-600">Последнее обновление: {new Date().toLocaleDateString()}</p>
            </div>
          </section>
          
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default PrivacyPolicy; 