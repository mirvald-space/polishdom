import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NotFound from "./NotFound";

interface BlogPostMetadata {
  title: string;
  date: string;
  author: string;
  imageUrl: string;
}

interface BlogPostData extends BlogPostMetadata {
  content: string;
}

// Список доступных слагов для статей
const availableSlugs = [
  "10-sposobow-uczyc-sie-slowek",
  "przygotowanie-do-rozmowy-karta-polaka",
  "polskie-seriale-do-nauki-jezyka"
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<{
    title: string;
    date: string;
    content: string;
    imageUrl: string;
    excerpt: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPost() {
      if (!slug) {
        setError("Пост не найден");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/blog-content/${slug}.md`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError("Пост не найден");
            console.error(`Blog post not found: ${slug}`);
          } else {
            setError("Ошибка загрузки поста");
            console.error(`Failed to fetch blog post: ${response.status}`);
          }
          setLoading(false);
          return;
        }
        
        const mdText = await response.text();
        
        // Парсинг frontmatter
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = mdText.match(frontmatterRegex);
        
        if (!match) {
          setError("Неверный формат поста");
          setLoading(false);
          return;
        }
        
        const frontmatterText = match[1];
        const content = match[2];
        
        // Создаем объект метаданных
        const metadata: any = {};
        const frontmatterLines = frontmatterText.split('\n');
        frontmatterLines.forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim();
          }
        });
        
        // Извлекаем первый абзац для использования в качестве excerpt
        const excerptMatch = content.trim().match(/^(.*?)(?:\n\n|\n##|$)/);
        const excerpt = excerptMatch ? excerptMatch[1].replace(/^#+\s+.*\n/, '') : ""; 
        
        setPost({
          title: metadata.title || "Без названия",
          date: metadata.date || new Date().toISOString().substring(0, 10),
          content,
          imageUrl: metadata.imageUrl || "/placeholder.jpg",
          excerpt
        });
        
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching blog post:`, error);
        setError("Ошибка загрузки поста");
        setLoading(false);
      }
    }

    fetchBlogPost();
  }, [slug]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  if (loading) {
    return (
      <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern min-h-screen">
        <Container>
          <Header />
          <div className="py-8 text-center">
            <p>Загрузка...</p>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }

  if (error || !post) {
    return <NotFound />;
  }
  
  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title={`${post.title} - PolishDom`}
        description={post.excerpt || "Статья о польском языке и культуре от PolishDom"}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.imageUrl ? [post.imageUrl] : [],
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "PolishDom"
          }
        }}
      />
      
      <main>
        <Container>
          <Header />
          <article className="py-8 prose prose-slate max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>PolishDom</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              
              {post.imageUrl && (
                <div className="my-8 rounded-[20px] overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
            
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />
                ),
                h2: ({ node, ...props }) => (
                  <h2 {...props} className="text-2xl font-semibold mt-10 mb-4" />
                ),
                h3: ({ node, ...props }) => (
                  <h3 {...props} className="text-xl font-semibold mt-8 mb-3" />
                ),
                ul: ({ node, ...props }) => (
                  <ul {...props} className="list-disc pl-6 my-4" />
                ),
                ol: ({ node, ...props }) => (
                  <ol {...props} className="list-decimal pl-6 my-4" />
                ),
                li: ({ node, ...props }) => (
                  <li {...props} className="mb-2" />
                ),
                p: ({ node, ...props }) => (
                  <p {...props} className="my-4 leading-relaxed" />
                ),
                img: ({ node, ...props }) => (
                  <img {...props} className="my-6 rounded-md max-w-full h-auto" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default BlogPost; 