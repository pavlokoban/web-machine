import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import MarketplaceComponentRu from './MarketplaceComponentRu';

export const metadata: Metadata = {
  title: "Разработка маркетплейс в Киеве и Украине: цена, сроки | Заказать маркетплейс под ключ!",
  description: "Создание маркетплейс под ключ, заказать разработку маркетплейса, торговой площадки в Киеве, Харькове (Киев, Харьков, Днепр)",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/marketplace",
    languages: {
      en: "https://web-machine.rocks/web-development/marketplace",
      ru: "https://web-machine.rocks/ru/web-development/marketplace",
      uk: "https://web-machine.rocks/uk/web-development/marketplace",
    },
  },
};

const MarketplacePageRu = () => {
  return (
    <LayoutMainRus>
  <MarketplaceComponentRu></MarketplaceComponentRu>
  </LayoutMainRus>
  );
};

export default MarketplacePageRu;
