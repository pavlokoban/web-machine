import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import SaasComponentRu from './SaasComponentRu';

export const metadata: Metadata = {
  title: "Разработка сайтов на конструкторах Wix, Tilda, Shopify, Webflow в Киеве и Украине: цена | Заказать под ключ!",
  description: "Создание сайтов на конструкторе Wix, Tilda, Shopify, Webflow в Киеве под ключ ✅ Разработка SAAS сайтов под ключ —  уникальный дизайн и продуманный интерфейс. Цена разработки SAAS (Киев, Харьков, Днепр)",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/saas",
    languages: {
      en: "https://web-machine.rocks/web-development/saas",
      ru: "https://web-machine.rocks/ru/web-development/saas",
      uk: "https://web-machine.rocks/uk/web-development/saas",
    },
  },
};

const SaasPageRu = () => {
  return (
    <LayoutMainRus>
  <SaasComponentRu />
  </LayoutMainRus>
  );
};

export default SaasPageRu;
