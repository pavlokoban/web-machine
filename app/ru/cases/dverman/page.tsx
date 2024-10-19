import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Продвижение и редизайн сайта Dverman",
  description: "Кейс по SEO продвижению и редизайну сайта Dverman - производителя дверей",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/dverman",
    languages: {
      en: "https://web-machine.rocks/cases/dverman",
      ru: "https://web-machine.rocks/ru/cases/dverman",
      uk: "https://web-machine.rocks/uk/cases/dverman",
    },
  },
};

const CaseDvermanRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Продвижение и редизайн сайта Dverman</h1>
        <h4 className={''}>Продвижение и редизайн сайта салона дверей в Украине Dverman</h4>
        <FadeInImage src="/images/portfolio/dverman/dverman-01.webp" alt="Продвижение и редизайн сайта Dverman" />
       
       
        <h2>Задача от клиента</h2>
        <p>Улучшить позиции сайта в поисковой выдаче Google, настроить контекстную рекламу и сделать редизайн сайта dverman.com.ua</p>
        
        <h2>Решение</h2>
        <h3>Работы по настройке контекстной рекламы</h3>
        <p>Были сделаны кампании КМС ремаркетинг, на пользователей, которые перешли на сайт, исключая тех людей, которые делали звонок и заказали двери. Вся рекламная кампания была сделана методом Альфа/бета и разделена на 2 кампании по запросам узкого и широкого соответствия. Кампания Альфа сделана методом SKAg. Это нам дало максимальное расширение семантического ядра, при этом вылов эффективных ключевых слов с высоким коэффициентом конверсий.</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-02.webp" alt="Продвижение и редизайн сайта Dverman" />
       
        <p>За период ведения нам удалось снизить стоимость клика с 1,70 до 0,16 грн</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-03.webp" alt="Продвижение и редизайн сайта Dverman" />
        <p>За весь период ведения рекламы 4 месяца мы получили 59 конверсий, по средней цене конверсии 183,18 грн средний чек клиента 5400 грн</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-04.webp" alt="Продвижение и редизайн сайта Dverman" />
        <h3>Работы по SEO-оптимизации сайта</h3>
        <p>В результате комплекса выполненных работ мы увеличили видимость сайта в Google</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-05.webp" alt="Продвижение и редизайн сайта Dverman" />
        <p>Увеличен процент ключевых слов в ТОП-10</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-06.webp" alt="Продвижение и редизайн сайта Dverman" />
        <p>Улучшены средние позиции по всем ключевым запросам</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-07.webp" alt="Продвижение и редизайн сайта Dverman" />
        <p>Изменения по всем критериям</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-08.webp" alt="Продвижение и редизайн сайта Dverman" />
        <h3>Работы по редизайну сайта</h3>   
        <p>Как было:</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-09.webp" alt="Продвижение и редизайн сайта Dverman" />
        <p>Как стало:</p>
        <FadeInImage src="/images/portfolio/dverman/dverman-10.webp" alt="Продвижение и редизайн сайта Dverman" />
       
        </div>
        
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CaseDvermanRu;