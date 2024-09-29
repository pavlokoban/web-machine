import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import LandingComponentRu from './LandingComponentRu';

export const metadata: Metadata = {
  title: "Разработка лендинга в Киеве и Украине: цена | Заказать landing page под ключ!",
  description: "Создание лендинга в Киеве под ключ ✅ Разработка landing page под ключ —  уникальный дизайн и продуманный интерфейс. Цена разработки лендингов (Киев, Харьков, Днепр)",
  alternates: {
    canonical: "https://web-machine.rocks/ru/landing",
    languages: {
      en: "https://web-machine.rocks/landing",
      ru: "https://web-machine.rocks/ru/landing",
      uk: "https://web-machine.rocks/uk/landing",
    },
  },
};

const LandingPageRu = () => {
  return (
    <LayoutMainRus>
  <LandingComponentRu></LandingComponentRu>
  </LayoutMainRus>
  );
};

export default LandingPageRu;
