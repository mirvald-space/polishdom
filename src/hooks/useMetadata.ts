import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  priority?: string;
}

interface AllMetadata {
  [path: string]: PageMetadata;
}

/**
 * Хук для получения метаданных страницы на основе текущего пути
 */
export const useMetadata = () => {
  const location = useLocation();
  const [metadata, setMetadata] = useState<AllMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        // Предполагаем, что metadata.json находится в корне сайта
        const response = await fetch('/metadata.json');
        if (!response.ok) {
          throw new Error('Не удалось загрузить метаданные');
        }
        const data = await response.json();
        setMetadata(data);
        setLoading(false);
      } catch (err) {
        console.error('Ошибка загрузки метаданных:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      }
    };

    fetchMetadata();
  }, []);

  // Получаем путь без query параметров
  const path = location.pathname;
  
  // Если метаданные загружены, ищем соответствующую запись или возвращаем данные для главной страницы
  const currentPageMetadata = !loading && metadata 
    ? (metadata[path] || metadata['/']) 
    : null;

  return {
    metadata: currentPageMetadata,
    allMetadata: metadata,
    loading,
    error
  };
};

export default useMetadata; 