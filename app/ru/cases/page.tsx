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
        
        <div className='desc-flex-mob-block'>
        <div className='desc-col-2-50-mob-1-100'>
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/okko_cover_01-min.png"
          imgAlt="Design, technical support and development of sections on the website of the OKKO gas station network"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Design, technical support and development of sections on the website of the OKKO national gas station network"
        />


      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_carglass_cover.jpeg"
          imgAlt="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
        />
        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_roganska_cover.png"
          imgAlt="Creation of a website for the Roganska mineral water - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Roganska mineral water"
        />

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_legal_cover.webm"
          videoSrcMp4="/movie/case_legal_cover.mp4"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_zplay_cover.webm"
          videoSrcMp4="/movie/case_zplay_cover.mp4"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

      <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_carglass.webm"
          videoSrcMp4="/movie/case_carglass.mp4"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
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
