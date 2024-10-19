import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта клиники эстетической косметологии Aesthetta",
  description: "Кейс по разработке сайта клиники эстетической медицины Aesthetta для клиента из США. ",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/aesthetta",
    languages: {
      en: "https://web-machine.rocks/cases/aesthetta",
      ru: "https://web-machine.rocks/ru/cases/aesthetta",
      uk: "https://web-machine.rocks/uk/cases/aesthetta",
    },
  },
};

const CasesAesthettaRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта клиники эстетической косметологии Aesthetta</h1>
        <h4 className={''}>Кейс по разработке сайта клиники эстетической медицины &laquo;Aesthetta&raquo; для клиента из США. Компания представлена медицинским центром в Нью-Джерси. Работы: маркетинговый аудит, дизайн, создание сайта, UI/UX, SEO на этапе разработки.</h4>
       
        <FadeInImage src="/images/portfolio/aesthetta/aesthetta-01.webp" alt="Создание сайта клиники эстетической косметологии Aesthetta" />
        <FadeInImage src="/images/portfolio/aesthetta/aesthetta-02.webp" alt="Создание сайта клиники эстетической косметологии Aesthetta" />
        <FadeInImage src="/images/portfolio/aesthetta/aesthetta-03.webp" alt="Создание сайта клиники эстетической косметологии Aesthetta" />
        <FadeInImage src="/images/portfolio/aesthetta/aesthetta-04.webp" alt="Создание сайта клиники эстетической косметологии Aesthetta" />
        <FadeInImage src="/images/portfolio/aesthetta/aesthetta-05.webp" alt="Создание сайта клиники эстетической косметологии Aesthetta" />
        
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesAesthettaRu;