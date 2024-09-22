import * as React from 'react';
import Head from 'next/head';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import SEOOnlineStoreRu from './SEOOnlineStoreRu';

export const metadata: Metadata = {
  title: "Продвижение интернет-магазина — сроки и цены на SEO раскрутку (Киев, Харьков)",
  description: "⭐ Особенности раскрутки ecommerce проектов — ✅ методы, советы, приёмы. Какие гарантии, сроки и цены на SEO продвижение интернет-магазина в Киеве и Харькове? Заказать раскрутку интернет-магазина и выведение в ТОП.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/seo-online-store",
    languages: {
      en: "https://web-machine.rocks/seo-online-store",
      ru: "https://web-machine.rocks/ru/seo-online-store",
      uk: "https://web-machine.rocks/uk/seo-online-store",
    },
  },
};

const SEOOnlineStoreRuPage = () => {
  return (
  <LayoutMainRus>
  <SEOOnlineStoreRu></SEOOnlineStoreRu>
</LayoutMainRus>
  );
};

export default SEOOnlineStoreRuPage;
