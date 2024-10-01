import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import OpencartComponentRu from './OpencartComponentRu';

export const metadata: Metadata = {
  title: "Разработка интернет-магазинов на Opencart/OсStore в Киеве и Украине. Заказать магазин на WoOpencartrdPress под ключ!",
  description: "Создание интернет-магазинов на CMS Opencart и OсStore в Киеве под ключ - цена огонь 🔥! Модули, интеграция, доставка, оплата ✅ Разработка магазинов на основе ecommerce платформы CMS Opencart / OcStore с уникальным дизайном и продуманным интерфейсом. Цена разработки сайта CMS Opencart (Киев, Харьков, Днепр) от $2900, сроки создания магазина от 4 недель.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/opencart",
    languages: {
      en: "https://web-machine.rocks/web-development/opencart",
      ru: "https://web-machine.rocks/ru/web-development/opencart",
      uk: "https://web-machine.rocks/uk/web-development/opencart",
    },
  },
};

const OpencartPageRu = () => {
  return (
    <LayoutMainRus>
  <OpencartComponentRu />
  </LayoutMainRus>
  );
};

export default OpencartPageRu;