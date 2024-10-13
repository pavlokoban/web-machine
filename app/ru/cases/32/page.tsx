import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта стоматологического сервиса в Украине",
  description: "Разработка сайта и дизайн стоматологического сервиса - создание сайта, а также SEO на этапе разработки, реализация сложных технических решений по функционалу и мультиязычности ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/32",
    languages: {
      en: "https://web-machine.rocks/cases/32",
      ru: "https://web-machine.rocks/ru/cases/32",
      uk: "https://web-machine.rocks/uk/cases/32",
    },
  },
};

const Cases32Ru = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта стоматологического сервиса в Украине</h1>
        <h4 className={''}>Разработка сайта для стоматологического сервиса по поиску актуальной информации о клиниках и докторах в Украине</h4>
        
        <FadeInImage src="/images/portfolio/32/32-01.webp" alt="Создание сайта стоматологического сервиса в Украине" />
        <FadeInImage src="/images/portfolio/32/32-02.webp" alt="Создание сайта стоматологического сервиса в Украине" />
      
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default Cases32Ru;