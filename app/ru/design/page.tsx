import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import DesignComponentRu from './DesignComponentRu';

export const metadata: Metadata = {
  title: "ᐉ Дизайн сайта под ключ. Заказать редизайн, дизайн сайта в Киеве, Харькове. Днепре",
  description: "Дизайн сайта в Киеве под ключ: от лендингов до масштабных проектов. Разработка и дизайн сайтов и редизайн сайта на основе исследований, UI/UX и модных трендов. Стоимость дизайна сайта в Киеве, Харькове, Днепре от $1200, сроки от 3 недель.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/design",
    languages: {
      en: "https://web-machine.rocks/design",
      ru: "https://web-machine.rocks/ru/design",
      uk: "https://web-machine.rocks/uk/design",
    },
  },
};

const DesignPageRu = () => {
  return (
    <LayoutMainRus>
  <DesignComponentRu />
  </LayoutMainRus>
  );
};

export default DesignPageRu;
