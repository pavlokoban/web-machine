import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import NextComponentRu from './NextComponentRu';

export const metadata: Metadata = {
  title: "Разработка сайта на React/Next.JS в Киеве и Украине. Заказать сайт на фреймворке React/Next.JS под ключ!",
  description: "Создание сайтов на React / Next.js в Киеве под ключ - цена огонь 🔥 ✅ Разработка сайтов на основе крутейшей платформы Некст с уникальным дизайном и продуманным интерфейсом. Цена разработки сайта Next.JS / React.JS (Киев, Харьков, Днепр) от $7000, сроки создания от 8 недель.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/react-next-js",
    languages: {
      en: "https://web-machine.rocks/web-development/react-next-js",
      ru: "https://web-machine.rocks/ru/web-development/react-next-js",
      uk: "https://web-machine.rocks/uk/web-development/react-next-js",
    },
  },
};

const NextPageRu = () => {
  return (
    <LayoutMainRus>
  <NextComponentRu />
  </LayoutMainRus>
  );
};

export default NextPageRu;