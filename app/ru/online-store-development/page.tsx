import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import DevOnlineStoreRu from './DevOnlineStoreRu';

export const metadata: Metadata = {
  title: "Создание интернет-магазинов в Харькове, Киеве. Заказать разработку интернет-магазина под ключ: стоимость, этапы",
  description: "Создание интернет-магазинов под ключ от WEB-MACHINE — это разработка оптимальных решений для торговли онлайн. Примеры работ, стоимость, сроки, а также функционал и этапы создания онлайн-магазина с нуля ✅ Заказать разработку интернет-магазина в Харькове и Киеве",
  alternates: {
    canonical: "https://web-machine.rocks/ru/online-store-development",
    languages: {
      en: "https://web-machine.rocks/online-store-development",
      ru: "https://web-machine.rocks/ru/online-store-development",
      uk: "https://web-machine.rocks/uk/online-store-development",
    },
  },
};

const DevOnlineStorePageRu = () => {
  return (
    <LayoutMainRus>
  <DevOnlineStoreRu></DevOnlineStoreRu>
  </LayoutMainRus>
  );
};

export default DevOnlineStorePageRu;
