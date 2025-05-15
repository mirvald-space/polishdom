import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, any>;
  canonical?: string;
  noindex?: boolean;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string;
  language?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  schema,
  canonical,
  noindex = false,
  ogType = "website",
  ogImage = "https://polishdom.com/hero.png",
  twitterCard = "summary_large_image",
  keywords = "польский язык, обучение польскому, карта поляка, сертификат, уроки польского",
  language = "ru_RU"
}) => {
  // Формируем канонический URL
  const siteUrl = "https://polishdom.com";
  let canonicalUrl = siteUrl;

  if (canonical) {
    // Нормализуем канонический URL
    // 1. Убедимся, что путь начинается с "/"
    const normalizedPath = canonical.startsWith('/') ? canonical : `/${canonical}`;
    // 2. Избегаем дублирования путей (например, /blog/blog/...)
    const cleanPath = normalizedPath.replace(/\/+/g, '/');
    // 3. Составляем полный URL
    canonicalUrl = `${siteUrl}${cleanPath}`;
  } else if (typeof window !== 'undefined') {
    // Используем текущий путь, но нормализуем его
    const normalizedPath = window.location.pathname.replace(/\/+/g, '/');
    canonicalUrl = `${siteUrl}${normalizedPath}`;
  }
  
  // Базовая SEO schema если пользовательская не предоставлена
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PolishDom",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": description,
    "sameAs": [
      "https://facebook.com/polishdom",
      "https://instagram.com/polishdom",
      "https://t.me/polishdom"
    ]
  };

  const schemaData = schema || defaultSchema;
  
  return (
    <Helmet prioritizeSeoTags>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL - важно для SEO */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Управление индексацией */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph мета-теги для социальных сетей */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="PolishDom" />
      
      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Язык и региональные настройки */}
      <meta property="og:locale" content={language} />
      <meta name="language" content="Russian" />
      
      {/* Мета-теги для мобильных устройств */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data (Schema.org) для улучшения отображения в поисковой выдаче */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
      
      {/* Дополнительные мета-теги для SEO */}
      <meta name="author" content="PolishDom" />
      <meta name="generator" content="React, Vite" />
    </Helmet>
  );
}; 