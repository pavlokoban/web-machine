import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта транспортной компании и агрегатора билетов",
  description: "Создание сайта для Всеукраинского автобусного перевозчика BUS-365: продажа билетов онлайн, интеграция с CRM и SEO ",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/bus365",
    languages: {
      en: "https://web-machine.rocks/cases/bus365",
      ru: "https://web-machine.rocks/ru/cases/bus365",
      uk: "https://web-machine.rocks/uk/cases/bus365",
    },
  },
};

const CasesBus365Ru = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта транспортной компании и агрегатора билетов</h1>
        <h4 className={''}>Создание сайта для Всеукраинского автобусного перевозчика BUS-365: продажа билетов онлайн, интеграция с CRM и SEO</h4>
       
        <FadeInImage src="/images/portfolio/bus365/bus365-01.webp" alt="Создание сайта транспортной компании и агрегатора билетов" />
        <h2>Задача</h2>
        <p>Кейс по разработке сайта, а также дизайна и фирменного стиля всеукраинского автобусного перевозчика BUS-365.</p>
        <p>В составе работ: разработка дизайна, разработка сайта под ключ, разработка e-commerce фукнционала регистрации и покупки билетов онлайн, интеграция с Liqpay, интеграция с CRM Biletion Office: программой автоматизации и учета пассажирских перевозок, SEO оптимизация.</p>
        <FadeInImage src="/images/portfolio/bus365/bus365-02.webp" alt="Создание сайта транспортной компании и агрегатора билетов" />

        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesBus365Ru;