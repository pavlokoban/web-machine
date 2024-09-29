'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import ImageRow from '@/components/imagerow/ImageRow';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import PricingPlansRu from '@/components/pricingplans/PricingPlansRu';
import PricingSEOPlansRu from '@/components/pricingplans/PricingSEOPlansRu';


const ServicesRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Услуги компании: цены и сроки</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Стоимость услуг и сроки определяются в каждом конкретном случае индивидуально на основе технического задания. Ниже представлены минимальный ценовой порог по кажому из предлагаемых услуг.</h4>
      <div className='space60'></div>
    <div className='flex'>
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />
    </div>

    <hr style={{border: '1px dashed #00000021'}}></hr>
      <div className='space40'></div>
      <ImageRow />      
      </div>

      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Разработка: цены и сроки</h2>
        <p>Оказываем широкий спектр услуг по разработке — от дизайна до сложных программных внедрений.</p>
          <div className='space40'></div>

          <PricingPlansRu />

          <div className='space40'></div>

          <h2 className='h3ash1'>Интернет-маркетинг: цены и сроки</h2>
        <p>Оказываем полный спектр услуг по сопровождению бизнеса онлайн: от исследований — до внедрения стратегии маркетинга</p>
          <div className='space40'></div>

          <PricingSEOPlansRu />

        
</div>
        </div>

        </div>

    
    <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Некоторые кейсы</h2>
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

export default ServicesRu;
