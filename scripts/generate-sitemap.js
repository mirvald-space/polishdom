const fs = require('fs');
const path = require('path');

// Используем текущую дату 2025-05-15
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog/10-sposobow-uczyc-sie-slowek', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog/przygotowanie-do-rozmowy-karta-polaka', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog/polskie-seriale-do-nauki-jezyka', changefreq: 'monthly', priority: '0.8' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.5' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.5' },
  { path: '/sitemap', changefreq: 'monthly', priority: '0.5' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://polishdom.com${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully'); 