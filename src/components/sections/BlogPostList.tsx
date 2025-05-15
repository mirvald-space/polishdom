import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

export const BlogPostList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        // Информация о доступных статьях
        const availableSlugs = [
          "10-sposobow-uczyc-sie-slowek",
          "przygotowanie-do-rozmowy-karta-polaka",
          "polskie-seriale-do-nauki-jezyka"
        ];

        const postsData = await Promise.all(
          availableSlugs.map(async (slug, index) => {
            try {
              const response = await fetch(`/blog-content/${slug}.md`);
              if (!response.ok) {
                throw new Error(`Failed to fetch blog post: ${response.status}`);
              }
              
              const mdText = await response.text();
              
              // Парсинг frontmatter
              const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
              const match = mdText.match(frontmatterRegex);
              
              if (!match) {
                throw new Error("Invalid markdown format");
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
              const excerpt = excerptMatch ? excerptMatch[1].replace(/^#+\s+.*\n/, '') : "Читайте статью полностью...";
              
              return {
                id: String(index + 1),
                title: metadata.title || "Без названия",
                date: metadata.date || new Date().toISOString().substring(0, 10),
                imageUrl: metadata.imageUrl || "/placeholder.jpg",
                slug,
                excerpt
              };
            } catch (error) {
              console.error(`Error fetching post ${slug}:`, error);
              return null;
            }
          })
        );

        const filteredPosts = postsData.filter(post => post !== null) as BlogPost[];
        // Сортировка по дате - новые в начале
        filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(filteredPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Загрузка статей...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p>Статьи не найдены</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col h-full overflow-hidden rounded-[20px]">
          <div className="h-64 overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              {formatDate(post.date)}
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">{post.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link to={`/blog/${post.slug}`}>Читать далее</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}; 