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
      <h1 className={'unbounded centered-texts'}>Создание сайтов</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Создание сайта — это технология, это искусство, это маркетинг. Разработка сайта - будь то лендинг, или сложный портал или маркетплейс - это инвестиция, благодаря которой Ваш бизнес делает шаг навстречу Вашим клиентам, показывает его сильные стороны и преимущества.
          Разработываем сайты - от лендингов до маркетплейсов (React, Next.js, Wordpress, Woocommerce, Opencart, Laravel).
        </h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={12000} end={2600} duration={2} separator={" "} /></p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={16} end={2} duration={8} /> мес.</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>

      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Цены на разработку сайта</h2>
        <p>В зависимости от целей и задач, могут быть разные варианты реализации. От промо-лендингов до маркетплейсов и порталов, также существуют различные программные решения и используемые платформы, такие как <a className="a-under" href="/ru/web-development/wordpress" title="Разработка сайтов на Wordpress">Wordpress</a>, <a className="a-under" href="/ru/web-development/react-next-js" title="Разработка сайтов на React/Next JS">React, Next</a>, <a className="a-under" href="/ru/web-development/opencart" title="Разработка сайтов на Ocstore/Opencart">Opencart</a>, Shopify, <a className="a-under" href="/ru/web-development/laravel" title="Разработка сайтов на Laravel">Laravel</a> и прочие.</p>
          <div className='space40'></div>

          <PricingPlansRu />

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
  <h2>Создание сайтов в Киеве, Харькове, Днепре, Одессе</h2>
<p>Разработка сайтов любой сложности — от небольших лендингов до масштабных порталов и интернет-магазинов. Цена создания сайтов — от $1600.</p>
<p>Заказать разработку сайта и веб-дизайн в Киеве, Харькове, Днепре, Одессе, Львове, а также в других городах Украины Вы можете оставив заявку на изготовление веб-сайта с помощью формы обратной связи внизу страницы.</p>
<h2>Разработка сайта: обзор рынка</h2>
<p>Всё больше и больше потребителей ищут информацию в сети Интернет, и всё больше из них совершают покупки товаров и услуг онлайн. Поэтому в Ваших интересах сделать так, чтобы Ваша интернет-представленность в среде целевой аудитории была максимальной. Наша веб-студия разрабатывает сайты для украинских и международных клиентов на основе маркетинговой концепции, которая базируется на преимуществах Вашего бизнеса и учитывает изменения тенденций и трендов рынка. В этом и заключается наша стратегия создания сайтов. Также мы понимаем важность процесса разработки и поэтому делаем каждый сайт как для себя.</p>
<h3>Маркетинговые цели при изготовлении сайтов на заказ</h3>
<p>В агентстве интернет-маркетинга WEB-MACHINE Вы можете заказать создание сайта в Харькове, Киеве под ключ высокого качества для различных маркетинговых целей:</p>
  <ul className='spoilerUlStyle'>
    <li>лендинг (landing page)</li>
    <li>сайт-визитка</li>
    <li>корпоративный сайт</li>
    <li>сайт-каталог</li>
    <li>интернет-магазин</li>
    <li>маркетплейсы и сайты-агрегаторы</li>
    <li>портал.</li>
  </ul>
<p>Благодаря тому, что мы погружаемся в Ваш бизнес, мы можем рекомендовать ту или иную концепцию, эффективность которой проверена на практике. Существует большое количество готовых продуктивных решений для эффективного создания сайта, подтвержденных многолетними A/B тестами. Мы предлагаем маркетинговые решения и те, которые Вы утверждаете, закрепляются в техническом задании на разработку сайта. Наша компетенция в онлайн маркетинге подтверждается тем фактом, что мы является сертифицированными партнёром Google.</p>
<h3>Технологии разработки сайтов</h3>
<p>Касательно технологий создания сайтов, то мы работаем с PHP, MySQL, HTML/CSS, JS/JQ, AJAX. Комплексное использование решений гарантирует грамотную интеграцию веб-инструментов с бизнес-проектом.</p>
<p>Решив заказать разработку сайтов у нас, Вы нанимаете проверенную команду профессионалов, среди которых влюбленные в свою работу и опытные маркетологи, иллюстраторы и программисты.</p>
<p>Создание сайтов в Харькове, Киеве под ключ в «WEB-MACHINE» включает в себя спектр услуг по маркетинговому консалтингу, веб-аналитике, созданию уникального дизайна, а также разработке масштабируемой структуры и дальнейшего грамотного наполнения и <a title="Раскрутка сайта и SEO оптимизация" href="/ru/seo">продвижения сайта</a>.</p>
<h2>Из чего складывается цена разработки сайта?</h2>
<p>Часто мы слышим вопрос от наших потенциальных и текущих клиентов о том, как формируется цена на разработку сайта, откуда такая большая разница в сметах и ценах на рынке веб-дизайна? Нам нечего скрывать и мы готовы предоставить подробную смету ценообразования на создание сайтов, какие работы мы считаем необходимыми, каких специалистов необходимо привлечь и какой разработка какого функционала может также влиять на стоимость. Мы уверены, что это позволит Вам более основательно оценить предложения различных компаний и веб-разработчиков, а также в дальнейшем оценить эффективность маркетинговых инвестиций.</p>
<p>Цена на изготовление сайта в Киеве и Харькове стартует от эквивалента $1600 на сайт-визитку.</p>
<p>Цена создания интернет-магазинов и сайтов-каталогов — от $3000.</p>
<h3>Почему цена на изготовление более сложных веб-проектов выше?</h3>
<p>Стоимость разработки интернет-магазинов и порталов выше, так как сметные объемы работ значительно выше, и включают в себя такие работы, как:</p>
  <ul className='spoilerUlStyle'>
    <li>Маркетинговые анализ рыночной ниши (определение целевой аудитории и анализ основных конкурентов)</li>
    <li>Графический дизайн</li>
    <li>Верстка</li>
    <li>Программирование</li>
    <li>Веб-администрирование (размещение материалов, обновление/установка плагинов, перенос информации/сайтов)</li>
    <li>SEO (оптимизация на этапе разработки)</li>
  </ul>
