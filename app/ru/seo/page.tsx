import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import SEORus from './SEORus';

export const metadata: Metadata = {
  title: "Продвижение сайтов и раскрутка сайта в Киеве и Украине. WEB-MACHINE",
  description: "⭐ Раскрутка сайта в Киеве, SEO оптимизация и продвижение сайтов в топ поисковых систем - Google от Веб-машины. ✅ Звоните - обсудим!",
  alternates: {
    canonical: "https://web-machine.rocks/ru/seo",
    languages: {
      en: "https://web-machine.rocks/seo",
      ru: "https://web-machine.rocks/ru/seo",
      uk: "https://web-machine.rocks/uk/seo",
    },
  },
};

const SEORusPage = () => {
  return (
  <LayoutMainRus>
  <SEORus></SEORus>
</LayoutMainRus>
  );
};

export default SEORusPage;
