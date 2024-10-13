import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Дизайн и разработка интернет-магазина Lamps4makeup",
  description: "Дизайн и разработка европейского интернет-магазина Lamps4makeup - создание сайта, а также SEO на этапе разработки, реализация сложных технических решений по функционалу доставки, оплаты и мультиязычности ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/lamps4makeup",
    languages: {
      en: "https://web-machine.rocks/cases/lamps4makeup",
      ru: "https://web-machine.rocks/ru/cases/lamps4makeup",
      uk: "https://web-machine.rocks/uk/cases/lamps4makeup",
    },
  },
};

const CasesLamps4makeupRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Дизайн и разработка интернет-магазина Lamps4makeup</h1>
        <h4 className={''}>Дизайн и разработка интернет-магазина Lamps4makeup. Период работы: июль-октябрь 2021 года</h4>
        
        <FadeInImage src="/images/portfolio/lamps4makeup/lamps4makeup_1.webp" alt="Дизайн и разработка интернет-магазина Lamps4makeup" />
        <FadeInImage src="/images/portfolio/lamps4makeup/lamps4makeup_2.webp" alt="Дизайн и разработка интернет-магазина Lamps4makeup" />
        <FadeInImage src="/images/portfolio/lamps4makeup/lamps4makeup_3.webp" alt="Дизайн и разработка интернет-магазина Lamps4makeup" />
        <FadeInImage src="/images/portfolio/lamps4makeup/lamps4makeup_4.webp" alt="Дизайн и разработка интернет-магазина Lamps4makeup" />
        <FadeInImage src="/images/portfolio/lamps4makeup/lamps4makeup_5.webp" alt="Дизайн и разработка интернет-магазина Lamps4makeup" />       
       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesLamps4makeupRu;