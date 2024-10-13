import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Дизайн и создание медицинского сайта для МЦ Молекула",
  description: "Дизайн и создание медицинского сайта для МЦ Молекула - создание сайта, а также SEO на этапе разработки, а также разработка сайта с учетом медицинской тематики и медицинского маркетинга ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/molekula",
    languages: {
      en: "https://web-machine.rocks/cases/molekula",
      ru: "https://web-machine.rocks/ru/cases/molekula",
      uk: "https://web-machine.rocks/uk/cases/molekula",
    },
  },
};

const CasesMolekulaRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Дизайн и создание медицинского сайта для МЦ Молекула</h1>
        <h4 className={''}>Дизайн и разработка сайта для МЦ Молекула. Период работы: август-октябрь 2021 года</h4>
        
        <FadeInImage src="/images/portfolio/molekula/molekula-01.webp" alt="Дизайн и создание медицинского сайта для МЦ Молекула" />
        <FadeInImage src="/images/portfolio/molekula/molekula-02.webp" alt="Дизайн и создание медицинского сайта для МЦ Молекула" />
        <FadeInImage src="/images/portfolio/molekula/molekula-03.webp" alt="Дизайн и создание медицинского сайта для МЦ Молекула" />
        <FadeInImage src="/images/portfolio/molekula/molekula-04.webp" alt="Дизайн и создание медицинского сайта для МЦ Молекула" />
        <FadeInImage src="/images/portfolio/molekula/molekula-05.webp" alt="Дизайн и создание медицинского сайта для МЦ Молекула" />
        <FadeInImage src="/images/portfolio/molekula/molekula-06.webp" alt="Дизайн и создание медицинского сайта для МЦ Молекула" />

        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesMolekulaRu;