import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Редизайн сайта для сервиса монетизации Yumi",
  description: "Дизайн и разработка сайта для китайской компании, предоставляющей сервис монетизации мобильных игр ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/yumi",
    languages: {
      en: "https://web-machine.rocks/cases/yumi",
      ru: "https://web-machine.rocks/ru/cases/yumi",
      uk: "https://web-machine.rocks/uk/cases/yumi",
    },
  },
};

const CasesYumiRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Редизайн сайта для сервиса монетизации Yumi</h1>
        <h4 className={''}>Разработка сайта для китайской компании, предоставляющей сервис монетизации мобильных игр.</h4>
        
        <FadeInImage src="/images/portfolio/yumi/yumi-01.webp" alt="Редизайн сайта для сервиса монетизации Yumi" />
        <FadeInImage src="/images/portfolio/yumi/yumi-02.webp" alt="Редизайн сайта для сервиса монетизации Yumi" />
        <FadeInImage src="/images/portfolio/yumi/yumi-03.webp" alt="Редизайн сайта для сервиса монетизации Yumi" />
        <FadeInImage src="/images/portfolio/yumi/yumi-04.webp" alt="Редизайн сайта для сервиса монетизации Yumi" />
      
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesYumiRu;