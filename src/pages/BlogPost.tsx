import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogPost() {
      if (!slug || !availableSlugs.includes(slug)) {
        setLoading(false);
        setError(true);
        return;
      }

      try {
        const response = await fetch(`/blog-content/${slug}.md`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.status}`);
        }
        
        const mdText = await response.text();
        
        // Парсинг frontmatter и контента
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = mdText.match(frontmatterRegex);
        
        if (!match) {
          throw new Error("Invalid markdown format");
        }
        
        const frontmatterText = match[1];
        const content = match[2];
        
        // Парсинг frontmatter
        const metadata: any = {};
        const frontmatterLines = frontmatterText.split('\n');
        frontmatterLines.forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim();
          }
        });
        
        setPost({
          title: metadata.title,
          date: metadata.date,
          author: metadata.author,
          imageUrl: metadata.imageUrl,
          content
        });
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(true);
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
      <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
        <Container>
          <Header />
          <div className="py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Загрузка...</h1>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
        <Container>
          <Header />
          <div className="py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
            <p className="mb-8">Запрашиваемая статья не существует или была удалена.</p>
            <Button asChild>
              <Link to="/blog">Вернуться к списку статей</Link>
            </Button>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <div className="bg-[#FDFDFD] overflow-hidden bg-dot-pattern">
      <SEO 
        title={`${post.title} | Блог PolishDom`}
        description={`Статья о польском языке и культуре: ${post.title}`}
        schema={schemaData}
      />
      
      <main>
        <Container>
          <Header />
          
          <div className="py-8">
            <Button variant="outline" asChild className="mb-6">
              <Link to="/blog" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Вернуться к списку статей
              </Link>
            </Button>
            
            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg overflow-hidden mb-6 aspect-video">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center text-muted-foreground mb-8">
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default BlogPost; 