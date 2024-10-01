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


const NextComponentRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Разработка сайта на Next.JS / React.JS</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Заказать создание сайта на Next.JS - это инвестировать в разработку на одном из самых высокопроизводительных JavaScript-фреймворков и супер решение для создания передовых веб-приложений на основе React и Typescript. Next.js работает на Node.JS, является SSR-расширением React и позволяет делать полноценные многостраничные сайты на основе серверного рендеринга, подготовленные под SEO-продвижение, но при этом работающие со скоростью React!</h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={26000} end={7000} duration={2} separator={" "} /></p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={16} end={4} duration={8} /> мес.</p>
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
    <h2 className='h3ash1'>Примеры сайтов на JS фреймворках</h2>
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
    <span>Подробнее о разработке на Next.JS/React.JS и JS фреймворках</span>
  </div>
  <div className="spoiler-content" style={{color: 'black'}}>
  <h2>Разработка сайта на Next.js, React.js и Vue.js в Киеве</h2>
<p>Создание сайтов на Next.js Framework в Киеве стартует со стоимости $7000. Заказать разработку на Next.js Framework в Киеве и веб-дизайн можно также и в других городах Украине: Харькове, Днепре, Одессе, Львове, Франковске, Тернополе. Вы можете получить полную консультацию по срокам и стоимости разработки на Next.js Framework, оставив нам заявку или по телефонам в шапке сайта.</p>

<h2>Разработка сайта на Next.js: обзор технологий</h2>
<p>Как правило, разработка на Next.js Framework предназначается для создания пользовательских интерфейсов, высокотехнологичных многостраничных приложений и сайтов, а также административных панелей. Next.js является мощным и изящным решением, совмещающим функциональные возможности и безопасность приложения.</p>
<p>Разработка на Next.js входит в ТОП технологических фреймворком, использующих язык JavaScript, наряду с Nuxt.js (является SSR развитием одностраничных приложений Vue.js).</p>


<h2>Из чего состоит стоимость создания сайта на Next.js?</h2>
<p>На стоимость создания сайта на Next.js влияет ряд факторов. Прежде всего, это цели и задачи разработки. Как правило, на основе технического задания мы можем точно дать оценку по стоимости разработки на Next.js, куда входит сложность функционала, дизайнерские требования к интерфейсу, а также требования по безопасности. Ко всему прочему, важным фактором является срочность работ.</p>


<h2>Этапы и состав работ по разработке сайта на Next.js</h2>
<p>Этапы разработки на Next.js являются стандартными и выполняются строго в следующем порядке:</p>
<ol className='spoilerOlStyle'>
<li>формирование концепции</li>
<li>формирование технического задания</li>
<li>прототипирование</li>
<li>дизайн</li>
<li>верстка</li>
<li>программирование</li>
<li>контент</li>
<li>QA тестирование</li>
<li>развертывание на рабочем сервере</li>
</ol>

    </div>
</div>  
      
      <div className='space20'></div>

    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/okko_cover_01-min.png"
          imgAlt="Дизайн, техподдержка и развитие сайта сети OKKO"
          caseText="Кейс"
          stackArray={["Design", "Support", "Web-development"]}
          titleText="Дизайн, техподдержка и развитие сайта сети OKKO"
        />

        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
        
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/hyundai-cover-4.jpg"
          imgAlt="Дизайн и разработка сайта дилера Hyundai Truck and Bus на JS фреймворке React.JS"
          caseText="Кейс"
          stackArray={["React.js", "Design", "Web-development"]}
          titleText="Дизайн, проектирование и разработка сайта дилера Hyundai Truck and Bus на JS-фреймворке React.JS, настройка CI/CD"
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
        <h2 className='h3ash1'>Преимущества Next.js</h2>
        <p>Определяем сильные стороны Next.js в сравнении с разработкой на CMS:</p>
        <div className='space40'></div>
        <div className='descCol4Mob1'>
          <div>
            <h3 className='unbounded-font'>Скорость</h3>
            <p>Использование серверного рендеринга фреймворка Next позволяет получать мнговенную загрузку страниц. Рендеринг происходит при публикации сайта на сервер.</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Масштабируемость</h3>
            <p>Фреймворк создан с возможностью масштабирования, подключения баз данных и может быть реализован как сервис со множеством сложных функций, так и в качестве интернет-магазина, либо просто корпоративного сайта</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Технологии</h3>
            <p>Экосистема Next.js постоянно расширяется и обновляется, например, с помощью NPM, менеджера пакетов Node.js можно добавить нужные расширения.</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Продвижение</h3>
            <p>SSR функция Next.js позволила использовать большое количество SEO инструментов - метатеги, скрипты, а также мультиязычность, то чего не хватало в React.JS, который представляет собой SPA (single page application)</p>
          </div>
        </div>
      </div>
      </div>

      <div className="relative w-full overflow-hidden white112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Этапы разработки сайтов на Next.JS / React.JS</h2>
        <p>Разрабатываем сайты и интернет-магазины на JS фреймворках (Next, React, Vue, Nuxt) и проектируем веб-интерфейсы с 2013 года, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.</p>
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

export default NextComponentRu;