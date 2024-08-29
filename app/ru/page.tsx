import * as React from 'react';
import Head from 'next/head';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import MainComponentRus from '@/components/MainComponentRus';

export const metadata: Metadata = {
  title: "Разработка сайтов, веб-приложений от дизайна до рекламы - WEB-MACHINE",
  description: "Создание сайтов - от проектирования и дизайна - до разработки и продвижение от компании WEB-MACHINE",
  alternates: {
    canonical: "https://web-machine.rocks/ru/",
    languages: {
      en: "https://web-machine.rocks/",
      ru: "https://web-machine.rocks/ru/",
      uk: "https://web-machine.rocks/uk/",
    },
  },
};

const RusMain = () => {
  return (
  <LayoutMainRus>
  <MainComponentRus></MainComponentRus>
</LayoutMainRus>
  );
};

export default RusMain;
