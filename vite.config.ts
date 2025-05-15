import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs';

// Посты блога
const blogPosts = [
  "10-sposobow-uczyc-sie-slowek",
  "przygotowanie-do-rozmowy-karta-polaka",
  "polskie-seriale-do-nauki-jezyka"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const inputs: Record<string, string> = {
    main: path.resolve(__dirname, "index.html"),
    blog: path.resolve(__dirname, "index.html"),
    terms: path.resolve(__dirname, "index.html"),
    privacy: path.resolve(__dirname, "index.html"),
    sitemap: path.resolve(__dirname, "index.html"),
    notFound: path.resolve(__dirname, "index.html"),
  };
  
  // Добавляем посты блога
  blogPosts.forEach((slug, index) => {
    inputs[`blogPost${index}`] = path.resolve(__dirname, "index.html");
  });
  
  return {
    server: {
      host: "::",
      port: 8080,
      // Enable history API fallback to support SPA routing
      historyApiFallback: true,
    },
    plugins: [
      react(),
      {
        name: 'copy-404-page',
        writeBundle() {
          // Копируем 404.html из public в dist после сборки
          const source = path.resolve(__dirname, 'public/404.html');
          const destination = path.resolve(__dirname, 'dist/404.html');
          
          if (fs.existsSync(source)) {
            // Создаем директорию если не существует
            const dir = path.dirname(destination);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }
            
            // Копируем файл
            fs.copyFileSync(source, destination);
            console.log('404.html copied to dist/');
          } else {
            console.warn('404.html not found in public/, please create it');
          }
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Generate pre-rendered HTML files for routes
      // This helps search engines index SPA applications
      outDir: "dist",
      // Ensure HTML file copies are created for each route
      rollupOptions: {
        input: inputs,
        output: {
          // Customize output filenames to create proper directory structure for SEO
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          // Ensure output is optimized
          manualChunks: undefined
        },
      },
      // Enable SSR-friendly settings
      ssrManifest: true,
      // Использовать esbuild вместо terser для минификации
      minify: 'esbuild',
    },
  };
});
