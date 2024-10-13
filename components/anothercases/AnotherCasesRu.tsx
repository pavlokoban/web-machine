import * as React from 'react';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';

const AnotherCasesRu = () => {
  return (
    <>
        <h2 className={'unbounded'}>Смотреть другие наши работы</h2>
        
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
      
        </div>
        

        </div>

</>
  );
};

export default AnotherCasesRu;