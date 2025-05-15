import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import { BlogPostList } from "@/components/sections/BlogPostList";
import { useMetadata } from "@/hooks/useMetadata";

const Blog: React.FC = () => {
  const { metadata } = useMetadata();
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": metadata?.title || "Блог - статьи о польском языке",
    "description": metadata?.description || "Статьи и советы по изучению польского языка, подготовке к экзаменам и культуре Польши",
    "url": "https://polishdom.com/blog",
    "author": {
      "@type": "Person",
      "name": "PolishDom"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PolishDom",
      "logo": {
        "@type": "ImageObject",
        "url": "https://polishdom.com/logo.png"
      }
    },
    "image": metadata?.image ? `https://polishdom.com${metadata.image}` : "https://polishdom.com/blog-cover.png",
    "datePublished": "2025-01-01T00:00:00+00:00",
    "dateModified": new Date().toISOString()
  };

  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title={metadata?.title || "Блог - Статьи о польском языке и культуре"}
        description={metadata?.description || "Полезные статьи об изучении польского языка, подготовке к экзаменам, жизни в Польше и польской культуре от PolishDom."}
        schema={schemaData}
        canonical="/blog"
        ogImage={metadata?.image || "/blog-cover.png"}
        ogType="blog"
        keywords="польский язык, блог о польском, изучение польского, статьи о польском, культура Польши, жизнь в Польше"
      />
      
      <main>
        <Container>
          <Header />
          <div className="py-8">
            <h1 className="text-4xl font-bold mb-8">Блог</h1>
            <p className="text-gray-600 mb-8 max-w-3xl">
              В нашем блоге вы найдете полезные материалы для изучения польского языка: советы для начинающих, грамматические нюансы, 
              рекомендации по подготовке к экзаменам и тесту на Карту поляка, а также интересные факты о польской культуре.
            </p>
            <BlogPostList />
          </div>
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default Blog; 