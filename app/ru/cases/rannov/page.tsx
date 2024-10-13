import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка сайта и дизайн интернет-магазина VAR VAR",
  description: "Дизайн и разработка интернет-магазина для украинского бренда одежды RANNOV ★★★★★ Переходите и смотрите другие наши кейсы по разработке и дизайну интернет-магазинов на Opencart.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/rannov",
    languages: {
      en: "https://web-machine.rocks/cases/rannov",
      ru: "https://web-machine.rocks/ru/cases/rannov",
      uk: "https://web-machine.rocks/uk/cases/rannov",
    },
  },
};

const CasesRannovRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание интернет-магазина одежды RANNOV</h1>
        <h4 className={''}>Дизайн и разработка интернет-магазина для украинского бренда одежды RANNOV. Период работы: декабрь 2020 года - февраль 2021 года</h4>
        
        <FadeInImage src="/images/portfolio/rannov/rannov-01.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-02.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-03.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-04.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-05.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-06.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-07.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        <FadeInImage src="/images/portfolio/rannov/rannov-08.webp" alt="Дизайн и разработка интернет-магазина Разработка сайта и дизайн интернет-магазина Rannov" />
        
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesRannovRu;