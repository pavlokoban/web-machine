import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка интернет-магазина Modiva на Yii",
  description: "Кейс по редизайну и разработке интернет-магазина одежды на фреймворке Yii. Проработка мобильной адаптации, ускорение, бэкенд и фронтенд работы",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/modiva",
    languages: {
      en: "https://web-machine.rocks/cases/modiva",
      ru: "https://web-machine.rocks/ru/cases/modiva",
      uk: "https://web-machine.rocks/uk/cases/modiva",
    },
  },
};

const CasesModivaRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка интернет-магазина Modiva на Yii</h1>
        <h4 className={''}>Редизайн и разработка интернет-магазина одежды на фреймворке Yii. Перейти на сайт: <a rel="nofollow noreferrer noopener" href="https://modiva.com.ua/">https://modiva.com.ua/</a></h4>
        <br></br>
        <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto border-36"
        >
          <source src="/images/portfolio/modiva/modiva-01.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
       
        <FadeInImage src="/images/portfolio/modiva/modiva-01.webp" alt="Разработка интернет-магазина Modiva на Yii" />
        <FadeInImage src="/images/portfolio/modiva/modiva-02.webp" alt="Разработка интернет-магазина Modiva на Yii" />
        <FadeInImage src="/images/portfolio/modiva/modiva-03.webp" alt="Разработка интернет-магазина Modiva на Yii" />
        <FadeInImage src="/images/portfolio/modiva/modiva-04.webp" alt="Разработка интернет-магазина Modiva на Yii" />
        <FadeInImage src="/images/portfolio/modiva/modiva-05.webp" alt="Разработка интернет-магазина Modiva на Yii" />
       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesModivaRu;