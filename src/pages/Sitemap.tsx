import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SEO } from "@/components/layout/SEO";
import { useMetadata } from "@/hooks/useMetadata";

// Интерфейс для группы страниц
interface SitemapGroup {
  title: string;
  paths: Array<{
    path: string;
    title: string;
    description: string;
  }>;
}

const Sitemap: React.FC = () => {
  // Используем текущую дату
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const { allMetadata, loading } = useMetadata();
  const [groups, setGroups] = useState<SitemapGroup[]>([]);
  
  useEffect(() => {
    if (!allMetadata || loading) return;
    
    // Группировка страниц
    const mainPages: SitemapGroup = {
      title: "Главные страницы",
      paths: []
    };
    
    const blogPages: SitemapGroup = {
      title: "Статьи блога",
      paths: []
    };
    
    const legalPages: SitemapGroup = {
      title: "Правовые документы",
      paths: []
    };
    
    // Сортируем пути по приоритету
    Object.entries(allMetadata)
      .sort((a, b) => {
        const priorityA = parseFloat(a[1].priority || '0');
        const priorityB = parseFloat(b[1].priority || '0');
        return priorityB - priorityA;
      })
      .forEach(([path, metadata]) => {
        const pageData = {
          path,
          title: metadata.title,
          description: metadata.description
        };
        
        if (path.startsWith('/blog') && path !== '/blog') {
          blogPages.paths.push(pageData);
        } else if (path === '/' || path === '/blog' || path === '/sitemap') {
          mainPages.paths.push(pageData);
        } else if (path.includes('terms') || path.includes('privacy')) {
          legalPages.paths.push(pageData);
        } else {
          mainPages.paths.push(pageData);
        }
      });
    
    setGroups([mainPages, blogPages, legalPages].filter(group => group.paths.length > 0));
  }, [allMetadata, loading]);
  
  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title="Карта сайта - PolishDom"
        description={`Навигационная карта сайта PolishDom для удобного поиска информации (обновлено: ${currentDate})`}
        canonical="/sitemap"
      />
      
      <Container>
        <Header />
        <main className="py-12">
          <h1 className="text-3xl font-bold mb-8">Карта сайта</h1>
          <p className="text-sm text-gray-500 mb-8">Последнее обновление: {currentDate}</p>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-pulse">Загрузка структуры сайта...</div>
            </div>
          ) : (
            <>
              {groups.map((group, index) => (
                <div className="mb-10" key={index}>
                  <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
                  <ul className="space-y-4">
                    {group.paths.map((page, idx) => (
                      <li key={idx} className="border-l-4 border-gray-200 pl-4 py-2 hover:border-blue-500 transition-colors">
                        <Link to={page.path} className="text-blue-600 hover:underline block text-lg">
                          {page.title}
                        </Link>
                        <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
          
          <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-2">Для поисковых систем</h2>
            <p className="text-gray-600 mb-2">Если вы хотите увидеть техническую XML-карту сайта, используйте следующую ссылку:</p>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
            >
              sitemap.xml
            </a>
          </div>
        </main>
        <Footer />
      </Container>
    </div>
  );
};

export default Sitemap; 