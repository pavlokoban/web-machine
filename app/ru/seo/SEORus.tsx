'use client';

import { headers } from 'next/headers';
import Head from 'next/head';
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactForm from '@/components/contact-form/ContactForm';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import ServiceLink from '@/components/servicelink/ServiceLink';
import BrandSection from '@/components/brandsection/BrandSection';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import Testimonials from '@/components/testimonials/Testimonials';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import ImageRow from '@/components/imagerow/ImageRow';
import CostEstimation from '@/components/estimation/Estimation';
import StageSliderDevRu from '@/components/stageslider/StageSliderDevRu';
import CountUp from 'react-countup';


const SEORus = () => {
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
        <h1 className={'unbounded centered-texts'}>Продвижение сайтов (SEO)</h1>
        <h4 className={'centered-texts sub-title-service-texts'}>Продвижение сайта — это процесс, который включает в себя комплекс мероприятий по внутренней SEO оптимизации и набор действий, направленных на повышение видимости сайта в поисковой системе Google. Таким образом, поисковое продвижение сайтов заключается в систематическом повышении качества страниц и их релевантности поисковым запросам целевых пользователей. Также следует отметить, что раскрутка сайта — это один из самых высокорентабельных инструментов интернет-маркетинга и развития бизнеса онлайн, в частности электронной коммерции.
        </h4>
        
        <div className='space20'></div>
       
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от <CountUp start={19000} end={11200} duration={2} separator={" "} /> грн/мес.</p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={12} end={6} duration={2} /> мес.</p>
        </div>

        </div>
        <div className='inline-flex-desc'>
        
        <CircleDiscussButtonSEORu reflink="/ru/contact" />


        </div>


      <div className='space20'></div>

      
      </div>
      <MarqueeText />


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
          imgSrc="/images/portfolio/case_carglass_cover.jpeg"
          imgAlt="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
        />
      
        </div>

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_zplay_cover.webm"
          videoSrcMp4="/movie/case_zplay_cover.mp4"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

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
          </div>
        </div>

        <div id="content-container" className='relative z-0 container mx-auto p-10 px-10 m-10'>
        <h2 className='h3ash1'>Testimonials</h2>
        <Testimonials />

<div itemScope itemType="https://schema.org/FAQPage">
    <h2 itemProp="name" className="h3ash1">FAQ по продвижению сайта</h2>
    <div style={{ margin: 'auto', padding: '0 7%', maxWidth: '1200px' }}>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько стоит продвижение сайта?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ На цену продвижения сайта влияет много факторов, среди которых уровень конкуренции в нише, необходимость создания специализированного контента, внешнее продвижение и текущие SEO показатели сайта.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Какие гарантии на SEO продвижение сайта?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ В классическом понимании, в SEO нет гарантий на результаты, тем не менее мы предлагаем два варианта сотрудничества: раскрутка сайта по определенным ключам с гарантиями, и продвижение сайта по широкой семантике. С точки зрения гарантий предпочтителен первый вариант, тем не менее по стоимости привлечения лида и количеству конверсий выигрывает второй. 90% наших клиентов работают по широкой семантике.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько нужно времени, чтобы вывести сайт в ТОП?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ Сроки раскрутки сайта и выведения его в ТОП, как и в случае со стоимостью, определяются исходя из текущих SEO параметров, бюджетов, целей и задач, а также конкуренции в нише, но как правило, первые результаты видны через 3-4 мес.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        <CostEstimation />

      </div>
      </div>
    </>
  );
};

export default SEORus;


