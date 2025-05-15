import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// Функция для определения, нужно ли использовать гидратацию или создание корня
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

if (rootElement.hasChildNodes()) {
  // Если элемент уже содержит дочерние узлы, используем гидратацию
  // Это происходит при предварительном рендеринге с помощью react-snap
  hydrateRoot(
    rootElement,
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
} else {
  // Обычный рендеринг для режима разработки
  createRoot(rootElement).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

// Для поддержки react-snap
// @ts-ignore
if (typeof window !== 'undefined' && window.snapSaveState) {
  // @ts-ignore
  window.snapSaveState();
}
