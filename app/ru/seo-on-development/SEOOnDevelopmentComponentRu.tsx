'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import ServiceLink from '@/components/servicelink/ServiceLink';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import ImageRow from '@/components/imagerow/ImageRow';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import StageSliderSeoOnDevelopmentRu from '@/components/stageslider/StageSliderSeoOnDevelopmentRu';
import CountUp from 'react-countup';
import PolygonWithPointsRu from '@/components/dynamicdiamond/DynamicDiamondRu';


const SEOOnDevelopmentComponentRu = () => {
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
        <h1 className={'unbounded centered-texts'}>Оптимизация сайта на этапе разработки</h1>
        <h4 className={'centered-texts sub-title-service-texts'}>SEO оптимизация сайтов на этапе разработки — возможность сэкономить время и финансы для успешного и результативного продвижения проекта, так как SEO на этапе создания сайта — это процесс подготовки проекта к дальнейшему быстрому продвижению: устранение гипотетических проблем, создание правильной структуры и внедрение передовых SEO технологий.</h4>
        
        <div className='space20'></div>
       
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от <CountUp start={690} end={700} duration={2} separator={" "} /> $/мес.</p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={20} end={10} duration={2} /> недель</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>
    
    
      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>SEO оптимизация сайта — 10 основ</h2>
        <p>Оптимизация на этапе разработки — это сложный и трудоёмкий процесс, как и SEO в целом.<br></br>
        В нашей компании для SEO оптимизации сайтов мы прорабатываем 10 основных направлений:</p>
      <PolygonWithPointsRu />

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
    <span>Подробнее о SEO на этапе разработки</span>
  </div>
  <div className="spoiler-content">
  <h2>Зачем нужно SEO на этапе разработки?</h2>
    <ul className='spoilerUlStyle'>
        <li>Экономия времени</li>
        <li>Экономия денег</li>
        <li>Сохранение позиций и наработок старого сайта (если разрабатываете новый)</li>
         </ul>

<h2>SEO на этапе разработки: правильный фундамент сайта</h2>
<p>Предприниматели и маркетологи давно знают — прошли те времена, когда для успешности проекта было достаточно сначала сделать, оптимизировать сайт, и затем просто закупить ссылки. И с истинным качеством сайта не заморачивались, а исходили из собственных представлений, каким сайт должен быть (возможно, с красными буквами на зеленом фоне и приветливо мигающей анимацией). Один программист, бюджет на закупку ссылок и цель - расположение сайта в ТОПе - достигнута. А рынок насыщался, поисковые системы умнели и старые методы оказались не просто неэффективными, а вредоносными. Сайты под фильтрами, владельцы сайтов в размышлениях - как заново развернуть бизнес в полный рост в Интернете? Простое решение - заказать новый сайт. Вот только результаты слабые, сайт не на первой и даже не второй странице выдачи.</p>
<p>А почему?</p>
<p>Изменилось всё: сайт должен быть полезным и интересным пользователю, грамотным с точки зрения поисковых систем, цель быть в ТОПе перешла в - увеличить объем продаж. И для этого требуется совершенно иной подход при продвижении сайта.</p>
<p>Наша задача как маркетингового агентства - помочь клиентскому проекту утвердиться в своей нише на рынке и правильно его представить пользователям.</p>

<p>Поэтому если вы нацелены на получение клиентов и продажи с первого дня запуска, нужно подходить к вопросу создания сайта разумно. Для начала нужно ответить на вопрос: зачем нужен сайт - сайт ради сайта или сайт, представляющий компанию и полезный пользователю?</p>

<p>Если вам нужен современный полезный ресурс, то стоит рассматривать следующий путь:</p>
<ol className='spoilerOlStyle'>
<li>Постановка целей проекта, анализ конкурентной ниши и целевой аудитории.</li>
<li>Определение маркетингового плана.</li>
<li>Проектирование архитектуры ресурса.</li>
<li>Выбор платформы (CMS, фреймворк или Saas) и создание сайта.</li>
<li>На этапе разработки сайта уже подключать SEO. Тогда на выходе получится оптимизированный сайт, готовый к дальнейшему продвижению.</li>
<li>Иначе говоря, правильный подход - это не сделать сайт ради сайта, а создать качественную онлайн-витрину вашего бизнеса.</li>
</ol>
<p>Для получения положительной динамики развития проекта необходимо работать в различных направлениях, по-настоящему улучшая сайт. Внимание необходимо уделить, в том числе, проработке удобства навигации и визуального восприятия, удобству контактных форм, логичным и интуитивно-понятным элементам воронки продаж (в сравнение, добавить в корзину, оформление покупки).</p>

<h2>Суть SEO на этапе разработки</h2>
<p>Суть в том, чтобы с самого начала сделать все правильно и качественно. Сайт необходимо создавать с учетом требований поисковой системы к интернет-ресурсам, делать их понятными поисковым роботам и полезными пользователям. Оптимизация сайта на этапе разработки при согласованной работе специалистов двух направлений на выходе позволяет получить добротный качественный сайт, готовый для SEO-продвижения и запуска кампаний контекстной рекламы.</p>

<h2>Зачем еще подключать SEO в процессе создания нового ресурса?</h2>
<p>Когда вы хотите создать новый сайт, но не потерять наработки устаревшего. SEO- специалист поможет сделать это грамотно с минимальным проседаниям трафика, который вернется на прежний уровень в сжатые сроки после переноса и переиндексации сайта (перенести историю старого сайта). Из опыта: оплата работы специалиста ниже, чем затраты на мероприятия по достижению прежнего уровня трафика при неправильном переносе. Не говоря уже о потерях времени, которое разумнее расходовать на повышение объема трафика и конверсионности ресурса.</p>
<p>Когда вы уже сталкивались с ситуацией бесконечного внесения правок, исправления ошибок и недочетов в работе существующего сайта, когда SEO-специалист рекомендует перекраивать текущий сайт для повышения его эффективности. Ведь хочется получить в результате готовый продукт, который будет привлекать целевых пользователей и конвертировать их!</p>
<p>Подводя итог, если в процессе разработки нового сайта подключить SEO и правильно проработать важные моменты внутренней оптимизации, то после запуска проекта рост трафика и выход на первые позиции выдачи будут ощутимо динамичнее. Поисковая система буквально с первой индексации оценит качество ресурса и будет рекомендовать его как полезный посетителям. При условии разработки сайта с учетом SEO-рекомендаций после запуска проекта специалисты занимаются непосредственно продвижением: аналитикой, работой с внутренними, внешними и поведенческими факторами и ведут работу по увеличению конверсионности страниц.</p>


  </div>
  </div>

      </div>
      </div>
      </div>

      <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Кейсы по SEO оптимизации сайтов</h2>
    <p>С 2013 года работаем по разработке сайтов и их продвижении. Важно отметить, что в подавляющем большинстве в состав работ по созданию сайтов включался блок SEO оптимизации на этапе разработки.</p>
      <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_toptv_cover.png"
          imgAlt="Интернет-магазин TopTV: SEO, продвижение, раскрутка сайта"
          caseText="SEO кейс"
          stackArray={["Реклама", "Дизайн", "SEO", "Разработка"]}
          titleText="SEO продвижение сайта бытовой техники TopTV. Результаты - рост конверсий: 523%, рост трафика: 221%, рост видимости в поисковой системе Google: 131%"
        />

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/spetslaw-1.jpg"
          imgAlt="Раскрутка сайта для адвокатов из Нью-Йорка и продвижение юридических услуг в США"
          caseText="SEO кейс"
          stackArray={["Реклама", "Дизайн", "SEO", "Разработка"]}
          titleText="Разработка сайта для адвокатов из Нью-Йорка и продвижение юридических услуг в США"
        />
      </div>

<div className={'desc-col-2-50-mob-1-100'}>

        <AnimatedVideoLink 
          href="/ru/seo-cost-calculator"
          videoSrcWebm="/movie/SEOCostCalculatorVideo.webm"
          caseText="SEO сервис"
          stackArray={["Typescript", "Node.js", "React.js", "SEO", "Разработка"]}
          titleText="SEO калькулятор онлайн: сервис оценки инвестиций в онлайн маркетинг"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/stomatolog-demo-min.jpg"
          imgAlt="SEO продвижение сайта стоматологии, продвижение в Google-картах"
          caseText="SEO кейс"
          stackArray={["SEO", "Google-карты"]}
          titleText="Продвижение сайта стоматологии, продвижение в Google-картах. Результаты SEO: рост целевого трафика в 7 раз за 6 месяцев."
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
                <h2 className='h3ash1'>Опыт отраслевого продвижения сайтов</h2>
                <p>Определяем правильную стратегию продвижения прежде всего на основе отраслевой принадлежности и аудите рыночной конъюнктуры.</p>
                <div className='space40'></div>
                <div className='descCol4Mob1'>
                  <div>
                  <ul className='spoilerUlStyle'>
                      <li>Продвижение интернет-магазинов</li>
                      <li>Раскрутка сайта IT-компаний</li>
                      <li>Продвижение стартапов</li>
                      <li>Продвижение сайтов строительных компаний</li>
                      </ul>
                  </div>
                  <div>
                    <ul className='spoilerUlStyle'>
                    <li>Продвижение товаров для дома и офиса</li>
                    <li>Раскрутка сайтов B2B-компаний</li>
                    <li>Раскрутка студий дизайна</li>
                    <li>Раскрутка салон красоты</li>
                    </ul>
                  </div>
                  <div>
                  <ul className='spoilerUlStyle'>
                  <li>Продвижение медицинских сайтов</li>
                      <li>Продвижение автомобильных сайтов</li>
                      <li>Продвижение финансовых компаний</li>
                      <li>Раскрутка магазинов одежды</li>
                      </ul>
                  </div>
                  <div>
                  <ul className='spoilerUlStyle'>
                  <li>Продвижение юридических компаний</li>
                    <li>Продвижение ресторанов и кафе</li>
                    <li>Туристические компании</li>
                    <li>Продвижение строительного бизнеса</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>


<div className="relative w-full overflow-hidden white112">
<div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <h2 className='h3ash1'>Этапы SEO оптимизации сайта на этапе разработки</h2>
      <p>Для успешной оптимизации сайта на этапе разработки мы проводим работы согласно следующим этапам:</p>
      <div className='space20'></div>
      <StageSliderSeoOnDevelopmentRu />
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
};

export default SEOOnDevelopmentComponentRu;