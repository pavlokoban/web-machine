import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание сайта для Zplay — международной IT компании из Китая",
  description: "Кейс по разработке сайта для компании Zplay",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/zplay",
    languages: {
      en: "https://web-machine.rocks/cases/zplay",
      ru: "https://web-machine.rocks/ru/cases/zplay",
      uk: "https://web-machine.rocks/uk/cases/zplay",
    },
  },
};

const CasesZplayRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание сайта для международного разработчика игр ZPLAY</h1>
        <h4 className={''}>Разработка сайта для крупнейшей китайской компании разработчиков игр для мобильных телефонов ZPLAY (Beijing) Information Technology Co., Ltd., в число известных разработок которой входят Will Hero, PopStar!, Sharpen Blades, Rusty Blower 3D и многие другие, входящие в ТОП инсталляций в мировом рейтинге Google Play Market и App Store. Перейти на сайт: <a rel="nofollow noreferrer noopener" href="https://www.zplay.com/">https://www.zplay.com/</a></h4>
        
        <FadeInImage src="/images/portfolio/zplay/Zplay2.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <h2>Состав работ:</h2>
        <ul className='spoilerUlStyle'>
            <li>дизайн-исследование</li>
            <li>UI/UX исследование</li>
            <li>прототипирование</li>
            <li>дизайн</li>
            <li>верстка</li>
            <li>JS</li>
            <li>создание эффектов</li>
            <li>создание видео</li>
            <li>разработка сайта</li>
        </ul>
        <p>Во всеукраинском конкурсе WEB AWARDS за 2019 наша работа по созданию сайта для компании Zplay заняла 2 место в категории IT и Интернет</p>
        <FadeInImage src="/images/portfolio/zplay/Zplay3.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <FadeInImage src="/images/portfolio/zplay/Zplay4.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <FadeInImage src="/images/portfolio/zplay/Zplay8.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <FadeInImage src="/images/portfolio/zplay/Zplay6.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <FadeInImage src="/images/portfolio/zplay/Zplay7.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <FadeInImage src="/images/portfolio/zplay/Zplay9.webp" alt="Кейс по разработке сайта для компании Zplay" />
        <FadeInImage src="/images/portfolio/zplay/Zplay1.webp" alt="Кейс по разработке сайта для компании Zplay" />
       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesZplayRu;