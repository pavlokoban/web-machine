'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import ContactForm from '@/components/contact-form/ContactForm';
import ServiceLink from '@/components/servicelink/ServiceLink';
import BrandSection from '@/components/brandsection/BrandSection';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import Testimonials from '@/components/testimonials/Testimonials';
import DiscussButtonRu from '@/components/buttonletstalk/ButtonLetsTalkRu';
import ImageRow from '@/components/imagerow/ImageRow';
import CostEstimation from '@/components/estimation/Estimation';
import StageSliderDevRu from '@/components/stageslider/StageSliderDevRu';


const DevComponentRus = () => {
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
        <h1 className={'unbounded'}>Создание сайтов</h1>
        <h4 className={''}>Создание сайта — это технология, это искусство, это маркетинг. Разработка сайта - будь то лендинг, или сложный портал или маркетплейс - это инвестиция, благодаря которой Ваш бизнес делает шаг навстречу Вашим клиентам, показывает его сильные стороны и преимущества.
          Разработываем сайты - от лендингов до маркетплейсов (React, Next.js, Wordpress, Woocommerce, Opencart, Laravel).
        </h4>
        
        <div className='space20'></div>
       
        <div className='inline-flex-desc'>
        
        <DiscussButtonRu />
        <div className='projects-clutch'>
        <Link href="/ru/reviews">
        <img src="/clutch_review_tr_ru.svg" alt="Clutch Review" />
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
          <source src="/movie/ShowReelBlue.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      </div>


      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10">
        <div className='second-container'>
        <h2 className='h3ash1'>Услуги</h2>
        <p>Web Machine - международное веб-агентство, которое использует передовые технологии для решения бизнес-задач
с помощью инноваций, коммуникации и стратегии. Наше агентство было основано в 2013 году, и с тех пор мы предоставляем услуги по дизайну, разработке и продвижение для абмизиозных компаний по всему миру</p>
          <div className='space20'></div>
          <ServiceLink
            title="Дизайн"
            description="Our expertise lies in creating elegantly designed websites based on UI/UX principles, 
            focusing on intuitive and straightforward interfaces while staying abreast of current design trends."
            href="/example"
          />
          <ServiceLink 
            title="Разработка"
            description="We specialize in developing corporate websites, online stores, and high-performance aggregators, 
            ensuring that each project combines aesthetic appeal with user-centric functionality by using an advanced 
            technological stack."
            href="/example"
          />
          <ServiceLink 
            title="SEO"
            description="We’re also able to help you with strategic marketing, search engine promotion (SEO) and marketing 
            research. Optimize your website for search engines!"
            href="/example"
          />
          <ServiceLink 
            title="Реклама"
            description="We create and customize ads on Google, Facebook, Instagram and YouTube. Grow your business with our 
            digital marketing services."
            href="/example"
          />
        <div className='space20'></div>
        <div className='space20'></div>
        <div className='space20'></div>
      <ImageRow />
      <div className='space20'></div>

        </div>

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
    <span>Подробнее</span>
  </div>
  <div className="spoiler-content">
    <h3>Тест</h3>
    <p>Это скрытый текст, который будет полезен для SEO. Вы можете добавить сюда любой контент, который нужно скрыть, но при этом оставить его доступным для поисковых систем.</p>
  </div>
</div>


        </div>
        </div>
      <div className="relative w-full overflow-hidden white112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/okko_cover_01-min.png"
          imgAlt="Design, technical support and development of sections on the website of the OKKO gas station network."
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Design, technical support and development of sections on the website of the OKKO gas station network."
        />
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_roganska_cover.png"
          imgAlt="Creation of a website for the Roganska mineral water - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Roganska mineral water"
        />

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_legal_cover.webm"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

<AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_zplay_cover.webm"
          caseText="Кейс"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

      <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_carglass.webm"
          caseText="Кейс"
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
      
        </div>



      <h2 className='h3ash1'>Этапы разработки сайта</h2>
      <p>Разрабатываем сайты и проектируем веб-интерфейсы с 2013 года, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.</p>
      <p>Создали более 100 сайтов в различных тематиках и нишах.</p>
      <div className='space20'></div>
      <StageSliderDevRu />
      <div className='space20'></div>
      <div className='space20'></div>
      </div>

      <MarqueeText />

        <div className='relative z-0 blackblock mx-auto p-10 px-10 m-10'>
          <div className='fake-container'>
          <h2 className='h3ash1'>Think Big!</h2>
          <BrandSection />
          <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '-250px'}}>
          <video 
                width="100%" 
                height="auto" 
                autoPlay 
                loop 
                muted 
                playsInline 
                controls={false}
              >
                <source src="/movie/ThinkBig.webm" type="video/webm" />
                Your browser does not support the video tag.
        </video>
        </div>
          </div>
        </div>

        <div id="content-container" className='relative z-0 container mx-auto p-10 px-10 m-10'>
        <h2 className='h3ash1'>Testimonials</h2>
        <Testimonials />

        <CostEstimation />

      </div>
      </div>

    </>
  );
}

export default DevComponentRus;
