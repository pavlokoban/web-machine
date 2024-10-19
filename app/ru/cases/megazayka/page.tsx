import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта для компании по продаже товаров для детей",
  description: "Разработка сайта для компании по продаже различных товаров для детей. Данная работа заняла первое место в категории Товары и услуги для детей во Всеукраинском конкурсе веб-дизайна в 2020 году WEB AWARDS.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/megazayka",
    languages: {
      en: "https://web-machine.rocks/cases/megazayka",
      ru: "https://web-machine.rocks/ru/cases/megazayka",
      uk: "https://web-machine.rocks/uk/cases/megazayka",
    },
  },
};

const CasesMegazaykaRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта для компании по продаже товаров для детей</h1>
        <h4 className={''}>Разработка сайта для компании по продаже различных товаров для детей. Данная работа заняла первое место в категории &laquo;Товары и услуги для детей&raquo; во Всеукраинском конкурсе веб-дизайна в 2020 году WEB AWARDS.</h4>
       
        <FadeInImage src="/images/portfolio/megazayka/megazayka-01.webp" alt="Создание сайта для компании по продаже товаров для детей" />
        <FadeInImage src="/images/portfolio/megazayka/megazayka-02.webp" alt="Создание сайта для компании по продаже товаров для детей" />
        <FadeInImage src="/images/portfolio/megazayka/megazayka-03.webp" alt="Создание сайта для компании по продаже товаров для детей" />
        
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesMegazaykaRu;