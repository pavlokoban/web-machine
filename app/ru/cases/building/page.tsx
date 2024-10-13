import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка сайта застройщика Витязь СтройЦентр",
  description: "Дизайн и разработка сайта для крупной строительной компании, застройщика многих строительных объектов в Украине ★★★★★",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/building",
    languages: {
      en: "https://web-machine.rocks/cases/building",
      ru: "https://web-machine.rocks/ru/cases/building",
      uk: "https://web-machine.rocks/uk/cases/building",
    },
  },
};

const CasesBuildingRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка сайта застройщика Витязь СтройЦентр</h1>
        <h4 className={''}>Разработка сайта для крупной строительной компании, застройщика многих строительных объектов в Украине, так как ТРК Дафи, здания супермаркетов: Велика Кишеня, Клас,Billa, Восторг, ТРК Украина, а также зданий для НБУ, Надра Банк и Приват Банк.</h4>
        
        <FadeInImage src="/images/portfolio/building/building-01.webp" alt="Разработка сайта застройщика" />
        <FadeInImage src="/images/portfolio/building/building-02.webp" alt="Разработка сайта застройщика" />

        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesBuildingRu;