import * as React from 'react';
import Head from 'next/head';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import AdsComponentRu from './AdsComponentRu';

export const metadata: Metadata = {
  title: "Контекстная реклама Google в Киеве: услуги настройки и ведения PPC, WEB-MACHINE",
  description: "Комплексная контекстная реклама в Киеве и Украине: заказать настройку и ведение контекстной рекламы, а также таргет: Google Ads, Facebook Ads от WEB-MACHINE",
  alternates: {
    canonical: "https://web-machine.rocks/ru/ads",
    languages: {
      en: "https://web-machine.rocks/ads",
      ru: "https://web-machine.rocks/ru/ads",
      uk: "https://web-machine.rocks/uk/ads",
    },
  },
};

const AdsPageRu = () => {
  return (
  <LayoutMainRus>
  <AdsComponentRu />
</LayoutMainRus>
  );
};

export default AdsPageRu;
