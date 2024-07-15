'use client';

import React, { useEffect, useRef } from 'react';
import dataArticles from "../utils/dataArticles";
import ServicesItem from './ServicesItem';

const MainComponent = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keywords = 
    ['SEO', 'PPC', 'JS', 'SCSS', 'Next.js', 'Laravel', 'PHP', 'React', 'Wordpress', 'Design', 
    'Figma', 'Nuxt', 'TypeScript', 'Vue', 'Yii', 'Branding', 'HTML5', 'SASS', 'Mockup', 'Prototype', 
    'B2B', 'B2C', 'CTA', 'Strategy', 'Google', 'GoogleAds', 'Web', 'Marketing', 'Angular',
    'Video', 'Creative', 'Style', 'Identity', 'Baidu'];
    const container = textContainerRef.current;

    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const createFallingText = (text: string) => {
      const span = document.createElement('span');
      span.textContent = text;
      span.className = 'falling-text';
      span.style.left = `${Math.random() * (width - 50)}px`; // Уменьшение слипания текста
      span.style.animationDuration = `${15 + Math.random() * 20}s`; // Сделать падение медленнее
      container.appendChild(span);

      let x = 0, y = 0;
      let moveX = (Math.random() - 0.5) * 2;
      let moveY = Math.random();

      const mouseMoveHandler = (e: MouseEvent) => {
        const rect = span.getBoundingClientRect();
        const distX = e.clientX - rect.left - x;
        const distY = e.clientY - rect.top - y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance < 50) {
          moveX = distX * 0.05;
          moveY = distY * 0.05;
        }
      };

      const animate = () => {
        x += moveX;
        y += moveY;
        span.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      };

      container.addEventListener('mousemove', mouseMoveHandler);
      animate();

      span.addEventListener('animationend', () => {
        span.remove();
        container.removeEventListener('mousemove', mouseMoveHandler);
        createFallingText(text); // Recreate text to continue falling
      });
    };

    // Увеличить количество элементов в два раза и убрать задержку
    keywords.forEach((keyword) => {
      for (let i = 0; i < 2; i++) {
        createFallingText(keyword);
      }
    });

    return () => {
      container.innerHTML = ''; // Clean up on unmount
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={textContainerRef} id="hero-container"></div>
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100 h-screen">
        <h1 className={'unbounded centered-texts'}>Welcome to the Web Machine agency</h1>
        <h3 className={'centered-texts'}>United technologies of success</h3>
        <p className={'centered-texts'}>text</p>
      </div>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10">
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
          {dataArticles.articles.map((article) => (
            <ServicesItem
              article={article}
              key={article.slug}
            >
            </ServicesItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
