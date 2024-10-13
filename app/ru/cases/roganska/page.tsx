import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Дизайн и разработка сайта для бренда Роганская вода",
  description: "Дизайн и разработка сайта для бренда Роганская вода® - одного из крупнейших производителей бутылированой воды в Украине. В состав создания сайта входило прототипирование, дизайн, верстка и программирование ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/roganska",
    languages: {
      en: "https://web-machine.rocks/cases/roganska",
      ru: "https://web-machine.rocks/ru/cases/roganska",
      uk: "https://web-machine.rocks/uk/cases/roganska",
    },
  },
};

const CasesRoganskaRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Дизайн и разработка сайта для бренда Роганская вода</h1>
        <h4 className={''}>Дизайн и разработка сайта для бренда Роганская вода. Период работы: июль-октябрь 2021 года. Перейти на сайт: <a rel="nofollow noreferrer noopener" href="https://roganska.com/">сайт завода Роганская вода</a></h4>
        
        <FadeInImage src="/images/portfolio/roganska/rog-01.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" />   
        <FadeInImage src="/images/portfolio/roganska/rog-02.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" />
        <FadeInImage src="/images/portfolio/roganska/rog-03.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" /> 
        <FadeInImage src="/images/portfolio/roganska/rog-04.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" /> 
        <FadeInImage src="/images/portfolio/roganska/rog-05.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" /> 
        <FadeInImage src="/images/portfolio/roganska/rog-06.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" /> 
        <FadeInImage src="/images/portfolio/roganska/rog-07.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" /> 
        <FadeInImage src="/images/portfolio/roganska/rog-08.webp" alt="Дизайн и разработка сайта для бренда Роганская вода" />  
     
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesRoganskaRu;