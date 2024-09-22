'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import StageSliderSeoRu from '@/components/stageslider/StageSliderSeoRu';
import CountUp from 'react-countup';
import PolygonWithPointsRu from '@/components/dynamicdiamond/DynamicDiamondRu';


const SEOOnlineStoreRu = () => {
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
        <h1 className={'unbounded centered-texts'}>Раскрутка интернет-магазина</h1>
        <h4 className={'centered-texts sub-title-service-texts'}>SEO продвижение интернет-магазина — это поисковая оптимизация товарных категорий, самих товаров, которых может быть десятки тысяч, а также прочих разделов интернет-магазина под конверсионные геозависимые запросы потенциальных покупателей. Продвижение интернет-магазинов ввиду высокой конкуренции в большинстве рыночных ниш требует кропотливой работы. Также раскрутка интернет-магазина предполагает смежные работы с отзывами, проработку UX/UI и PPC.</h4>
        <div className='space20'></div>
       
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от <CountUp start={1000} end={500} duration={2} separator={" "} /> $/мес.</p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={15} end={8} duration={2} /> мес.</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>
    
    
      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Раскрутка интернет-магазина — основы</h2>
        <p>SEO оптимизация — это сложный и трудоёмкий процесс.<br></br>
        В нашей компании для раскрутки интернет-магазинов мы прорабатываем 10 основных направлений:</p>
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
    <span>Подробнее о раскрутке интернет-магазинов</span>
  </div>
  <div className="spoiler-content">
  <h2>Особенности комплексного продвижения интернет-магазина</h2>
  <p>Особенности раскрутки интернет-магазинов (e-commerce проектов) — инструменты, KPI, методы, советы, приёмы. Какие гарантии, а также сроки и цены на продвижение интернет-магазина в Киеве и Харькове? Что мы предлагаем для e-commerce проектов и чем это отличается от классического SEO?</p>
<p>Агентство Интернет-маркетинга WEB-MACHINE предлагает качественную раскрутку интернет-магазинов — от $500 в мес. при ориентировочных сроках — от 6-12 мес. (стоимость зависит от многих факторов, включая цели и задачи, уровень конкуренции и исходную степень оптимизации и позиций). Предоставляем гарантии на результат SEO раскрутки интернет-магазина в договоре.</p>
<p>В чем основное отличие раскрутки интернет-магазина от обычного <a title="Продвижение сайта (SEO) — это комплексный процесс повышения позиций сайта в поисковых системах." href="/ru/seo">продвижения сайтов</a>? Прежде всего, следует понимать то, что каждая страница на сайте должна быть максимально продающей и при этом легкой для понимания посетителя (без перегруза), а также необходимо внедрение нескольких явных, но в то же время уникальных решений именно для конкретного случая:</p>
    <ul className='spoilerUlStyle'>
        <li>от главной страницы до страницы оформления заказа посетитель должен идти по воронке продажи к осуществлению покупки;</li>
        <li>в самых доступных местах сайта должны быть представлены выгоды покупки именно в Вашем интернет-магазине;</li>
        <li>сервис. Этот пункт пожалуй один из самых актуальных в работе магазина. Каждый клиент должен чувствовать что его сопровождают специалисты и на его вопросы всегда найдутся ответы;</li>
        <li>ценовая политика и акционные предложения. Если правильно структурировать этот момент, то помимо продаж Вы можете получить еще и лояльных и постоянных клиентов.</li>
    </ul>
<p>Раскрутка интернет-магазина – трудоемкий и сложный процесс оптимизации ресурса и повышения его конверсионности возведенный в степень сложности тематики ресурса.</p>
<h2>Структура оптимизации и продвижения интернет-магазина:</h2>
<p>Изучение и анализ прямых конкурентов и аналогичных магазинов с целью улучшения сервиса магазина</p>
<p>Доработка логики и структуры интернет-магазина с целью повышения удобства пользования ресурсом его целевой аудитории</p>
<p>SEO-оптимизация инетрнет-магазина под широкую семантику и длиннохвостные запросы</p>
<p>Внедрение программных решений для настройки Google Ads, в том числе ремаркетинга и товарной рекламы</p>
<h2>Что мы предлагаем при продвижении интернет-магазинов в Киеве и Харькове?</h2>
<p>Для достижения максимальной эффективности при раскрутке интернет-магазина важно прокачивать ресурс по всем нижеуказанным пунктам. Данные работы входят в состав работ по продвижению интернет-магазинов в Киеве и Харькове:</p>
        <ol className='spoilerUlStyle'>
                <li>Составление широкого семантического ядра</li>
                <li>Уникализация текстового содержания всех страниц интернет-магазина</li>
                <li>Изучение конкурентной среды</li>
                <li>Анализ и внедрение конкурентных преимуществ на интернет-магазин</li>
                <li>Технический аудит ресурса с последующими правками в коде и тех. файлах</li>
                <li>Оптимизация категорий ресурса</li>
                <li>Внедрение лидо-генераторов на страницы интернет-магазина, в том числе лид-магниты</li>
                <li>Привлечение трафика из дополнительных источников</li>
                <li>Аналитика и повышение процента конверсии</li>
                <li>Mystery-Shopper. Аудит уровня сервиса интернет-магазина</li>
                <li>Повышение продаж. В составе продвижения интернет-магазина мы стремимся к увеличению показателя ROMI</li>
        </ol>
<h2>Возможные сроки раскрутки интернет-магазина?</h2>
<p>Раскрутка интернет-магазинов — это долговременный процесс постоянного улучшения качества площадки по множеству различных факторов. Целью этого процесса является повышение уровня продаж, и соответственно постоянное развитие и раскрутка интернет-магазина, как самостоятельного канала сбыта для Вашей компании. В зависимости от географического охвата и сложности (уровня конкуренции в тематике) срок активной фазы продвижения интернет-магазина может варьироваться от 6 месяцев до 1го года и более. Также не стоит забывать, что в современных условиях рынка — конкуренция возрастает каждый день и важно не отставать от своих конкурентов и постоянно держать руку на пульсе рынка. Для того, чтобы не пропустить важный момент необходимо разрабатывать долговременную стратегию раскрутки интернет-магазина и придерживаться её с возможными корректировками в условиях изменения рынка.</p>
<h2>Примеры результатов раскрутки интернет-магазинов в Киев, Харькове</h2>
<ul className='spoilerUlStyle'>
<li>Продвижение интернет-магазина LUXEL: рост видимости с 0% до 22% в конкурентной нише</li>
<li>SEO и UI/UX интернет-магазина IKEA-MARKET: рост видимости в 2,5 раза (+145%) за 6 мес.</li>
<li>Продвижение интернет-магазина PALVIRA: рост 471% посетителей в мес. за 6 мес.</li>
<li>Продвижение интернет-магазина MIRAX-STYLE: 57% запросов - в ТОП-10 (Google)</li>
</ul>



<div itemScope itemType="https://schema.org/FAQPage">
    <h2 itemProp="name" className="h3ash1">Частые вопросы по раскрутке интернет-магазина</h2>
    <div style={{ margin: 'auto', padding: '0 7%', maxWidth: '1200px' }}>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько стоит продвижение интернет-магазина?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ На цену продвижения интернет-магазина влияет много факторов, среди которых уровень конкуренции в нише, необходимость создания специализированного контента, внешнее продвижение и текущие SEO показатели интернет-магазина.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Влияет ли на цену продвижения интернет-магазина количество товаров?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ Как правило, на стоимость продвижения интернет-магазина количество товаров не влияет, кроме случаев, когда интернет-магазин не использует CMS или фреймворк и не имеет возможности программных внедрений, либо необходимо создание расширенного контентного наполнения для каждого товара. В таких случаях стоимость может быть выше.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько нужно времени, чтобы вывести интернет-магазин в ТОП?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ Сроки раскрутки интернет-магазина и выведения его в ТОП, как и в случае со стоимостью, определяются исходя из текущих SEO параметров, бюджетов, целей и задач, а также конкуренции в нише.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




</div>
  </div>

      </div>
      </div>
      </div>


      <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Кейсы по продвижению интернет-магазинов</h2>
    <p>Изучите примеры достигнутых результатов по SEO оптимизации сайтов. В целом нами выполнено более 300 кампаний по интернет-маркетингу и продвижению сайтов, среди которых оптовые и розничные интернет-магазины, IT-компании, производственные компании, медицинские центры, торговые компании, предприятия общественного питания.</p>
      <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/dvermanseo2.png"
          imgAlt="Раскрутка интернет-магазина дверей: 90 высокочастотных ключей в ТОП-10"
          caseText="SEO кейс"
          stackArray={["SEO"]}
          titleText="Раскрутка интернет-магазина дверей: 90 высокочастотных ключей в ТОП-10"
        />

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/prom-ua.jpg"
          imgAlt="Раскрутка интернет-магазина на Prom.ua"
          caseText="SEO кейс"
          stackArray={["Prom", "SEO"]}
          titleText="Раскрутка интернет-магазина на Prom.ua: рост трафика - 602%, рост конверсий - 327%, рост видимости сайта: 507% по Украине"
        />
      </div>

<div className={'desc-col-2-50-mob-1-100'}>

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_toptv_cover.png"
          imgAlt="Интернет-магазин TopTV: SEO, продвижение, раскрутка сайта"
          caseText="SEO кейс"
          stackArray={["Реклама", "Дизайн", "SEO", "Разработка"]}
          titleText="Раскрутка интернет магазина бытовой техники TopTV. Результаты - рост конверсий: 523%, рост трафика: 221%, рост видимости в поисковой системе Google: 131%"
        />

        <AnimatedVideoLink 
          href="/ru/seo-cost-calculator"
          videoSrcWebm="/movie/SEOCostCalculatorVideo.webm"
          caseText="SEO сервис"
          stackArray={["Typescript", "Node.js", "React.js", "SEO", "Разработка"]}
          titleText="SEO калькулятор онлайн: сервис оценки инвестиций в онлайн маркетинг"
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
                <h2 className='h3ash1'>Опыт отраслевого продвижения интернет-магазинов</h2>
                <p>Определяем правильную стратегию продвижения интернет-магазина прежде всего на основе отраслевой принадлежности и аудите рыночной конъюнктуры.</p>
                <div className='space40'></div>
                <div className='descCol4Mob1'>
                  <div>
                  <ul className='spoilerUlStyle'>
                      <li>Продвижение интернет-магазинов оборудования</li>
                      <li>Раскрутка магазинов бытовой техники</li>
                      <li>Продвижение магазинов люксовых вещей</li>
                      </ul>
                  </div>
                  <div>
                    <ul className='spoilerUlStyle'>
                    <li>Продвижение товаров для дома и офиса</li>
                    <li>Раскрутка медицинских интернет-магазинов</li>
                    <li>Раскрутка магазинов автотематики</li>
                    </ul>
                  </div>
                  <div>
                  <ul className='spoilerUlStyle'>
                  <li>Раскрутка магазинов для ремонта и строительства</li>
                      <li>Раскрутка магазинов запчастей</li>
                      <li>Раскрутка товаров для развлечения и спорта</li>
                      </ul>
                  </div>
                  <div>
                  <ul className='spoilerUlStyle'>
                  <li>Раскрутка магазина детских товаров</li>
                    <li>Продвижение зоотоваров</li>
                    <li>Раскрутка магазинов с товарами для красоты и здоровья</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>


<div className="relative w-full overflow-hidden white112">
<div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <h2 className='h3ash1'>Этапы раскрутки интернет-магазина</h2>
      <p>Продвигаем интернет-магазины на основе маркетинговых целей клиента и технического аудита. В рамках SEO-стратегии реализуются следующие этапы:</p>
      <div className='space20'></div>
      <StageSliderSeoRu />
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

export default SEOOnlineStoreRu;


