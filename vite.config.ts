import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
      input: {
        main: path.resolve(__dirname, "index.html"),
        // You can add specific routes to pre-render here
        // blog: path.resolve(__dirname, "index.html"), 
      },
    },
  },
}));
