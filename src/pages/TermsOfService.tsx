import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";

const TermsOfService: React.FC = () => {
  // Структурированные данные Schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Договор оферты | PolishDom",
    "description": "Договор оферты на услуги обучения польскому языку в школе PolishDom",
  };

  return (
    <div className="bg-[#E7E7E7] overflow-hidden">
      <SEO 
        title="Договор оферты | PolishDom"
        description="Договор оферты на услуги обучения польскому языку в школе PolishDom"
        schema={schemaData}
      />
      
      <main>
        <Container>
          <Header />
          
          <section className="bg-white rounded-[20px] max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Договор оферты</h1>
            
            <div className="prose prose-lg">
              <p className="mb-4">Настоящий документ является официальным предложением (публичной офертой) ИП "PolishDom" и содержит все существенные условия предоставления образовательных услуг.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">1. ОПРЕДЕЛЕНИЯ И ТЕРМИНЫ</h2>
              <p className="mb-4">1.1. В целях настоящей Оферты нижеприведенные термины используются в следующих значениях:</p>
              <p className="mb-4">Оферта — настоящий документ, опубликованный в сети Интернет.</p>
              <p className="mb-4">Исполнитель — ИП "PolishDom".</p>
              <p className="mb-4">Заказчик — физическое или юридическое лицо, заключившее с Исполнителем Договор на условиях, содержащихся в настоящей Оферте.</p>
              <p className="mb-4">Услуги — образовательные услуги по обучению польскому языку и подготовке к экзаменам.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">2. ПРЕДМЕТ ДОГОВОРА</h2>
              <p className="mb-4">2.1. Исполнитель обязуется оказать Заказчику образовательные услуги в соответствии с выбранной Заказчиком программой обучения, а Заказчик обязуется оплатить данные услуги.</p>
              <p className="mb-4">2.2. Сроки оказания услуг, их стоимость и порядок оплаты определяются в соответствии с действующими тарифами, размещенными на сайте Исполнителя.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">3. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h2>
              <p className="mb-4">3.1. Исполнитель обязуется:</p>
              <p className="mb-4">- Предоставить Заказчику образовательные услуги в соответствии с выбранной программой обучения;</p>
              <p className="mb-4">- Обеспечить надлежащее качество предоставляемых услуг;</p>
              <p className="mb-4">- Предоставить доступ к учебным материалам, необходимым для освоения программы.</p>
              
              <p className="mb-4">3.2. Заказчик обязуется:</p>
              <p className="mb-4">- Оплатить услуги Исполнителя в соответствии с условиями настоящего Договора;</p>
              <p className="mb-4">- Соблюдать авторские права Исполнителя на предоставляемые в процессе обучения материалы;</p>
              <p className="mb-4">- Посещать занятия в соответствии с расписанием.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">4. СТОИМОСТЬ УСЛУГ И ПОРЯДОК ОПЛАТЫ</h2>
              <p className="mb-4">4.1. Стоимость услуг определяется согласно тарифам, указанным на сайте Исполнителя.</p>
              <p className="mb-4">4.2. Оплата производится Заказчиком в порядке 100% предоплаты путем безналичного перевода денежных средств на счет Исполнителя.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">5. ОТВЕТСТВЕННОСТЬ СТОРОН</h2>
              <p className="mb-4">5.1. За неисполнение или ненадлежащее исполнение обязательств по настоящему Договору Стороны несут ответственность, предусмотренную действующим законодательством.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">6. СРОК ДЕЙСТВИЯ И ПОРЯДОК РАСТОРЖЕНИЯ ДОГОВОРА</h2>
              <p className="mb-4">6.1. Настоящий Договор вступает в силу с момента оплаты Заказчиком выбранной услуги и действует до полного исполнения Сторонами своих обязательств.</p>
              <p className="mb-4">6.2. Договор может быть расторгнут по соглашению Сторон, а также в одностороннем порядке в случаях, предусмотренных настоящим Договором и законодательством.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-4">7. РЕКВИЗИТЫ ИСПОЛНИТЕЛЯ</h2>
              <p className="mb-4">ИП "PolishDom"</p>
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

export default TermsOfService; 