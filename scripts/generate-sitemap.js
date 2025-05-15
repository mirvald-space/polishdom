import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Используем текущую дату
const today = new Date().toISOString().split('T')[0];

// Создаем расширенную структуру маршрутов с дополнительными метаданными
const routes = [
  { 
    path: '/', 
    changefreq: 'monthly', 
    priority: '1.0',
    image: '/hero.png',
    title: 'PolishDom - Изучение польского языка | Карта поляка | Сертификаты',
    description: 'Уроки польского языка для детей и взрослых. Подготовка к Карте поляка, экзаменам, сертификации.'
  },
  { 
    path: '/blog', 
    changefreq: 'weekly', 
    priority: '0.9',
    image: '/blog-cover.png',
    title: 'Блог PolishDom - Статьи о польском языке и культуре',
    description: 'Полезные материалы для изучения польского языка, советы по подготовке к экзаменам и культурные заметки.'
  },
  { 
    path: '/blog/10-sposobow-uczyc-sie-slowek', 
    changefreq: 'monthly', 
    priority: '0.8',
    image: '/blog/10-sposobow-uczyc-sie-slowek/cover.jpg',
    title: '10 способов учить польские слова эффективно - PolishDom',
    description: 'Эффективные методики запоминания польских слов. Проверенные способы расширения словарного запаса.'
  },
  { 
    path: '/blog/przygotowanie-do-rozmowy-karta-polaka', 
    changefreq: 'monthly', 
    priority: '0.8',
    image: '/blog/przygotowanie-do-rozmowy-karta-polaka/cover.jpg',
    title: 'Подготовка к собеседованию на Карту поляка - PolishDom',
    description: 'Советы и рекомендации для успешного прохождения интервью на получение Карты поляка.'
  },
  { 
    path: '/blog/polskie-seriale-do-nauki-jezyka', 
    changefreq: 'monthly', 
    priority: '0.8',
    image: '/blog/polskie-seriale-do-nauki-jezyka/cover.jpg',
    title: 'Польские сериалы для изучения языка - PolishDom',
    description: 'Лучшие польские сериалы, которые помогут улучшить понимание речи и расширить словарный запас.'
  },
  { 
    path: '/terms-of-service', 
    changefreq: 'yearly', 
    priority: '0.5',
    title: 'Условия использования - PolishDom',
    description: 'Правила и условия использования услуг PolishDom.'
  },
  { 
    path: '/privacy-policy', 
    changefreq: 'yearly', 
    priority: '0.5',
    title: 'Политика конфиденциальности - PolishDom',
    description: 'Политика конфиденциальности PolishDom в отношении персональных данных пользователей.'
  },
  { 
    path: '/sitemap', 
    changefreq: 'monthly', 
    priority: '0.6',
    title: 'Карта сайта - PolishDom',
    description: 'Полная структура сайта PolishDom для удобной навигации.'
  }
];

// Создаем XML файл с учетом расширенного стандарта sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                http://www.google.com/schemas/sitemap-image/1.1
                http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${routes.map(route => {
  let urlXml = `  <url>
    <loc>https://polishdom.com${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;
  
  // Добавляем информацию об изображении, если она есть
  if (route.image) {
    urlXml += `
    <image:image>
      <image:loc>https://polishdom.com${route.image}</image:loc>
      <image:title>${route.title || ''}</image:title>
      <image:caption>${route.description || ''}</image:caption>
    </image:image>`;
  }
  
  urlXml += `
  </url>`;
  return urlXml;
}).join('\n')}
</urlset>`;

// Записываем файл sitemap.xml
fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');

// Также создаем JSON файл с метаданными для использования в SSR/prerender
const metadataJson = JSON.stringify(
  routes.reduce((acc, route) => {
    acc[route.path] = {
      title: route.title,
      description: route.description,
      image: route.image,
      priority: route.priority
    };
    return acc;
  }, {}),
  null, 2
);

// Записываем файл metadata.json для использования в приложении
fs.writeFileSync(path.resolve(__dirname, '../public/metadata.json'), metadataJson);
console.log('Metadata JSON generated successfully'); 