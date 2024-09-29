import * as React from 'react';
import Head from 'next/head';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import SEOOnDevelopmentComponentRu from './SEOOnDevelopmentComponentRu';

export const metadata: Metadata = {
  title: "SEO на этапе разработки. ➫ Оптимизируйте сайт во время разработки, Киев, Украина",
  description: "SEO-оптимизация сайта на этапе разработки позволяет вовремя сделать необходимые для продвижения внедрения и сэкономить деньги и время",
  alternates: {
    canonical: "https://web-machine.rocks/ru/seo-on-development",
    languages: {
      en: "https://web-machine.rocks/seo-on-development",
      ru: "https://web-machine.rocks/ru/seo-on-development",
      uk: "https://web-machine.rocks/uk/seo-on-development",
    },
  },
};

const SEOOnDevelopmentPageRu = () => {
  return (
  <LayoutMainRus>
  <SEOOnDevelopmentComponentRu />
</LayoutMainRus>
  );
};

export default SEOOnDevelopmentPageRu;
