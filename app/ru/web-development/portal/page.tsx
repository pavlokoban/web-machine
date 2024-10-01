import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import PortalComponentRu from './PortalComponentRu';

export const metadata: Metadata = {
  title: "Разработка интернет-портала в Киеве и Украине: цена, сроки | Заказать веб портал под ключ!",
  description: "Создание интернет-порталов под ключ, заказать разработку веб-портала, торговой площадки в Киеве, Харькове (Киев, Харьков, Днепр) по выгодной цене на базе высокопроизводительной платформы",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/portal",
    languages: {
      en: "https://web-machine.rocks/web-development/portal",
      ru: "https://web-machine.rocks/ru/web-development/portal",
      uk: "https://web-machine.rocks/uk/web-development/portal",
    },
  },
};

const PortalPageRu = () => {
  return (
    <LayoutMainRus>
  <PortalComponentRu />
  </LayoutMainRus>
  );
};

export default PortalPageRu;
