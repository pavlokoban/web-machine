import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка ленгинда для автодилера Hyundai",
  description: "Кейс по разработке дизайна и верстке лендинга для официального дилера Hyunday для проведения промо кампаний онлайн.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/hyundai",
    languages: {
      en: "https://web-machine.rocks/cases/hyundai",
      ru: "https://web-machine.rocks/ru/cases/hyundai",
      uk: "https://web-machine.rocks/uk/cases/hyundai",
    },
  },
};

const CasesHyundaiRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка лендинга для дилера Hyundai</h1>
        <h4 className={''}>Дизайн и создание лендинга для официального дилера Hyunday для проведения промо кампаний</h4>
        
        <FadeInImage src="/images/portfolio/hyundai/hyundai01.webp" alt="Разработка ленгинда для автодилера Hyundai" />   
        <h2>Задача по разработке</h2>
        <p>Для официального дилера Hyundai в Украине для проведения рекламных кампаний по продаже грузовых автомобилей и продвижения услуг  в Google Ads была поставлена задача по разработке сайта.</p>

        <p>Требования к сайту:</p>
        <ul className='spoilerUlStyle'>
            <li>Мультиязычность</li>
            <li>Мобильная адаптация</li>
            <li>Яркий дизайн, совмещающий в себе фирменный стиль заказчика и бренда</li>
            <li>CTA</li>
            <li>Презентация услуг компании заказчика</li>
        </ul>

        <h2>Решение</h2>
        <p>С помощью опроса лиц, отвечающих за обслуживание грузовых перевозок на автотранспортных предприятиях Украины (выборка 10 АТП) мы определили, какая информация о потенциальном партнере необходима клиентам, и более того, в виду специфики рынка и долгосрочности взаимодействия требует внимательного изучения и длительного поиска. На основе обработанных данных определили те наиболее важные аспекты презентации заказчика как официального дилера всемирно известного бренда в Украине и путь, ведущий к началу коммуникации — заявки на обратный звонок.</p>
        <p>Всю наиболее важную информацию мы представили в прозрачном описании преимуществ предложения заказчика в стиле, совмещающем дизайн бренда и компании заказчика.</p>

        <FadeInImage src="/images/portfolio/hyundai/hyundai02.webp" alt="Разработка ленгинда для автодилера Hyundai" /> 
     
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesHyundaiRu;