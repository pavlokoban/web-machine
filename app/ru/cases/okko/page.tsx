import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Дизайн, техподдержка и разработка разделов на сайте сети ОККО",
  description: "Кейс по разработке разделов сайта для компании ОККО, техническая поддержка, а также услуги дизайна",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/okko",
    languages: {
      en: "https://web-machine.rocks/cases/okko",
      ru: "https://web-machine.rocks/ru/cases/okko",
      uk: "https://web-machine.rocks/uk/cases/okko",
    },
  },
};

const CasesOkkoRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Дизайн, техподдержка сайта и разработка раздела для сети ОККО</h1>
        <h4 className={''}>Дизайн и разработка раздела на сайт сети ОККО. Период работы: апрель 2021 года. Перейти на сайт: <a rel="nofollow noreferrer noopener" href="https://okko.ua/">https://okko.ua/</a></h4>
        
        <FadeInImage src="/images/portfolio/okko/okko_frame_00.webp" alt="Дизайн, техподдержка и разработка разделов на сайте сети ОККО" />   
        <FadeInImage src="/images/portfolio/okko/okko_frame_01.webp" alt="Дизайн, техподдержка и разработка разделов на сайте сети ОККО" />
        <FadeInImage src="/images/portfolio/okko/okko_frame_02.webp" alt="Дизайн, техподдержка и разработка разделов на сайте сети ОККО" />
        <FadeInImage src="/images/portfolio/okko/okko_frame_03.webp" alt="Дизайн, техподдержка и разработка разделов на сайте сети ОККО" />
        <FadeInImage src="/images/portfolio/okko/okko_frame_04.webp" alt="Дизайн, техподдержка и разработка разделов на сайте сети ОККО" />
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesOkkoRu;