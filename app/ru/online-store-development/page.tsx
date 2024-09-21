import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import DevOnlineStoreRu from './DevOnlineStoreRu';

export const metadata: Metadata = {
  title: "Разработка сайтов в Киеве и Украине: цена | Заказать создание сайта под ключ!",
  description: "⭐ Создание сайта в Киеве под ключ: от лендингов до масштабных проектов. ✅ Разработка сайтов на основе индивидуального проекта —  уникальный дизайн и продуманный интерфейс. Цена разработки сайта (Киев, Харьков, Днепр) от $1500, сроки создания сайта от 3 недель.",
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
