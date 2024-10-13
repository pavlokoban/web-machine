// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import ImageRow from '@/components/imagerow/ImageRow';

export const metadata: Metadata = {
    title: "Карта сайта - WEB-MACHINE",
    description: "Полное меню всех разделов и страниц, доступных на сайте нашей компании WEB-MACHINE",
    alternates: {
      canonical: "https://web-machine.rocks/ru/sitemap/",
      languages: {
        en: "https://web-machine.rocks/sitemap/",
        ru: "https://web-machine.rocks/ru/sitemap/",
        uk: "https://web-machine.rocks/uk/sitemap/",
      },
    },
  };

const SitemapPageRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <h1 className={'unbounded'}>Карта сайта</h1>
        <p style={{marginTop:'10px'}}>Полное меню всех разделов и наиболее популярных страниц, доступных на сайте нашей компании WEB-MACHINE</p>
        <h2>Локаль: русский язык</h2>
        <div className='desc-flex-mob-block'>
        <div className='desc-col-2-50-mob-1-100'>
        <ul>
        <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/">Главная страница</a></li>
        <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/services">Услуги</a>
                <ul className="ml-4">
                    <li><a className="p-1 a-anim-w" href="/ru/design">Дизайн сайта</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/landing">Разработка лендинга</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/web-development">Создание сайта</a></li>
                    <ul className="ml-4">
                        <li><a className="p-1 a-anim-w" href="/ru/web-development/wordpress">Создание сайтов на Wordpress</a></li>
                        <li><a className="p-1 a-anim-w" href="/ru/web-development/opencart">Создание сайтов на OpenCart</a></li>
                        <li><a className="p-1 a-anim-w" href="/ru/web-development/laravel">Создание сайтов на Laravel</a></li>
                        <li><a className="p-1 a-anim-w" href="/ru/web-development/react-next-js">Создание сайтов на React / Next.js</a></li>
                        <li><a className="p-1 a-anim-w" href="/ru/web-development/saas">Создание сайтов на конструкторе</a></li>
                        </ul>
                    <li><a className="p-1 a-anim-w" href="/ru/online-store-development">Создание интернет-магазина</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/web-development/marketplace">Создание маркетплейса</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/web-development/auction">Создание аукциона</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/web-development/portal">Разработка онлайн-портала</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/seo">Продвижение сайта</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/seo-online-store">Продвижение интернет-магазина</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/seo-on-development">Оптимизация сайта на этапе разработки</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/ads">Интернет реклама</a></li>
                </ul></li>
        <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/blog">Блог</a></li>
        <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/online-services">Сервисы</a>
                <ul className="ml-4">
                    <li><a className="p-1 a-anim-w" href="/ru/seo-cost-calculator">SEO калькулятор онлайн</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/development-cost-calculator">Калькулятор разработки сайта онлайн</a></li>
                </ul></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/privacy">Политика конфиденциальности</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/cookies">Политика кукис</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/legal">Юридическая информация</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="#">Карта сайта</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/reviews">Отзывы</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/company">О нас</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/contact">Контакты</a></li>
        </ul>
        </div>
        <div className='desc-col-2-50-mob-1-100'>
        <ul>
            <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/cases">Портфолио</a>
            <ul className="ml-4">

                    <li><a className="p-1 a-anim-w" href="/ru/cases/ukreina">Разработка интернет-магазина Ukreina</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/amtex">Разработка интернет-магазина швейного оборудования Amtex</a></li>

                    <li><a className="p-1 a-anim-w" href="/ru/cases/zplay">Создание сайта ведущего китайского разработчика игр ZPLAY</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/okko">Дизайн, техподдержка и разработка разделов на сайте сети ОККО</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/roganska">Дизайн и разработка сайта для бренда Роганская вода</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/carglass">Разработка сайта Carglass</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/health-ua">Разработка портала Health-UA</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/chmsoft">Разработка сайта IT компании Chmsoft</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/hyundai">Разработка сайта автодилера Hyundai</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/varvar">Дизайн интернет-магазина VARVAR</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/lamps4makeup">Дизайн и разработка интернет-магазина Lamps4makeup</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/agro">Разработка сайта для агрокомпании</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/molekula">Дизайн и создание медицинского сайта для МЦ Молекула</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/rannov">Создание интернет-магазина одежды RANNOV</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/jinsovik">Дизайн интернет-магазина одежды Джинсовик</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/yumi">Дизайн сайта для китайского сервиса монетизации Yumi</a></li>
                    
                    <li><a className="p-1 a-anim-w" href="/ru/cases/procraft">Разработка интернет-магазина Procraft</a></li>
                    
                    <li><a className="p-1 a-anim-w" href="/ru/cases/modiva">Разработка интернет-магазина Modiva</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/palvira">Разработка и продвижение интернет-магазина Palvira</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/hited">Разработка интернет-магазина Hited</a></li>
                    
                    <li><a className="p-1 a-anim-w" href="/ru/cases/masshold">Рекламная кампания для интернет магазина Masshold</a></li>
                    
                    <li><a className="p-1 a-anim-w" href="/ru/cases/building">Разработка сайта застройщика «Витязь СтройЦентр»</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/toyota">Редизайн сайта автосалона официального дилера Toyota</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/meblix">Разработка мебельного интернет-магазина Мебликс</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/web">Создание интернет-магазина хайповой одежды TheKingHouse</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/meridian">Создание нишевого маркетплейс MeridianNurse</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/32">Дизайн сайта для компании 32.in.ua</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/steli">Дизайн маркетплейса Steli.top</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/a1">Разработка сайта для студии архитектурной визуализации</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/megazayka">Редизайн сайта магазина детских товаров MEGA Zayka</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/aesthetta">Создание сайта клиники эстетической косметологии Aesthetta (США)</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/ultracash">Продвижение сервиса онлайн кредитов «Ultracash»</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/dental">Продвижение клиники «Стоматология для всех»</a></li>
                    <li><a className="p-1 a-anim-w" href="/ru/cases/legalgrounds">Создание сайта LegalGround.top</a></li>
                    
            </ul></li>
        </ul>
            </div>

          </div>

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

export default SitemapPageRu;