import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка мебельного интернет-магазина Мебликс",
  description: "Кейс по редизайну и разработке интернет-магазина для мебельной компании Мебликс на базе Opencart в 2018 году",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/meblix",
    languages: {
      en: "https://web-machine.rocks/cases/meblix",
      ru: "https://web-machine.rocks/ru/cases/meblix",
      uk: "https://web-machine.rocks/uk/cases/meblix",
    },
  },
};

const CasesMeblixRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка мебельного интернет-магазина Мебликс</h1>
        <h4 className={''}>Редизайн и разработка интернет-магазина для мебельной компании Мебликс на базе Opencart.</h4>
       
        <FadeInImage src="/images/portfolio/meblix/meblix-01.webp" alt="Редизайн и разработка интернет-магазина для мебельной компании Мебликс на базе Opencart" />
        <FadeInImage src="/images/portfolio/meblix/meblix-02.webp" alt="Редизайн и разработка интернет-магазина для мебельной компании Мебликс на базе Opencart" />
        <FadeInImage src="/images/portfolio/meblix/meblix-03.webp" alt="Редизайн и разработка интернет-магазина для мебельной компании Мебликс на базе Opencart" />

       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesMeblixRu;