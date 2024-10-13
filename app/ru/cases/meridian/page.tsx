import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание нишевого маркетплейс MeridianNurse",
  description: "Создание сайта для агрокомпании ООО Слобожанская промышленная компания: фирменный стиль, разработка сайта на Wordpress ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/meridian",
    languages: {
      en: "https://web-machine.rocks/cases/meridian",
      ru: "https://web-machine.rocks/ru/cases/meridian",
      uk: "https://web-machine.rocks/uk/cases/meridian",
    },
  },
};

const CasesMeridianRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка нишевого маркетплейс MeridianNurse</h1>
        <h4 className={''}>Создание нишевого маркетплейс для заказчика из США MeridianNurse по поиску работы и размещения вакансий для медсестер и сиделок в 3 штатах.</h4>
        
        <FadeInImage src="/images/portfolio/meridian/meridian-01.webp" alt="Разработка нишевого маркетплейс MeridianNurse" />
        <FadeInImage src="/images/portfolio/meridian/meridian-02.webp" alt="Разработка нишевого маркетплейс MeridianNurse" />
        <FadeInImage src="/images/portfolio/meridian/meridian-03.webp" alt="Разработка нишевого маркетплейс MeridianNurse" />
  
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesMeridianRu;