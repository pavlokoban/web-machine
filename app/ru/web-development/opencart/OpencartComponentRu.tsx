'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import ImageRow from '@/components/imagerow/ImageRow';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import StageSliderDevRu from '@/components/stageslider/StageSliderDevRu';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import CountUp from 'react-countup';
import PricingPlansRu from '@/components/pricingplans/PricingPlansRu';


const OpencartComponentRu = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keywords = 
    ['SEO', 'PPC', 'JS', 'Next.js', 'Laravel', 'PHP', 'React', 'Wordpress', 'Design', 
    'Figma', 'Nuxt', 'TypeScript', 'Vue', 'Branding', 'Opencart', 'SASS', 'Mockup', 'Prototype', 
    'B2B', 'B2C', 'Strategy', 'Google', 'GoogleAds', 'Web', 'Marketing', 'Creative', 'Baidu'];

    const container = textContainerRef.current;

    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const createFallingText = (text: string) => {
      const span = document.createElement('span');
      span.textContent = text;
      span.className = 'falling-text';
      span.style.left = `${Math.random() * (width - 150)}px`; // Уменьшение слипания текста
      span.style.animationDuration = `${5 + Math.random() * 50}s`; // Сделать падение медленнее
      container.appendChild(span);

      let x = 0, y = 0;
      let moveX = (Math.random() - 0.5) * 2;
      let moveY = Math.random();

      const mouseMoveHandler = (e: MouseEvent) => {
        const rect = span.getBoundingClientRect();
        const distX = e.clientX - rect.left - x;
        const distY = e.clientY - rect.top - y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance < 50) {
          moveX = distX * 0.5;
          moveY = distY * 0.5;
        }
      };

      const animate = () => {
        x += moveX;
        y += moveY;
        span.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      };

      container.addEventListener('mousemove', mouseMoveHandler);
      animate();

      span.addEventListener('animationend', () => {
        span.remove();
        container.removeEventListener('mousemove', mouseMoveHandler);
        createFallingText(text); // Recreate text to continue falling
      });
    };

    // Увеличить количество элементов в два раза и убрать задержку
    keywords.forEach((keyword) => {
      for (let i = 0; i < 2; i++) {
        createFallingText(keyword);
      }
    });

    return () => {
      container.innerHTML = ''; // Clean up on unmount
    };
  }, []);

  return (
<>
    <div className="relative w-full overflow-hidden gray112">
      <div ref={textContainerRef} id=""></div>
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <h1 className={'unbounded centered-texts'}>Создание интернет-магазинов на Opencart / OcStore</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Разработка интернет-магазина на OpenCart — это оптимальный выбор CMS для Вашего онлайн-бизнеса! Создание интернет-магазинов на CMS Opencart и OсStore в Киеве под ключ: модули, интеграция, доставка, оплата. Разработка магазинов на основе ecommerce платформы CMS Opencart / OcStore с уникальным дизайном и продуманным интерфейсом. Цена разработки сайта CMS Opencart, сроки создания магазина от 4 недель. </h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={12000} end={2900} duration={2} separator={" "} /></p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={16} end={2} duration={8} /> мес.</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>
        </div>
    
    <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Примеры интернет-магазинов на CMS Opencart / OcStore</h2>
    <p>С 2013 года более 300 разработанных сайтов, на CMS Wordpress, MODX, Opencart, Magento, фреймворках Laravel, React/Next, Vue/Nuxt, Yii, а также Shopify.</p>
      
    <div className="spoiler">
  <div className="spoiler-summary" onClick={(e) => {
      const content = e.currentTarget.nextElementSibling;
      const icon = e.currentTarget.querySelector('.plus-icon');
      if (content && icon) {
        content.classList.toggle('open');
        icon.classList.toggle('rotate');
      }
    }}>
    <span className="plus-icon">+</span>
    <span>Подробнее о разработке магазинов на Opencart</span>
  </div>
  <div className="spoiler-content" style={{color: 'black'}}>
    <h2>Создание интернет-магазина на Opencart: удобное решение для вашего бизнеса </h2>
    <p>Сфера торговли — одна из самых прибыльных в бизнесе. Она привлекает предпринимателей невысокой трудоемкостью бизнес-процессов и быстрым возвратом инвестиций, поэтому уровень конкуренции очень высок. Усложняются условия игры и в онлайн-сегменте, но все же интернет-магазин остается прибыльным форматом ведения торговли. Хороший ИМ — это не только о красивых текстах и приятном дизайне. Комплексная работа профессионалов над подбором системы управления и реализации решений позволит владельцу выйти на новый уровень. Разработка сайта на Opencart — универсальное решение, ориентированное на потребности электронной коммерции и компаний разного масштаба. Заказать функциональный и современный интернет-магазин можно в digital-агентстве WEB-MACHINE. Наша команда имеет большой опыт в создании сайтов на Opencart разной тематики и сложности. Накопленная экспертиза позволит нам решить любые задачи клиента в сроки с применением релевантных
    программных решений.</p>
    <h2>Функции и возможности интернет-магазинов на Opencart</h2>
    <p>Интернет-магазин на Opencart по умеренной цене — оптимальный вариант для организации онлайн продаж, который подходит компаниям малого и среднего бизнеса. Сайт хорош тем, что не требует много времени на создание, а бюджет разработки доступен. Решение имеет и массу других преимуществ, которые позволят развить и масштабировать бизнес:</p>
        <ol className='spoilerOlStyle'>
            <li>Интегрированный модуль SEO-оптимизации позволяет улучшить качество контента в соответствии с требованиями поисковиков и нарастить ссылочный вес. Возможность ускоренной индексации сайта на Opencart направлен на рост и появление ресурса в ТОПе. Доступны и другие инструменты интернет-маркетинга.</li>
            <li>Электронная коммерция — важная часть сайта на Opencart. Чтобы облегчить работу с бухгалтерией, вопросы, связанные с валютой и налогообложением, необходимо настроить нужный блок сайта. На это уйдет немного времени в единоразовом режиме.</li>
            <li>Частая проблема, с которой сталкиваются владельцы интернет-магазинов, — это ограниченное количество категорий и карт товаров. Из-за этого при масштабировании приходится вносить изменения за дополнительные деньги или даже переезжать на другую систему управления. Создание сайта на Opencart избавит от подобных сложностей, ведь с его помощью можно удобно презентовать и продавать практически неограниченное число товаров.</li>
            <li>Сокращение времени на документооборот — еще одно преимущество сайта на Opencart по доступной цене. Отчетность формируется с использованием функций CMS, поэтому загружать дополнительные модули не придется. В крайнем случае, специалист или владелец сайта дорабатывает систему в исходном коде, а всю информацию можно сохранить через резервное копирование базы данных.</li>
            <li>Мультиязычность и адаптивность — плюс создания сайтов Opencart. Вне зависимости от языковой раскладки и устройства, на котором пользователь просматривает товар, сайт отображается корректно и понятно для пользователя.</li>
        </ol>
        <h2>Разработка сайта на Опенкарт 3/4: что получает владелец сайта</h2>
        <p>Интернет-магазины с системой управления Opencart 3/4 пишутся на языке PHP, который рассчитан на обеспечение задач торговли в онлайн-режиме. Такое решение радует расширенной функциональностью, удобным пользованием и понятным интерфейсом и массой нужных модулей.</p>
        <p>Что получает клиент, заказавший разработку сайта на Опенкарт 3/4?</p>
        <ol className='spoilerOlStyle'>
            <li>Удается максимально увеличить охват потенциальной аудитории. С эффективными инструментами SEO-оптимизации сайт выйдет в ТОП в течение нескольких недель, станет видимым для большого количества пользователей, что приведет к увеличению трафика и росту продаж.</li>
            <li>Возможность поддерживать продажи в нерабочее время, что актуально для оффлайн магазинов и компаний. Пользователи могут просматривать товар интернет-магазина в любое время, оставлять контакты в форме связи и делать заказы. Таким образом, собственник не теряет продажи из-за ограниченного режима работы.</li>
            <li>Заказав разработку сайта Opencart 3, владелец интернет-магазина сокращает расходы на администрирование и персонал. Чтобы обрабатывать массу заказов, не нужно нанимать много менеджеров и нести расходы на оплату услуг штатных консультантов.</li>
            <li>Оптимизация трат делает возможным снижение наценки на товар, а это — важный фактор для покупателя. Пользователь сравнит стоимость товара в нескольких интернет-магазинах и при других равных условиях выберет тот, где переплачивать не придется.</li>
            <li>Разработка интернет-магазина Opencart 3 – это всегда плюс в пользу престижа и репутации офлайнового бизнеса. Наличие сайта повышает значимость и статус магазина в глазах аудитории, усиливается лояльность и
            доверие клиентов.</li>
        </ol>
        <h2>Создание и раскрутка сайта на Opencart</h2>
        <p>Агентство WEB-MACHINE разрабатывает сайты Opencart с 2013 года: за это время накоплен опыт в разработке сайтов. Нами налажен алгоритм, следуя которому, мы реализуем самые сложные проекты.</p>
        <ol className='spoilerOlStyle'>
            <li>Дизайн-исследование проекта.</li>
            <li>Разработка концепции, включая идею и структуру сайта.</li>
            <li>Проектируется интерактивный прототип.</li>
            <li>Верстаются макеты разделов.</li>
            <li>Вид страниц сайта приводится в соответствие с дизайном.</li>
            <li>Программирование.</li>
            <li>Наполнение сайта на Опенкарт контентом.</li>
        </ol>
    <p>Чтобы сделать интернет-магазин видимым и привести клиентов на сайт, специалисты нашего агентства выполняют мероприятия по раскрутке и продвижению. Действия направлены на внешнюю и внутреннюю оптимизацию, повышение активности в социальных сетях и рост продаж с помощью контекстной рекламы.</p>
    
    <h2>Заказать интернет-магазин на Опенкарт в WEB-MACHINE</h2>
    <p>Функциональный и работающий сайт — это результат слаженной работы профессионалов в сфере digital и веб-разработки. Команда нашего агентства собрала компетентных специалистов, которые помогут продвинуть бизнес. Почему мы?</p>
        <ul className='spoilerUlStyle'>
            <li>Правильно расставляем акценты: удобный интерфейс, стильный дизайн, правильные программные технологии и структурированный контент;</li>
            <li>Лояльная ценовая политика на разработку сайта Opencart;</li>
            <li>Соблюдение сроков.</li>
        </ul>
    <p>Чтобы просчитать стоимость разработки интернет-магазина на Opencart, свяжитесь с нами в месенджерах.</p>
    </div>
</div>  
      
      
      
      <div className='space20'></div>

    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/underspace-cover-4.jpg"
          imgAlt="Дизайн и создание интернет-магазина женского белья"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка"]}
          titleText="Дизайн и создание интернет-магазина женского белья"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/ukreina-cover-2.jpg"
          imgAlt="Дизайн и разработка саинтернет-магазинайта для бренда женской одежды Ukreina"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка"]}
          titleText="Дизайн и разработка интернет-магазина для бренда женской одежды Ukreina"
        />

        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
        
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/varvar-cover-2.jpg"
          imgAlt="Дизайн и создание интернет-магазина ювелирных украшений на CMS Opencart"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Figma"]}
          titleText="Дизайн и создание интернет-магазина ювелирных украшений на CMS Opencart"
        />
       
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_toptv_cover.png"
          imgAlt="Дизайн, разработка и SEO продвижение крупного интернет-магазина электроники и бытовой техники"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка", "SEO"]}
          titleText="Дизайн, разработка и SEO продвижение крупного интернет-магазина электроники и бытовой техники"
        />

      
        </div>
        

        </div>
        <div className='flex'>
          <CircleDiscussButtonSEORu text="Больше кейсов" reflink="/ru/cases" />
        </div>

        </div>
        </div>

      <div className="relative w-full overflow-hidden brave112">
        <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Правильные акценты</h2>
        <p>Будь то стартап, разработка MVP, или обновление существующей программной системы - важно расставить правильные приоритеты</p>
        <div className='space40'></div>
        <div className='descCol4Mob1'>
          <div>
            <h3 className='unbounded-font'>Интерфейсы</h3>
            <p>Создаем UI/UX на основе аналитических данных маркетинговых аудитов: о предпочтениях целевой аудитории</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Дизайн</h3>
            <p>Создаем уникальный дизайн на основе продуманных схем, следуем лучшим трендам и мировым отраслевым стандартам</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Технологии</h3>
            <p>Разрабатываем сайты, используя современные технологии: программирование на JS, PHP, быстрые CMS и фреймверки</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Продвижение</h3>
            <p>Благодаря компетенции в поисковом маркетинге создаем быстрые сайты, подготовленные к дальнейшей SEO-оптимизации и активной интернет-рекламе</p>
          </div>
        </div>
      </div>
      </div>

      <div className="relative w-full overflow-hidden white112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Этапы разработки интернет-магазина на Opencart</h2>
        <p>Разрабатываем магазины на CMS Opencart и проектируем веб-интерфейсы с 2013 года, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.</p>
        <p>Создали более 100 сайтов в различных тематиках и нишах.</p>
        <div className='space20'></div>
        <StageSliderDevRu />
        <div className='space40'></div>

      </div>
      <MarqueeText />

<div className='relative z-0 blackblock mx-auto p-10 px-10 m-10'>
  <div className='fake-container'>
  <h2 className='h3ash1'>Мыслим масштабно!</h2>
  <p>Среди наших клиентов по разработке, интернет-маркетингу и комплексному продвижению в Украине такие компании как имеющие свой отдел маркетинга, так и компании, с которыми мы работаем как аутсорсинговый отдел digital-маркетинга.<br>
  </br>География ключевых клиентов: Украина, Великобритания, Китай, США, Эстония, Австралия, Польша, Канада.</p>
  <div className='space20'></div>
  <BrandSectionRu />
  </div>
</div>

<div id="content-container" className='relative z-0 container mx-auto p-10 px-10 m-10'>
<h2 className='h3ash1'>Отзывы клиентов</h2>
<TestimonialsRu />

<div id="contact-form-here"></div>

<ContactFormRus />

</div>
      </div>

    </>
  );
}

export default OpencartComponentRu;