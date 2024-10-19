import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка интернет-магазина одежды Джинсовик",
  description: "Кейс по дизайну и разработке интернет-магазина одежды на Opencart. Проработка мобильной адаптации, ускорение, бэкенд и фронтенд работы",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/jinsovik",
    languages: {
      en: "https://web-machine.rocks/cases/jinsovik",
      ru: "https://web-machine.rocks/ru/cases/jinsovik",
      uk: "https://web-machine.rocks/uk/cases/jinsovik",
    },
  },
};

const CasesJinsovikRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка интернет-магазина одежды Джинсовик</h1>
        <h4 className={''}>Дизайн и разработка интернет-магазина для украинской компании по продаже одежды - Джинсовик. Период работы: декабрь 2020 года - февраль 2021 года</h4>
       
        <FadeInImage src="/images/portfolio/jinsovik/jinsovik-01.webp" alt="Разработка интернет-магазина одежды" />
        <FadeInImage src="/images/portfolio/jinsovik/jinsovik-02.webp" alt="Разработка интернет-магазина одежды" />
        <FadeInImage src="/images/portfolio/jinsovik/jinsovik-03.webp" alt="Разработка интернет-магазина одежды" />
        <FadeInImage src="/images/portfolio/jinsovik/jinsovik-04.webp" alt="Разработка интернет-магазина одежды" />
        <FadeInImage src="/images/portfolio/jinsovik/jinsovik-05.webp" alt="Разработка интернет-магазина одежды" />
        <FadeInImage src="/images/portfolio/jinsovik/jinsovik-06.webp" alt="Разработка интернет-магазина одежды" />
       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesJinsovikRu;