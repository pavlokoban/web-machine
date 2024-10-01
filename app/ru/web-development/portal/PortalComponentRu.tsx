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


const PortalComponentRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Разработка интернет-портала под ключ</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Создание и продвижение интернет-порталов — это создание платформы, объединяющей большое количество полезных функций, сервисов для целевой аудитории, например, новостной сайт, B2B портал, портал сообщества, сайты знакомств, порталы по поиску работы, туристические порталы, образовательные, а также правительственные веб-порталы и порталы государственных служб. У нас Вы можете заказать разработку веб-портала под ключ в Украине на базе программных платформ Laravel, Next.js, Woocommerce/Wordpress (для этапа MVP и тестирования модели)
        </h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={12000} end={4200} duration={2} separator={" "} /></p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={16} end={10} duration={3} /> нед.</p>
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
    <h2 className='h3ash1'>Примеры создания агрегаторов и маркетплейс</h2>
    <p>Для успешной онлайн торговли мы создаем сайты, которые показывают хорошие цифры — высокую конверсию и быстрое продвижение. Мы разработали 100+ интернет-магазинов, маркетплейс, порталов и агрегаторов в различных рыночных нишах на основе отраслевых стандартов и понимания целевой аудитории.</p>
      <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/lg-cover-1.jpg"
          imgAlt="Разработка иммиграционного портала LegalGrounds"
          caseText="Кейс"
          stackArray={["Дизайн", "Разработка"]}
          titleText="Разработка иммиграционного портала LegalGrounds"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/bus365-sozdanie-saita.jpg"
          imgAlt="Создание портала покупки билетов и его продвижение"
          caseText="Кейс"
          stackArray={["Wordpress", "Дизайн", "PPC", "Разработка"]}
          titleText="Создание портала покупки билетов и его продвижение"
        />
    
        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
         <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/job-agregator-min.jpg"
          imgAlt="Разработка нишевого портала вакансий MeridianNurse"
          caseText="Кейс"
          stackArray={["Worpdress", "Дизайн", "Разработка"]}
          titleText="Разработка нишевого портала вакансий MeridianNurse"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_health_ua.webp"
          imgAlt="Разработка медицинского портала"
          caseText="Кейс"
          stackArray={["Дизайн", "Разработка"]}
          titleText="Разработка медицинского портала"
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
        <h2 className='h3ash1'>Этапы разработки интернет-портала под ключ</h2>
        <p>Предлагаем выгодные варианты разработки веб-порталов. Вы получаете готовый к онлайн портал, со всеми инструкциями и доступами. Для разработки интернет-порталов под ключ мы используем каскадный метод (Waterfall) управления проектом, которая позволяет создать сайт портала в течение 10 недель. В рамках каскадного метода реализуются следующие этапы:</p>
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

export default PortalComponentRu;