<p>Сайты создаются на базе различных платформ (CMS) в зависимости от маркетинговых задач, и необходимые функциональные расширения на них также могут влиять на финальную смету проекта.</p>

<h2>Цена и сроки разработки сайтов</h2>
<p>Цена создания сайта — от $1600 (эквивалент в грн.)<br />Цена разработки интернет-магазина — от $3000 (эквивалент в грн.). Срок разработки — от 4 до 12 недель (в зависимости от сложности проекта).</p>

<h3>Этапы и состав работ по разработке сайта</h3>
<p>Состав работ для конкретного проекта определяется индивидуально, тем не менее <em>процесс разработки сайта</em> всегда включают в себя следующие этапы:</p>

<h4>1. Изучение маркетинговой ниши: продукт, бизнес, рынок и конкурентов —</h4>
<p><em>Разработка сайта начинается с проведения маркетингового аудита рыночной ниши. Какие цели стоят перед проектируемым сайтом, каковы основные задачи? Ответы на данные вопросы позволят определить должен быть сайт.</em></p>

<h4>2. Изучение целевой аудитории —</h4>
<p><em>Далее необходимо определить целевые группы потребителей: провести сегментацию, составить портреты целевых посетителей сайта. Также определить типы рынков и основные каналы коммуникации. Например, сайт, ориентированный на конечных потребителей (девушек 14-17 лет) и ориентированный на привлечение потенциальных дилеров в сегменте B2B — будут иметь принципиальные различия.</em></p>

<h4>3. Проектирование масштабируемой структуры —</h4>
<p><em>С самого начала важно заложить правильную структуру сайта, такую, чтобы в дальнейшем добавление новых разделов и категорий было предусмотрено в рамках сайта, и самое главное — структура должна быть логичной и интуитивно понятной целевому посетителю.</em></p>

<h4>4. Разработка эскизов типовых страниц —</h4>
<p>Сайт должен иметь не только общий узнаваемый стиль, но и общую структуру страниц. Так, страницы всех товаров должны иметь общую структуру и подачу, также как и страницы категорий и информационные страницы. На данном этапе мы проектируем шаблоны страниц типовых разделов.</p>

<h4>5. Разработка дизайна на основе фирменного стиля —</h4>
<p><em>Целостный дизайн — это дизайн, базирующийся на использовании чётко определённых цветов, шрифтов и общей концептуальной философии.</em></p>

<h4>6. Интерфейс и наполнение сайта —</h4>
<p>Основной этап разработки сайта. Сейчас Вы уже можете получить первый опыт взаимодействия с сайтом. Насколько целостно восприятие? Какие эмоции вызывает разработанный сайт?</p>
<p>Вся работа по программированию, верстке, наполнению контентом происходит именно на данном этапе.</p>

<h4>7. Тестирование и перенос сайта —</h4>
<p>На финальном этапе создания сайта мы проводим тестирование, исправляем все ошибки и баги, и после Вашего утверждения переносим его на основной хостинг и открываем для индексации поисковыми системами.</p>
<p>Обращаем Ваше внимание, что разработка сайта происходит на тестовом хостинге — до утверждения и приёма клиентом проекты расположены по временному адресу: [проект].web-machine.work</p>
<p>Сайт будет доступен 24/7, так, чтобы Вы всегда смогли проконтролировать актуальное состояние заказанного Вами сайта, и при этом url-адрес будет доступен только Вам!</p>


  </div>
</div>
        </div>

        </div>
        </div>
    
    <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Примеры работ по созданию сайтов</h2>
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
          caseText="Кейс"
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
        <h2 className='h3ash1'>Этапы разработки сайта</h2>
        <p>Разрабатываем сайты и проектируем веб-интерфейсы с 2013 года, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.</p>
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

export default DevComponentRus;
