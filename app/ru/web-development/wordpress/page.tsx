import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import WordpressComponentRu from './WordpressComponentRu';

export const metadata: Metadata = {
  title: "Разработка сайтов на WordPress в Киеве и Украине: цена | Заказать сайта на WordPress под ключ!",
  description: "⭐ Создание сайта на CMS WordPress в Киеве под ключ: от лендингов до масштабных проектов. ✅ Разработка сайтов на основе мировой платформы #1 CMS WordPress с уникальным дизайном и продуманным интерфейсом. Цена разработки сайта CMS WordPress (Киев, Харьков, Днепр) от $2600, сроки создания сайта от 4 недель.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/wordpress",
    languages: {
      en: "https://web-machine.rocks/web-development/wordpress",
      ru: "https://web-machine.rocks/ru/web-development/wordpress",
      uk: "https://web-machine.rocks/uk/web-development/wordpress",
    },
  },
};

const WordpressPageRu = () => {
  return (
    <LayoutMainRus>
  <WordpressComponentRu />
  </LayoutMainRus>
  );
};

export default WordpressPageRu;