import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  schema?: Record<string, unknown>;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title = "PolishDom - Изучение польского языка | Карта поляка | Сертификаты",
  description = "Уроки польского языка для детей и взрослых. Подготовка к Карте поляка, экзаменам, сертификации. 6 лет опыта в обучении польскому языку.",
  canonicalUrl = "https://polishdom.com",
  image = "/og-image.jpg",
  schema,
  children,
}) => {
  const siteName = "PolishDom";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Основные метатеги */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {children}
    </Helmet>
  );
}; 