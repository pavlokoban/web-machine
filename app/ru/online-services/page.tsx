// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import ImageRow from '@/components/imagerow/ImageRow';

export const metadata: Metadata = {
    title: "Бесплатные онлайн сервисы для интернет-маркетологов",
    description: "Бесплатные онлайн сервисы для интернет-маркетологов: компания WEB-MACHINE разрабатывает свои собственные сервисы для digital-маркетологов: SEO калькулятор, онлайн калькулятор разработки, стратегия интернет-маркетинга",
    alternates: {
      canonical: "https://web-machine.rocks/ru/services/",
      languages: {
        en: "https://web-machine.rocks/services/",
        ru: "https://web-machine.rocks/ru/services/",
        uk: "https://web-machine.rocks/uk/services/",
      },
    },
  };

const ServicesPageRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <h1 className={'unbounded'}>Бесплатные онлайн сервисы для интернет-маркетологов</h1>
        <p style={{marginTop:'10px'}}>Разрабатываем онлайн сервисы для интернет-маркетологов, фрилансеров и предпринимателей</p>
        <div className='desc-flex-mob-block'>
        <div className='desc-col-2-50-mob-1-100'>

        <AnimatedLink 
          href="/ru/development-cost-calculator"
          imgSrc="/images/portfolio/estimator-image.jpg"
          imgAlt="Оценка стоимости сайта онлайн: эстимейт на разработку проекта"
          caseText="DEV сервис"
          stackArray={["Typescript", "Node.js", "React.js", "Разработка"]}
          titleText="Оценка стоимости сайта онлайн: эстимейт на разработку проекта"
        />
        
        </div>
        <div className='desc-col-2-50-mob-1-100'>

        <AnimatedVideoLink 
          href="/ru/seo-cost-calculator"
          videoSrcWebm="/movie/SEOCostCalculatorVideo.webm"
          caseText="SEO сервис"
          stackArray={["Typescript", "Node.js", "React.js", "SEO", "Разработка"]}
          titleText="SEO калькулятор онлайн: сервис оценки инвестиций в онлайн маркетинг"
        />
        </div>
           
        </div>
        <p>Сервисы постоянно дорабатываются и улучшаются, поэтому любые рекомендации пользователей как по технической, так и по информационной составляющей для нас крайне важны.</p>
        <p>Замечания и предложения по улучшению работы онлайн-сервисов — отправляйте на почтовый ящик: webmachinerocks@gmail.com.</p>
        <p>Заранее благодарим!</p>

          <div className={'desc-space-120-mob-20'}></div>

          <ImageRow />
          <div className='space20'></div>
        <hr></hr>
        <ContactFormRus />
    </div>
    </LayoutMainRus>
    </>
  );
};

export default ServicesPageRu;