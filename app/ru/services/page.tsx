import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ServicesRu from './ServicesRu';

export const metadata: Metadata = {
  title: "Цена на продвижение сайта и разработку, сроки ⌚ и стоимость SEO в Харькове, Киеве",
  description: "Цена на продвижение сайтов, а также стоимость создания сайта в Киеве и Харькове. Изучите стоимость наших услуг по раскрутке сайтов, цены на SEO оптимизацию и разработку сайтов. Сроки и схемы работы 💥 Гарантии результатов!",
  alternates: {
    canonical: "https://web-machine.rocks/ru/services",
    languages: {
      en: "https://web-machine.rocks/services",
      ru: "https://web-machine.rocks/ru/services",
      uk: "https://web-machine.rocks/uk/services",
    },
  },
};

const ServicesPageRu = () => {
  return (
    <LayoutMainRus>
  <ServicesRu></ServicesRu>
  </LayoutMainRus>
  );
};

export default ServicesPageRu;
