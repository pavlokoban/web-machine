'use client';

import React, { useEffect, useRef } from 'react';
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
import Image from 'next/image';


const AuctionComponentRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Разработка аукциона под ключ</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Создание и продвижение аукциона — это разработка особого типа интернет-магазина, который поддерживает функцию ставок, лотов в режиме реального аукциона. Мы предлагаем разработку сайтов-аукционов под ключ в Украине на Laravel, Next.js, Woocommerce
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
     
      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <br></br>
        <div style={{maxWidth: '1200px', margin: 'auto'}}>
        <Image className="border-36" src='/images/portfolio/auction-cover-1.webp' width={1600} height={800} alt='Разработка интернет-аукциона'/>
        </div>
        <br></br>

        </div>
        </div>
        <div className="relative w-full overflow-hidden white112">
        <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        
        <h2>Разработка интернет-аукционов: обзор, платформы, мировой рынок и тренды на 2025-2026 гг.</h2>
            <p>Разработка интернет-аукционов стала популярным направлением в сфере веб-разработки. В рамках услуги по созданию аукционов мы рассмотрим основные аспекты разработки интернет-аукционов, включая их определение, платформы разработки, мировой рынок и актуальные тренды на ближайшие годы.</p>

        <h2>Что такое интернет-аукцион?</h2>
            <p>Интернет-аукцион - это электронная площадка, на которой пользователи могут участвовать в торгах и покупать или продавать товары и услуги. Он предоставляет возможность участникам в режиме реального времени делать ставки и получать информацию о текущем состоянии аукциона.</p>

        <h2>Доля различных платформ, на которых разрабатываются аукционы:</h2>
            <p>Разработка интернет-аукционов может осуществляться на различных платформах. Некоторые из них включают:</p>
            <ul className='spoilerUlStyle'>
                <li>Собственная разработка: Некоторые компании предпочитают разрабатывать свои собственные платформы для интернет-аукционов, чтобы получить максимальную гибкость и контроль над функциональностью и дизайном.</li>
                <li>Популярные CMS: Существуют также готовые системы управления контентом (CMS), такие как WordPress, Magento, WooCommerce, которые предлагают плагины и расширения для создания интернет-аукционов.</li>
                <li>Специализированные платформы: Существуют также специализированные платформы, такие как eBay, Etsy, и Auction.com, которые предоставляют готовое решение для создания и управления интернет-аукционами.</li>
            </ul>

        <h2>Рынок интернет-аукционов в мире</h2>
        <ul className='spoilerUlStyle'>
            <li>Мировой рынок интернет-аукционов является динамично развивающейся сферой. В настоящее время он предлагает огромные возможности для развития бизнеса и привлечения широкой аудитории.</li>
            <li>Рост популярности: Интернет-аукционы становятся все более популярными среди покупателей и продавцов, так как они предлагают удобство, широкий выбор товаров и конкурентные цены.</li>
            <li>Международная конкуренция: С развитием интернет-технологий интернет-аукционы стали доступными для участия со всего мира. Это приводит к увеличению конкуренции между различными платформами и способствует разнообразию товаров и услуг, предлагаемых на аукционах.</li>
            <li>Развитие мобильных технологий: Мобильные устройства играют все более важную роль в современной жизни, и интернет-аукционы не являются исключением.</li>
            <li>Тенденция к использованию мобильных приложений для участия в аукционах растет, и разработка адаптивных и мобильно-дружественных интерфейсов становится необходимостью.</li>
        </ul>

        <h2>Тренды разработки аукционов на 2025-2026 годы</h2>
        <p>Разработка интернет-аукционов продолжает эволюционировать, и вот несколько актуальных трендов, которые можно ожидать в ближайшие годы:</p>
        <ul className='spoilerUlStyle'>
            <li>Интеграция искусственного интеллекта: Искусственный интеллект (ИИ) будет все больше применяться в аукционных платформах для предоставления персонализированных рекомендаций, улучшения процесса подбора и категоризации товаров, а также оптимизации ценовой стратегии.</li>
            <li>Улучшение пользовательского опыта: Основным фокусом разработчиков будет являться создание интуитивно понятных интерфейсов и оптимизация процесса участия в аукционах для обеспечения удобства и удовлетворения потребностей пользователей.</li>
            <li>Расширение географического охвата: Разработчики аукционных платформ будут стремиться расширить географическое охватывание, чтобы привлечь участников со всего мира и предложить им доступ к широкому ассортименту товаров и услуг.</li>
            <li>Безопасность и защита данных: С увеличением онлайн-транзакций и обмена конфиденциальной информацией на аукционах, безопасность и защита данных будут стоять на первом месте. Разработчики будут уделять особое внимание реализации надежных мер безопасности и защите приватности участников онлайн-торгов.</li>
        </ul>
        <p>Как вывод, можно смело утверждать, что данное направление веб-разработки и онлайн-бизнеса является перспективным!</p>
        <br></br>
        <br></br>
        <hr className="servicesHr"></hr>
        <h2 className='h3ash1'>Кейсы по разработке интернет-аукционов</h2>
        <br></br>
        <div style={{maxWidth: '800px', margin: 'auto'}}>
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/auction-cover-2.webp"
          imgAlt="Дизайн и разработка интернет-аукциона для польской компании"
          caseText="Кейс"
          stackArray={["Worpdress", "WooCommerce", "Дизайн", "Разработка"]}
          titleText="Дизайн и разработка интернет-аукциона для польской компании"
        />
        </div>
   
        <div className='flex'>
          <CircleDiscussButtonSEORu text="Кейсы по разработке" reflink="/ru/cases" />
        </div>
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
        <h2 className='h3ash1'>Этапы разработки интернет-аукциона под ключ</h2>
        <p>Предлагаем выгодные условия разработки интернет-аукциона. Вы получаете готовый к работе интернет-аукцион, со всеми инструкциями и доступами. Для разработки интернет-аукционов под ключ мы используем каскадный метод (Waterfall) управления проектом, которая позволяет создать сайт-аукцион в течение 10 недель. В рамках каскадного метода реализуются следующие этапы:</p>
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

export default AuctionComponentRu;