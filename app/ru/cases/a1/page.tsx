import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка сайта для студии визуализации Pohorilyi & Partners",
  description: "Разработка сайта для одной из ведущих студий архитектурной визуализации, которая работает для клиентов из более чем 50 стран мира и получает престижные международные награды",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/a1",
    languages: {
      en: "https://web-machine.rocks/cases/a1",
      ru: "https://web-machine.rocks/ru/cases/a1",
      uk: "https://web-machine.rocks/uk/cases/a1",
    },
  },
};

const CasesA1Ru = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка сайта для студии визуализации Pohorilyi & Partners</h1>
        <h4 className={''}>Разработка сайта для одной из ведущих студий архитектурной визуализации, которая работает для клиентов из более чем 50 стран мира и получает престижные международные награды.</h4>
       
        <FadeInImage src="/images/portfolio/a1/a1-01.webp" alt="Разработка сайта для студии визуализации" />
        <FadeInImage src="/images/portfolio/a1/a1-02.webp" alt="Разработка сайта для студии визуализации" />

        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesA1Ru;