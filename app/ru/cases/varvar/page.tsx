import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка сайта и дизайн интернет-магазина VAR VAR",
  description: "Разработка сайта и дизайн интернет-магазина VAR VAR - создание сайта, а также SEO на этапе разработки, реализация сложных технических решений по функционалу доставки, оплаты и мультиязычности ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/varvar",
    languages: {
      en: "https://web-machine.rocks/cases/varvar",
      ru: "https://web-machine.rocks/ru/cases/varvar",
      uk: "https://web-machine.rocks/uk/cases/varvar",
    },
  },
};

const CasesVarvarRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка сайта и дизайн интернет-магазина VAR VAR</h1>
        <h4 className={''}>Дизайн и разработка сайта VAR VAR. Период работы: июль-октябрь 2021 года</h4>
        
        <FadeInImage src="/images/portfolio/varvar/varvar-01.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина VAR VAR" />
        <FadeInImage src="/images/portfolio/varvar/varvar-02.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина VAR VAR" />
        <FadeInImage src="/images/portfolio/varvar/varvar-03.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина VAR VAR" />
        <FadeInImage src="/images/portfolio/varvar/varvar-04.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина VAR VAR" />
        <FadeInImage src="/images/portfolio/varvar/varvar-05.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина VAR VAR" />
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesVarvarRu;