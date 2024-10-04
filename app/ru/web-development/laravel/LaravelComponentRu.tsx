'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
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


const LaravelComponentRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Создание сайтов и магазинов на Laravel</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Заказать сайт или интернет-магазин на одном из самых популярных PHP-фреймворков - Laravel, Вы можете в нашей компании по выгодным ценам и в рассрочку.</h4>
        
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
    <h2 className='h3ash1'>Примеры сайтов на фреймворках</h2>
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
    <span>Подробнее о разработке на Laravel и PHP фреймворках</span>
  </div>
  <div className="spoiler-content" style={{color: 'black'}}>
  <h2>Что такое фреймворк?</h2>
<p>PHP-фреймворк – это каркас для <a href="/ru/web-development">создания сайтов</a> и интернет магазинов, позволяющий создавать более функциональные и масштабные проекты в отличие от широко используемых в разработке сайтов CMS.</p>


<h3>Наиболее распространенные фреймворки</h3>
<p>Наиболее широко распространенные PHP платформы в разработке проектов на сегодняшний день — это:</p>
<ul>
<li><b>Yii2</b> – фреймворк, в котором удачно сочетаются такие параметры, как цена, скорость работы, отличная техподдержка и большой набор программных компонентов и библиотек.</li>
<li><b>Zend</b> – каркас для веб-приложений, написанный на PHP и поддерживающий различные системы управления базами данных.</li>
<li><b>Codeigniter</b> – один из самых быстрых фреймворков, быстро и легко масштабируется, а также гибок для реализации различного функционала.</li>
<li><b>Symfony</b> – фреймворк, относящийся к кроссплатформенным системам с открытым программным кодов.</li>
<li><b>Laravel</b> — наиболее популярный PHP-framework благодаря своим возможностям в масштабировании проектов, защиты данных и скорости развертывания проектов.</li>
</ul>

<h3>Стоимость и сроки создания сайтов на Framework — Laravel и Yii2</h3>
<p>Стоимость и сроки создания интернет-магазинов и сайтов на фреймворках зависит от функциональной сложности и масштаба проекта, и как правило составляет от $7000 и занимает от 4 месяцев.</p>


<h2>Разработка проекта на PHP-framework (Laravel, Yii2): преимущества</h2>
<p>Рассмотрим преимущества наиболее популярного PHP фреймворка Laravel:</p>
<ul className='spoilerUlStyle'>
<li>Высокая скорость разработки в сравнении с другими платформами за счет более оптимизированного кода.</li>
<li>Популярность. Laravel в настоящее время — это наиболее часто обновляемая и тестируемая платформа, благодаря сообществу разработчиков.</li>
<li>Продуктивность. Благодаря использованию прогрессивного кеширования данный фреймворк демонстрирует самые высокие показатели быстродействия.</li>
<li>Функциональность. И снова, благодаря активно развивающемуся сообществу разработчиков база модулей и расширений постоянно пополняется новыми возможностями, а также за счет использования передового шаблонизатора Blade — мощного инструмента для разработки любого программного решения.</li>
<li>Производительность и безопасность. Laravel поддерживает наиболее популярные базы данных, защищенное соединение, что гарантирует безопасность Ваших данных от взлома и SQL инъекций.</li>
</ul>

<p>
    <br></br>
</p>
    <Image src="/images/laravel-web-machine-min.webp" alt="Создание интернет-магазинов на фреймверках Laravel, Yii2 в Киеве, Харькове" width="1200" height="800" />


<h2>Создание сайтов на платформе Laravel цели и возможности применения</h2>
<p>Возможные области применения сайтов на фреймворках:</p>
<ol className='spoilerOlStyle'>
<li>Создание высоконагруженных онлайн-сервисов.</li>
<li>Разработка интернет-магазинов с большой нагрузкой.</li>
<li>Создание корпоративных ресурсов с широкими функциональными возможностями.</li>
<li>Разработка API для приложений и сервисов.</li>
<li>Разработка социальных сетей.</li>
<li><a href="/ru/web-development/marketplace">Создание агрегаторов и маркетплейсов</a></li>
</ol>

<h2>Разработка интернет-магазина на Laravel, Yii2 в Киеве и Харькове</h2>
<p>Заказать создание сайта или интернет-магазина на таком фреймворке, как Laravel, Yii Вы можете в digital-агентстве WEB-MACHINE, а также заказать <a href="/ru/seo">продвижение сайта</a>. Наши преимущества кроме высоких позиций в профильных рейтингах и портфолио — это:</p>
<ul className='spoilerUlStyle'>
<li>уникальный дизайн и технологии</li>
<li>предоставление гарантий на сайт — 3 года</li>
<li>бонусы и скидки</li>
<li>и главное, на разработку сложных проектов мы предоставляем рассрочку до 8 месяцев.</li>
</ul>
<p>Для заказа сайта или разработки интернет-магазина на framework (Laravel или Yii2) Вам необходимо оставить бриф, или позвонить в наш офис по контактным номерам телефона.</p>
    
    
    </div>
</div>  
      
      
      
      <div className='space20'></div>

    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/modiva-cover.webp"
          imgAlt="Дизайн, разработка интернет-магазина на PHP фреймворке"
          caseText="Кейс"
          stackArray={["Дизайн", "Поддержка", "Разработка"]}
          titleText="Дизайн, разработка интернет-магазина на PHP фреймворке"
        />

        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
        
        <AnimatedVideoLink 
          href="/ru/#"
          videoSrcWebm="/movie/case_utopia.webm"
          caseText="Кейс"
          stackArray={["Laravel", "SEO", "Разработка"]}
          titleText="Разработка дополнений, оптимизация"
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
        <h2 className='h3ash1'>Этапы разработки сайтов на Laravel</h2>
        <p>Разрабатываем сайты и интернет-магазины на PHP фреймворках (Laravel) и проектируем веб-интерфейсы с 2013 года, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.</p>
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

export default LaravelComponentRu;