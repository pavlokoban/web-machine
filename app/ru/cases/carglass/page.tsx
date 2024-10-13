import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта для международного бренда Carglass®",
  description: "Кейс по разработке разделов сайта для компании ОККО, техническая поддержка, а также услуги дизайна",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/carglass",
    languages: {
      en: "https://web-machine.rocks/cases/carglass",
      ru: "https://web-machine.rocks/ru/cases/carglass",
      uk: "https://web-machine.rocks/uk/cases/carglass",
    },
  },
};

const CasesCarglassRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта для международного бренда Carglass®</h1>
        <h4 className={''}>Создание сайта для бренда Carglass® - международного брендаподразделения Belron® Group - мирового лидера в сфере ремонта и замены автомобильных стекол. Период работы: август-сентябрь 2020 года. Перейти на сайт: <a rel="nofollow noreferrer noopener" href="https://carglass.ua/">https://carglass.ua/</a></h4>
        
        <FadeInImage src="/images/portfolio/carglass/case_carglass_01.webp" alt="Создание сайта для международного бренда Carglass®" />   
        <FadeInImage src="/images/portfolio/carglass/case_carglass_02.webp" alt="Создание сайта для международного бренда Carglass®" /> 
        <FadeInImage src="/images/portfolio/carglass/case_carglass_03.webp" alt="Создание сайта для международного бренда Carglass®" /> 
        <FadeInImage src="/images/portfolio/carglass/case_carglass_04.webp" alt="Создание сайта для международного бренда Carglass®" /> 
        <FadeInImage src="/images/portfolio/carglass/case_carglass_05.webp" alt="Создание сайта для международного бренда Carglass®" /> 
        <FadeInImage src="/images/portfolio/carglass/case_carglass_06.webp" alt="Создание сайта для международного бренда Carglass®" /> 
       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesCarglassRu;