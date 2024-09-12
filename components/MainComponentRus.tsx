'use client';

import React, { useEffect, useRef } from 'react';
import dataArticles from "../utils/dataArticles";
import ServicesItem from './servicesitem/ServicesItem';
import Link from 'next/link';
import AnimatedLink from './animatedlinks/AnimatedLink';
import AnimatedVideoLink from './animatedlinks/AnimatedVideoLink';
import ContactForm from './contact-form/ContactForm';
import ServiceLink from './servicelink/ServiceLink';
import BrandSectionRu from './brandsection/BrandSectionRu';
import MarqueeText from './marqueetext/MarqueeText';
import Testimonials from './testimonials/Testimonials';
import DiscussButtonRu from './buttonletstalk/ButtonLetsTalkRu';
import ImageRow from './imagerow/ImageRow';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';


const MainComponentRus = () => {
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
        <h1 className={'unbounded'}>Мы создаем успешные продукты цифровой эпохи</h1>
        <h4 className={''}>Дизайн, стратегии и технологии для амбициозных компаний</h4>
        
        <div className='space20'></div>
       
        <div className='inline-flex-desc'>
        
        <DiscussButtonRu />
        <div className='projects-clutch'>
        <Link href="/ru/reviews">
        <img src="/clutch_review_unit_black.svg" alt="Clutch Review" />
        </Link>
        </div>
        <div className='projects-num'>
          <Link href="/ru/cases">
            300+ проектов с 2013 года
          </Link>
        </div>
        </div>

      <div className='space20'></div>
      <div className='space20'></div>
      <div className='space20'></div>

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
      
      </div>

      <div className='space20'></div>

      <ImageRow />
      <div className='space80'></div>

</div>


  <div className="relative w-full overflow-hidden white112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <h2 className='h3ash1'>Наши компетенции</h2>
        <p>WEB-MACHINE - международное веб-агентство, которое использует передовые технологии для решения бизнес-задач
с помощью инноваций, коммуникации и стратегии. Наше агентство было основано в 2013 году, и с тех пор мы предоставляем услуги по дизайну, разработке и продвижение для абмизиозных компаний по всему миру</p>
          <div className='space20'></div>
          <ServiceLink
            title="Дизайн"
            description="Создаем яркий и подчеркивающий сильные стороны бренда дизайн на основе исследований, UI/UX и модных трендов"
            href="/ru/design"
          />
          <ServiceLink 
            title="Разработка"
            description="Создаем удобные сайты на основе UI/UX и уникального дизайна, разрабатываем продающие интернет-магазины"
            href="/ru/web-development"
          />
          <ServiceLink 
            title="SEO"
            description="Стратегический маркетинг, поисковое продвижение сайтов на основе маркетинговых исследований"
            href="/ru/seo"
          />
          <ServiceLink 
            title="Реклама"
            description="Создаём и настраиваем рекламу в Google, Facebook, Instagram и в Youtube"
            href="/ru/ads"
          />
        <div className='space60'></div>



      <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/okko_cover_01-min.png"
          imgAlt="Design, technical support and development of sections on the website of the OKKO gas station network"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Design, technical support and development of sections on the website of the OKKO national gas station network"
        />


      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_carglass_cover.jpeg"
          imgAlt="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
        />


          <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/RoganskaVideoPresentation.webm"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Utopia mobile game developer Zplay: design and website development"
        />

          <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/SpaceUnderVideoPresentation.webm"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Utopia mobile game developer Zplay: design and website development"
        />



        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_roganska_cover.png"
          imgAlt="Creation of a website for the Roganska mineral water - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Roganska mineral water"
        />

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_zplay_cover.webm"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_utopia.webm"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Utopia mobile game developer Zplay: design and website development"
        />

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/HyundaiVideoPresentation.webm"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Utopia mobile game developer Zplay: design and website development"
        />

      <AnimatedVideoLink 
          href="/ru/seo-cost-calculator"
          videoSrcWebm="/movie/SEOCostCalculatorVideo.webm"
          caseText="Сервис"
          stackArray={["Typescript", "Node.js", "React.js", "SEO", "Web-development"]}
          titleText="SEO калькулятор онлайн: сервис оценки инвестиций в онлайн маркетинг"
        />
      
        </div>
        

        </div>
        <div className='flex'>
          <CircleDiscussButtonSEORu text="Больше кейсов" reflink="/ru/cases" />
        </div>



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
        <Testimonials />

        <ContactForm />

      </div>
      </div>

    </>
  );
}

export default MainComponentRus;
