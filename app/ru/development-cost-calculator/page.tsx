// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import Link from 'next/link';
import OfficeLocationsRus from '@/components/officelocations/OfficeLocationsRus';
import CostEstimationRu from '@/components/estimation/EstimationRu';


export const metadata: Metadata = {
    title: "Оценка стоимости разработки сайта онлайн — калькулятор цены и стоимости создания сайта в Украине",
    description: "⭐ Сколько стоит разработка сайта? Эстимейт и калькулятор цены на создание сайта и стоимость в Украине (Киев, Харьков, Одесса, Днепр)? Ответ здесь ➤ Эстимейт калькулятор разработки сайта онлайн.",
    alternates: {
      canonical: "https://web-machine.rocks/ru/development-cost-calculator/",
      languages: {
        en: "https://web-machine.rocks/development-cost-calculator/",
        ru: "https://web-machine.rocks/ru/development-cost-calculator/",
        uk: "https://web-machine.rocks/uk/development-cost-calculator/",
      },
    },
  };


const DevelopmentCostCalculatorRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30 withoutPaddingTop">
        <CostEstimationRu />
        <div className='space20'></div>
        <hr></hr>
        <div className='space20'></div>
        <p>Сервис оценки стоимости создания сайта (онлайн калькулятор сметы разработки) позволяет получить примерную вилку цен с учетом стоимости часов, небоходимых программных модулей и технологического стека</p>
        <div className='space20'></div>
        </div>

        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <ContactFormRus />
        </div>
      </LayoutMainRus>
    </>
  );
};

export default DevelopmentCostCalculatorRu;