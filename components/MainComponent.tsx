'use client';

import React, { useEffect, useRef } from 'react';
import dataArticles from "../utils/dataArticles";
import ServicesItem from './servicesitem/ServicesItem';
import ImageRow from './imagerow/ImageRow';
import AnimatedLink from './animatedlinks/AnimatedLink';
import AnimatedVideoLink from './animatedlinks/AnimatedVideoLink';
import ContactForm from './contact-form/ContactForm';
import ServiceLink from './servicelink/ServiceLink';
import BrandSection from './brandsection/BrandSection';
import MarqueeText from './marqueetext/MarqueeText';
import Testimonials from './testimonials/Testimonials';


const MainComponent = () => {
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
    <div className="relative w-full overflow-hidden">
      <div ref={textContainerRef} id="hero-container"></div>
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100 h-screen">
        <h1 className={'unbounded centered-texts big-padding-top-desc'}>The Web-Machine Agency</h1>
        <h3 className={'centered-texts'}>United technologies of success</h3>
        <div className="image-row-container">
        <div className={'hero-page-bottom-block'}>
        <ImageRow />
        </div>
        </div>
      </div>
   
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10">
        <div className='second-container'>
        <h2 className='h3ash1'>Services</h2>
        <p>Web Machine is an international creative agency which embraces cutting edge technology to solve business challenges 
          through innovation, communication and strategy. Our agency was found in 2013 and since then we’ve provided marketing 
          research and promotion for a wide variety of companies including those in the US and Chinese markets.</p>
          <div className='space20'></div>
          <ServiceLink 
            title="Design"
            description="Our expertise lies in creating elegantly designed websites based on UI/UX principles, 
            focusing on intuitive and straightforward interfaces while staying abreast of current design trends."
            href="/example"
          />
          <ServiceLink 
            title="Web Development"
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
            title="Online advertisement"
            description="We create and customize ads on Google, Facebook, Instagram and YouTube. Grow your business with our 
            digital marketing services."
            href="/example"
          />
        <div className='space20'></div>
        <div className='space20'></div>

        </div>

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
          imgSrc="/images/portfolio/case_carglass.jpeg"
          imgAlt="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="Creation of a website for the Carglass® brand - an international brand of a division of the Belron® Group - a world leader in the field of repair and replacement of automobile glass"
        />
      
        </div>

        <AnimatedVideoLink 
          href="/"
          videoSrcWebm="/movie/case_zplay_light.webm"
          caseText="Case"
          stackArray={["React.js", "Design", "SEO", "Web-development"]}
          titleText="International mobile game developer Zplay: design and website development"
        />

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

        <h2 className='h3ash1'>Publications</h2>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
          {dataArticles.articles.map((article) => (
            <ServicesItem
              article={article}
              key={article.slug}
            >
            </ServicesItem>
          ))}
        </div>
        <ContactForm />

      </div>

    </div>
  );
}

export default MainComponent;