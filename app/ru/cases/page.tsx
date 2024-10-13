import * as React from 'react';
import Head from 'next/head';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases",
    languages: {
      en: "https://web-machine.rocks/cases",
      ru: "https://web-machine.rocks/ru/cases",
      uk: "https://web-machine.rocks/uk/cases",
    },
  },
};

const CasesRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Наши работы</h1>
        <h4 className={''}>Оставьте заявку через форму, либо через указанные контактные данные и мы будем рады ответить Вам по интересующим вопросам!
        </h4>
        
        <div className='space20'></div>
        <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/ru/cases/okko"
          imgSrc="/images/portfolio/okko_cover_01-min.png"
          imgAlt="Дизайн, техподдержка и развитие сайта сети OKKO"
          caseText="Кейс"
          stackArray={["Design", "Support", "Web-development"]}
          titleText="Дизайн, техподдержка и развитие сайта сети OKKO"
        />

        <AnimatedLink 
          href="/ru/cases/hyundai"
          imgSrc="/images/portfolio/hyundai-cover-5.jpg"
          imgAlt="Дизайн и разработка сайта дилера Hyundai Truck and Bus"
          caseText="Case"
          stackArray={["React.js", "Design", "Web-development"]}
          titleText="Дизайн и разработка сайта дилера Hyundai Truck and Bus"
        />


        <AnimatedLink 
          href="/ru/cases/zplay"
          imgSrc="/images/portfolio/zplay-cover-1.jpg"
          imgAlt="Дизайн и разработка сайта для разработка игр Zplay (Китай, Пекин)"
          caseText="Кейс"
          stackArray={["Worpdress", "Design", "Figma", "Web-development"]}
          titleText="Дизайн и разработка сайта для разработка игр Zplay (Китай, Пекин)"
        />


        <AnimatedLink 
          href="/ru/cases/legalgrounds"
          imgSrc="/images/portfolio/lg-cover-1.jpg"
          imgAlt="Дизайн и разработка международного иммиграционного сервиса LegalGrounds"
          caseText="Кейс"
          stackArray={["Wordpress", "Design", "Web-development"]}
          titleText="Дизайн и разработка международного иммиграционного сервиса LegalGrounds"
        />

        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
        <AnimatedLink 
          href="/ru/cases/carglass"
          imgSrc="/images/portfolio/carglass-cover-1.jpg"
          imgAlt="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Кейс"
          stackArray={["Opencart", "Design", "SEO", "Web-development"]}
          titleText="Дизайн и разработка сайта лоя Carglass® (Belron® групп) - мирового лидера производства и замены стекол для автомобилей"
        />
       
       <AnimatedLink 
          href="/ru/cases/roganska"
          imgSrc="/images/portfolio/roganska-cover-3.jpg"
          imgAlt="Дизайн и создание сайта для бренда воды Роганская"
          caseText="Кейс"
          stackArray={["Wordpress", "Design", "SEO", "Web-development"]}
          titleText="Дизайн и создание сайта для бренда воды Роганская"
        />


        <AnimatedVideoLink 
          href="/ru/seo-cost-calculator"
          videoSrcWebm="/movie/SEOCostCalculatorVideo.webm"
          caseText="Сервис"
          stackArray={["Typescript", "Node.js", "React.js", "SEO", "Web-development"]}
          titleText="SEO калькулятор онлайн: сервис оценки инвестиций в онлайн маркетинг"
        />

        <AnimatedLink 
          href="/ru/cases/hited"
          imgSrc="/images/portfolio/haited-cover-2.jpg"
          imgAlt="Дизайн и создание интернет-магазина Hited"
          caseText="Кейс"
          stackArray={["Opencart", "Design", "Web-development"]}
          titleText="Дизайн и создание интернет-магазина Haited"
        />
      
        </div>
        

        </div>
       
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesRu;
