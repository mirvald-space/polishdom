import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import { BlogPostList } from "@/components/sections/BlogPostList";

const Blog: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Блог - статьи о польском языке",
    "description": "Статьи и советы по изучению польского языка, подготовке к экзаменам и культуре Польши",
    "url": "https://polishdom.ru/blog",
    "author": {
      "@type": "Person",
      "name": "PolishDom"
    }
  };

  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title="Блог - Статьи о польском языке и культуре"
        description="Полезные статьи об изучении польского языка, подготовке к экзаменам, жизни в Польше и польской культуре от PolishDom."
        schema={schemaData}
      />
      
      <main>
        <Container>
          <Header />
          <div className="py-8">
            <h1 className="text-4xl font-bold mb-8">Блог</h1>
            <BlogPostList />
          </div>
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default Blog; 