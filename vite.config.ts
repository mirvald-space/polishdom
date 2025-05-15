import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

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
