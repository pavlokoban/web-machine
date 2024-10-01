import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import AuctionComponentRu from './AuctionComponentRu';

export const metadata: Metadata = {
  title: "Разработка интернет-аукциона в Киеве и Украине: цена, сроки | Заказать онлайн аукцион под ключ!",
  description: "Создание сайта аукциона под ключ, заказать разработку интернет-магазина с функционей ставок, лотов и аукциона в Киеве, Харькове (Киев, Харьков, Днепр)",
  alternates: {
    canonical: "https://web-machine.rocks/ru/web-development/auction",
    languages: {
      en: "https://web-machine.rocks/web-development/auction",
      ru: "https://web-machine.rocks/ru/web-development/auction",
      uk: "https://web-machine.rocks/uk/web-development/auction",
    },
  },
};

const AuctionPageRu = () => {
  return (
    <LayoutMainRus>
        <AuctionComponentRu />
    </LayoutMainRus>
  );
};

export default AuctionPageRu;
