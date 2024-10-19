import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Редизайн сайта официального дилера Toyota",
  description: "Кейс по редизайну сайта для официального дилера Toyota в 2018 году",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/toyota",
    languages: {
      en: "https://web-machine.rocks/cases/toyota",
      ru: "https://web-machine.rocks/ru/cases/toyota",
      uk: "https://web-machine.rocks/uk/cases/toyota",
    },
  },
};

const CasesToyotaRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Редизайн сайта официального дилера Toyota</h1>
        <h4 className={''}>Редизайн сайта для автосалона официального дилера ТМ Toyota.</h4>
       
        <FadeInImage src="/images/portfolio/toyota/toyota-01.webp" alt="Редизайн сайта официального дилера Toyota" />
        <FadeInImage src="/images/portfolio/toyota/toyota-02.webp" alt="Редизайн сайта официального дилера Toyota" />

       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesToyotaRu;