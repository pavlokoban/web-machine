import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка сайта для агрокомпании",
  description: "Создание сайта для агрокомпании ООО Слобожанская промышленная компания: фирменный стиль, разработка сайта на Wordpress ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/agro",
    languages: {
      en: "https://web-machine.rocks/cases/agro",
      ru: "https://web-machine.rocks/ru/cases/agro",
      uk: "https://web-machine.rocks/uk/cases/agro",
    },
  },
};

const CasesAgroRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка сайта для агрокомпании</h1>
        <h4 className={''}>Создание сайта для агрокомпании ООО Слобожанская промышленная компания.</h4>
        
        <FadeInImage src="/images/portfolio/agro/agro-01.webp" alt="Разработка сайта для агрокомпании" />
        <FadeInImage src="/images/portfolio/agro/agro-02.webp" alt="Разработка сайта для агрокомпании" />
        <FadeInImage src="/images/portfolio/agro/agro-03.webp" alt="Разработка сайта для агрокомпании" />
        <FadeInImage src="/images/portfolio/agro/agro-04.webp" alt="Разработка сайта для агрокомпании" />
        <FadeInImage src="/images/portfolio/agro/agro-05.webp" alt="Разработка сайта для агрокомпании" />
        <FadeInImage src="/images/portfolio/agro/agro-06.webp" alt="Разработка сайта для агрокомпании" />
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesAgroRu;