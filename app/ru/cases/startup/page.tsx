import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта для IT стартапа Rapprise",
  description: "Кейс по созданию сайта для стартапа IT компании по разработке бизнес-приложений Rapprise",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/startup",
    languages: {
      en: "https://web-machine.rocks/cases/startup",
      ru: "https://web-machine.rocks/ru/cases/startup",
      uk: "https://web-machine.rocks/uk/cases/startup",
    },
  },
};

const CasesStartupRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта для IT стартапа Rapprise</h1>
        <h4 className={''}>Кейс по созданию сайта для стартапа IT компании по разработке бизнес-приложений Rapprise</h4>
       
        <FadeInImage src="/images/portfolio/startup/startup-01.webp" alt="Кейс по созданию сайта для стартапа IT компании по разработке бизнес-приложений Rapprise" />
        <FadeInImage src="/images/portfolio/startup/startup-02.webp" alt="Кейс по созданию сайта для стартапа IT компании по разработке бизнес-приложений Rapprise" />
        <FadeInImage src="/images/portfolio/startup/startup-03.webp" alt="Кейс по созданию сайта для стартапа IT компании по разработке бизнес-приложений Rapprise" />
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesStartupRu;