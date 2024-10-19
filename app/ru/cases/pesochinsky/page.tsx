import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Создание и продвижение строительного сайта, разработка лендинга для жилого дома",
  description: "Кейс по разработке строительного сайта, разработка лендинга для жилого дома, в составе работ SEO, дизайн, программирование",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/pesochinsky",
    languages: {
      en: "https://web-machine.rocks/cases/pesochinsky",
      ru: "https://web-machine.rocks/ru/cases/pesochinsky",
      uk: "https://web-machine.rocks/uk/cases/pesochinsky",
    },
  },
};

const CasesPesochinRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Создание и продвижение лендинга проекта новостройки</h1>
        <h4 className={''}>Кейс по разработке строительного сайта, разработка лендинга для жилого дома, в составе работ SEO, дизайн, программирование</h4>
       
        <FadeInImage src="/images/portfolio/pesochinsky/pesochinsky-01.webp" alt="Создание и продвижение строительного сайта, разработка лендинга для жилого дома" />
        <h2>Позиционирование</h2>
        <p>PesochinSky - многоэтажный монолитно-каркасный жилой дом, построенный в перспективном экологически чистом п. Песочин, который является частью Харьковской агломерации.</p>
        <h2>Дизайн и SVG</h2>
        <p>Для реализации интерактивности и полноценного взаимодействия между посетителем и сайтом, было разработано 2 концептуальных макета - ракурс здания и ракурс типового этажа, которые были интегрированы с маской SVG-разметки, которая позволяла бы при наведении на этаж или планировании предоставить краткую информацию о наличии квартир. , их площади и стоимости, а также при нажатии перейти на раздел с более подробной информацией.</p>
        <div className='desc-flex-mob-block'>
            <div className='desc-col-2-50-mob-1-100'>
        <FadeInImage src="/images/portfolio/pesochinsky/pesochinsky-02-1.webp" alt="Создание и продвижение строительного сайта, разработка лендинга для жилого дома" />
        </div>
        <div className='desc-col-2-50-mob-1-100'>
        <FadeInImage src="/images/portfolio/pesochinsky/pesochinsky-03-1.webp" alt="Создание и продвижение строительного сайта, разработка лендинга для жилого дома" />
        </div>
        </div>
        <h2>SEO и PPC</h2>
        <p>Целью всего этого проекта было создание презентационной площадки нового жилого дома с целью продажи квартир. Для эффективного продвижения строительного сайта необходимо учесть ряд особенностей. Среди прочего, это работы по ускорению сайта, учет большого процента посещений с мобильных устройств, а также высокая конкуренция в сфере продаж первичной недвижимости.</p>
        <p>Нами был проведен маркетинговый аудит ниши, собрана конкурентная карта по целевым сегментам рынка, собрано и внедрено семантическое ядро, разработаны рекомендации для проведение онлайн рекламной кампании, а также офлайн рекламы - макеты билбордов, плакатов, буклетов и т.д.</p>
        <p>Скорость по Google PageSpeed ​​на момент сдачи сайта составляла: 92/100.</p>
        <FadeInImage src="/images/portfolio/pesochinsky/pesochinsky-04.webp" alt="Создание и продвижение строительного сайта, разработка лендинга для жилого дома" />
        
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesPesochinRu;