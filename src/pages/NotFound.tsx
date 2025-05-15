import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Логируем попытку доступа
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Устанавливаем правильный HTTP-статус с помощью метатега
    document.title = "404 - Страница не найдена | PolishDom";
    
    // Создаем метатег для статуса HTTP, если его еще нет
    let metaTag = document.querySelector('meta[http-equiv="Status"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('http-equiv', 'Status');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', '404 Not Found');
    
  }, [location.pathname]);

  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern min-h-screen">
      <SEO 
        title="404 - Страница не найдена | PolishDom"
        description="К сожалению, запрашиваемая страница не найдена на сайте PolishDom"
        noindex={true}
      />
      <Container>
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center max-w-md py-12">
            <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Помилка. Не знайдено</h2>
            <p className="text-lg text-gray-600 mb-8">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            <a href="/" className="text-primary hover:text-primary/90 font-semibold text-lg">
              Вернуться на главную страницу
            </a>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default NotFound;
