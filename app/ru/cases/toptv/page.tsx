import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';

export const metadata: Metadata = {
  title: "Разработка и продвижение интернет-магазина электроники и бытовой техники",
  description: "Кейс по созданию и SEO продвижению интернет-магазина на базе Opencart — TopTV. Работы: маркетинговый аудит, дизайн, разработка сайта, PPC, SEO.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/toptv",
    languages: {
      en: "https://web-machine.rocks/cases/toptv",
      ru: "https://web-machine.rocks/ru/cases/toptv",
      uk: "https://web-machine.rocks/uk/cases/toptv",
    },
  },
};

const CaseToptvRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Разработка и продвижение интернет-магазина электроники</h1>
        <h4 className={''}>Кейс: продвижение и раскрутка магазина электроники и бытовой техники TopTV.</h4>
       
        <br></br>
        <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto border-36"
        >
          <source src="/images/portfolio/toptv/toptv-01.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        </div>
       
        <h2>Обзор и постановка целей под продвижение интернет магазина бытовой техники</h2>
        <p>Изначально, основным каналом интернет-продаж были прайс-агрегаторы. Основным преимуществом компании на рынке была более низкая стоимость электроники и бытовой техники в сравнении с конкурентами.</p>
        <p>Проблемы: разработчиками интернет-магазина были допущены кричащие ошибки, оптимизация сайта под поисковые системы отсутствовала практически полностью. Видимость сайта в поисковых системах 0%, полное отсутствие трафика из поисковых систем. Коэффициент конверсии составлял менее 0,5%.</p>
        <p>Положительные стороны: присутствовал каталог товаров, правильно организованные и полностью заполненные карточки товаров. Функционал интернет-магазина хоть и с ошибками, но был реализован.</p>
        <p>Цели: Основной целью являлось <b>увеличение количества продаж</b> и качественное продвижение интернет магазина электроники для наращивания потенциала в органической представленности предложения на целевом рынке. Для достижения целей по продвижению магазина бытовой техники и электроники было выделено несколько аспектов (направлений по улучшению) и тактических действий по проекту, которые в последствии и привели к выполнению поставленных задач, а именно: </p>
        <ol className='spoilerOlStyle'>
        <li>Организация всех категорий товаров и их логических взаимосвязей (для кросс-продаж). Сюда входит базовая оптимизация интернет магазина бытовой техники и электроники;</li>
        <li>Прокачка карточек товаров для повышения уровня конверсий интернет-магазина электроники;</li>
        <li>Улучшение основной и дополнительной навигаций по интернет-магазину электроники для улучшения качества сеансов;</li>
        <li>Создание благоприятных условий с технической и пользовательской сторон для роста видимости и совершения заказов в интернет-магазине электроники</li>
        </ol>

        <FadeInImage src="/images/portfolio/toptv/toptv-02.webp" alt="Разработка и продвижение интернет-магазина электроники" />
        <h2>SEO-оптимизация интернет магазина бытовой техники</h2>
        <p>В первую очередь, был составлен план работ, проведен подробный аудит интернет магазина электроники с точки зрения SEO-оптимизации и с точки зрения удобства использования сайта, составлен список рекомендаций по доработкам интернет-магазина бытовой техники с целью улучшения юзабилити, а также уровня конверсий. Далее работы по оптимизации и кастомизации ресурса велись параллельно:</p>
        <ul className='spoilerUlStyle'>
            <li>Собрано релевантное семантическое ядро под все категории, включая товары-флагманы</li>
            <li>Выполнены технические работы, необходимые для успешного сканирования интернет-магазина бытовой техники роботами поисковых систем</li>
            <li>Регулярные работы по оптимизации посадочных страниц под поисковые системы, обновлению контента на сайте, а также технические работы</li>
        </ul>
        <h2>Кастомизация под продвижение интернет магазина электроники</h2>
        <ul className='spoilerUlStyle'>
            <li>Оптимизирована работа всех контактных форм</li>
            <li>Оптимизирован процесс покупки товара через корзину</li>
            <li>Доработки в дизайне сайта</li>
            <li>Актуализация информации о доставке и оплате во всех соответствующих разделах сайта</li>
            <li>Реорганизация рабочего пространства шапки сайта</li>
            <li>Перераспределение элементов в товарной карточке</li>
            <li>Перераспределение элементов CTA</li>
            <li>Организация рабочего пространства на первом экране посадочных страниц</li>
        </ul>
        <h2>Результаты продвижения интернет-магазина бытовой техники</h2>
        <p>Уже в первые месяцы работ наблюдалось постоянное увеличение видимости интернет магазина в поисковых системах:</p>
        <p>По данным сервиса Allpositions.ru. Изменение видимости сайта в первые 4 месяца работы:</p>
        <FadeInImage src="/images/portfolio/toptv/toptv-03.webp" alt="Разработка и продвижение интернет-магазина электроники" />
        <p>Вместе с ростом позиций происходил постоянный прирост трафика из поисковых систем. Поведение пользователей также изменилось в положительную сторону:</p>
        <h3>Сравнение показателей Google Analytics по каналу Organic Search. 1 и 4 месяцы продвижения.</h3>
        <FadeInImage src="/images/portfolio/toptv/toptv-04.webp" alt="Разработка и продвижение интернет-магазина электроники" />
        <p>Количество трафика из поисковых систем увеличилось в 4,5 раза (на 356,05%). Увеличился % возвратов на сайт, улучшились поведенческие факторы. Коэффициент конверсий увеличился с 0,4 до 2%.</p>
        <p>Эти изменения затронули не только посетителей из органической выдачи, а наблюдались по всем каналам трафика сайта:</p>
        <p>Сравнение показателей Google Analytics по всем каналам трафика. 1 и 4 месяцы работ.</p>
        <FadeInImage src="/images/portfolio/toptv/toptv-05.webp" alt="Разработка и продвижение интернет-магазина электроники" />
        <p>Общее количество трафика увеличилось в 1,5 раза (на 51,2%). Коэффициент конверсии увеличился в 4 раза (на 312,09%) и составляет 1,78%. В результате чего уже в первые 4 месяца работ количество конверсий увеличилось в 6 раз (на 523,08%).</p>
       
       <h2>Планы по дальнейшему продвижению интернет магазина бытовой техники</h2>
        <ul className='spoilerUlStyle'>
            <li>Дальнейший рост видимости ресурса</li>
            <li>Улучшение KPI проекта</li>
            <li>Совершенствование сервиса на стороне ресурса</li>
            <li>Анализ ниши и потребностей целевых групп</li>
            <li>Бенчмаркинг</li>
            <li>Оптимизация конверсий.</li>
        </ul>
        <h2>Отзыв клиента</h2>
        <blockquote className="blockquote-6">
        <p>Мы обратились в компанию WEB-MACHINE несколько месяцев назад для продвижения нашего сайта. Благодаря рекомендациям и усилиям сотрудников компании продаж у нас стало больше, сайт стал более функциональным и удобным в использовании. Работают профессионально и быстро, результатом мы довольны.</p>
        <p><b>Виталий Гармаш, руководитель компании TopTV</b></p>
        </blockquote>
        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CaseToptvRu;