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
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  schema,
  canonical,
  noindex = false,
  ogType = "website",
  ogImage = "https://polishdom.com/hero.png",
  twitterCard = "summary_large_image"
}) => {
  // Формируем канонический URL
  const siteUrl = "https://polishdom.com";
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;
  
  // Получаем текущий путь для автоматического определения канонического URL
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const autoCanonical = `${siteUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL - важно для SEO */}
      <link rel="canonical" href={fullCanonicalUrl || autoCanonical} />
      
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
      <meta property="og:url" content={fullCanonicalUrl || autoCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PolishDom" />
      
      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Язык и региональные настройки */}
      <meta property="og:locale" content="ru_RU" />
      <meta name="language" content="Russian" />
      
      {/* Мета-теги для мобильных устройств */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data (Schema.org) для улучшения отображения в поисковой выдаче */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Дополнительные мета-теги для SEO */}
      <meta name="author" content="PolishDom" />
      <meta name="generator" content="React, Vite" />
    </Helmet>
  );
}; 