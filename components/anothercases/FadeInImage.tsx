"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FadeInImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt, className = '' }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target); // Останавливаем наблюдение после появления
          }
        });
      },
      {
        threshold: 0.05, // Изображение считается видимым, когда 5% его области видны
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      className={`fade-in border-36 paddingTopBottom20 ${className}`}
    />
  );
};

export default FadeInImage;
