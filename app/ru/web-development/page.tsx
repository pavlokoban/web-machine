import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import DevComponentRus from './DevComponentRus';

export const metadata: Metadata = {
  title: "Разработка сайтов в Киеве и Украине: цена | Заказать создание сайта под ключ!",
  description: "⭐ Создание сайта в Киеве под ключ: от лендингов до масштабных проектов. ✅ Разработка сайтов на основе индивидуального проекта —  уникальный дизайн и продуманный интерфейс. Цена разработки сайта (Киев, Харьков, Днепр) от $1500, сроки создания сайта от 3 недель.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development",
    languages: {
      en: "https://web-machine.rocks/web-development",
      ru: "https://web-machine.rocks/ru/web-development",
      uk: "https://web-machine.rocks/uk/web-development",
    },
  },
};

const RusMain = () => {
  return (
    <LayoutMainRus>
  <DevComponentRus />
  </LayoutMainRus>
  );
};

export default RusMain;