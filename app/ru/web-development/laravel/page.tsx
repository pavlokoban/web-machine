import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import LaravelComponentRu from './LaravelComponentRu';

export const metadata: Metadata = {
  title: "Разработка на Laravel в Киеве и Украине. Заказать сайт или интернет-магазин на фреймворке Laravel под ключ!",
  description: "Создание интернет-магазинов и сайтов на PHP фрейворке Laravel в Киеве под ключ - цена огонь 🔥! Модули, интеграция, доставка, оплата ✅ Разработка сайтов и интернет-магазинов на основе платформы Ларавель с уникальным дизайном и продуманным интерфейсом. Цена разработки сайта Ларавель (Киев, Харьков, Днепр) от $7000, сроки создания от 8 недель.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/laravel",
    languages: {
      en: "https://web-machine.rocks/web-development/laravel",
      ru: "https://web-machine.rocks/ru/web-development/laravel",
      uk: "https://web-machine.rocks/uk/web-development/laravel",
    },
  },
};

const LaravelPageRu = () => {
  return (
    <LayoutMainRus>
  <LaravelComponentRu />
  </LayoutMainRus>
  );
};

export default LaravelPageRu;