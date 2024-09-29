'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import StageSliderDevRu from '@/components/stageslider/StageSliderDevRu';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import CountUp from 'react-countup';
import PricingPlansRu from '@/components/pricingplans/PricingPlansRu';


const DesignComponentRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Дизайн сайта под ключ, редизайн</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Создаем яркий и подчеркивающий сильные стороны бренда дизайн на основе исследований, UI/UX и модных трендов с 2013 года. Также предоставляем услуги по редизайну уже существуюшего сайта, делаем яркий, смелый дизайн с учетом всех современных тенденций и отраслевых стандартов.
        </h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={3000} end={1200} duration={2} separator={" "} /></p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={12} end={3} duration={8} /> недель</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>

      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto border-36"
        >
          <source src="/movie/ShowReelDarkGray.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className='space40'></div>

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
    <span>Подробнее о веб-дизайне</span>
  </div>
  <div className="spoiler-content"> 
  <h2>Дизайн сайта, редизайн сайтов в Киеве, Харькове, Днепре, Одессе</h2>
        <p>Каким бы ни был высокотехнологичним и функциональным сайт, как всегда, встречают по одежке, в данном случае, по дизайну. Наша компания занимается разработкой дизайна сайтов уже более 10 лет, и мы имеем большой опыт создания уникального и передового дизайна, способного подчеркнуть сильные стороны Вашего бизнеса. Дизайн сайта может быть эксклюзивным с WOW эффектами, либо наоборот - строгим и максимально ориентированным на конверсии, но в любом случае дизайн сайта должен быть основан на законах юзабилити.</p>
        <p>Разработка дизайна или же редизайна для сайтов любой сложности — от небольших лендингов до масштабных порталов и интернет-магазинов. Стоимость редизайн и дизайна сайтов — от $1200.</p>
        <p>Заказать дизайн сайта и веб-дизайн в Киеве, Харькове, Днепре, Одессе, Львове, а также в других городах Украины Вы можете оставив заявку на разработку дизайна сайта.</p>
    <h3>Методы дизайна сайтов: обзор технологий</h3>  
        <p>Основными этапами разработки дизайна сайта являются:</p>
        <ul className='spoilerUlStyle'>
            <li>уточнение всех пожеланий клиента, рефы, а также исследование текущего дизайна в случае разработки редизайна сайта</li>
            <li>проведение дизайн-исследования</li>
            <li>разработка структуры</li>
            <li>разработка прототипов</li>
            <li>разработка непосредственно дизайна страниц сайта</li>
            <li>создание адаптивных версий страниц</li>
            <li>в случае если необходимо внедрение, то работы по верстке и программированию</li>
            <li>тестирование дизайна и юзабилити</li>
        </ul>
        <p>В процессе создания дизайна сайта мы используем такие инструменты как Figma, Adobe XD, After Effects, Illustrator, Photoshop.</p>
        <p>Для редизайна и дизайна сайта мы используем методы Waterfall / Agile.</p>

    <h3>Редизайн сайтов</h3>  
        <p>В агентстве интернет-маркетинга WEB-MACHINE Вы можете заказать дизайн сайта в Харькове, Киеве под ключ высокого качества для различных маркетинговых целей:</p>
        <ul className='spoilerUlStyle'>
            <li>дизайн лендинга (landing page)</li>
            <li>дизайн сайта-визитка</li>
            <li>веб-дизайн корпоративного сайта</li>
            <li>дизайн сайта-каталог</li>
            <li>дизайн или редизайн интернет-магазина</li>
            <li>веб-дизайн для маркетплейсов и сайтов-агрегаторов</li>
            <li>дизайн сайта-портала</li>
        </ul>
        <p>Благодаря большому опыту, наши работы побеждают в престижных национальных и международных конкурсах веб-дизайна, наши сотрудники следят за трендами в мире веб-дизайна и для большинства ниш мы сможем предложить лучшие решения, и на их основе разработать яркий и уникальный дизайн сайта либо выполнить редизайн уже существующего сайта. Дизайн сайта либо редизайн сайта - это часть процесса разработки сайта, на ряду с дальнейшими работами по верстке и внедрению дизайна. Мы предлагаем решения по веб-дизайну и те, которые Вы утверждаете, закрепляются в техническом задании на разработку сайта.</p>
 
    <h3>Стоимость и сроки дизайна сайта (Киев, Харьков, Днепр, Одесса)</h3>  
        <p>Стоимость создания дизайна сайта — от $1200 (эквивалент в грн.)</p>
        <p>Стоимость разработки дизайна интернет-магазина — от $1600 (эквивалент в грн.)</p>
        <p>Срок разработки дизайна или редизайна сайта — от 3 недель (в зависимости от сложности проекта).</p>

  </div>
</div>
        </div>

        </div>
        </div>
    
    <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Примеры работ по созданию дизайна сайта</h2>
    <p>С 2013 года более 300 разработанных сайтов, на CMS Wordpress, MODX, Opencart, Magento, фреймворках Laravel, React/Next, Vue/Nuxt, Yii, а также Shopify.</p>
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

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/hyundai-cover-5.jpg"
          imgAlt="Дизайн и разработка сайта дилера Hyundai Truck and Bus"
          caseText="Case"
          stackArray={["React.js", "Design", "Web-development"]}
          titleText="Дизайн и разработка сайта дилера Hyundai Truck and Bus"
        />


        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/zplay-cover-1.jpg"
          imgAlt="Дизайн и разработка сайта для разработка игр Zplay (Китай, Пекин)"
          caseText="Кейс"
          stackArray={["Worpdress", "Design", "Figma", "Web-development"]}
          titleText="Дизайн и разработка сайта для разработка игр Zplay (Китай, Пекин)"
        />


        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/carglass-cover-1.jpg"
          imgAlt="Разработка сайта Carglass® - создание корпоративного сайта компании"
          caseText="Кейс"
          stackArray={["Opencart", "Design", "SEO", "PPC", "Web-development"]}
          titleText="Дизайн и разработка сайта для Carglass® (Belron® групп) - мирового лидера производства и замены стекол для автомобилей"
        />
       
       <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/roganska-cover-3.jpg"
          imgAlt="Дизайн и создание сайта для бренда воды Роганская"
          caseText="Кейс"
          stackArray={["Wordpress", "Design", "SEO", "Web-development"]}
          titleText="Дизайн и создание сайта для бренда воды Роганская"
        />


        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/haited-cover-2.jpg"
          imgAlt="Дизайн и создание сайта Haited"
          caseText="Кейс"
          stackArray={["Opencart", "Design", "Web-development"]}
          titleText="Дизайн и создание интернет-магазина Haited"
        />
      
        </div>
        

        </div>
        <div className='flex'>
          <CircleDiscussButtonSEORu text="Больше кейсов" reflink="/ru/cases" />
        </div>

        </div>
        </div>

      <div className="relative w-full overflow-hidden white112">

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

export default DesignComponentRu;
