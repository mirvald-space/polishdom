import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy"
}) => {
  // Проверяем расширение файла
  const extension = src.split('.').pop()?.toLowerCase();
  const isWebpSupported = extension !== 'webp';
  
  // Формируем srcset для разных разрешений
  const srcset = isWebpSupported 
    ? `${src} 1x, ${src.replace(`.${extension}`, `@2x.${extension}`)} 2x`
    : undefined;
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      srcSet={srcset}
      decoding="async"
    />
  );
}; 