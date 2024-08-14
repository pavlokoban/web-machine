import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import DevComponentRus from '@/components/DevComponentRus';

export const metadata: Metadata = {
  title: "Разработка сайтов в Киеве и Украине: цена | Заказать создание сайта под ключ!",
  description: "⭐ Создание сайта в Киеве под ключ: от лендингов до масштабных проектов. ✅ Разработка сайтов на основе индивидуального проекта —  уникальный дизайн и продуманный интерфейс. Цена разработки сайта (Киев, Харьков, Днепр) от $1500, сроки создания сайта от 3 недель.",
};

const RusMain = () => {
  return (
  <LayoutMainRus>
  <DevComponentRus></DevComponentRus>
</LayoutMainRus>
  );
};

export default RusMain;
