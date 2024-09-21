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
import StageSliderSeoRu from '@/components/stageslider/StageSliderSeoRu';
import CountUp from 'react-countup';
import PolygonWithPointsRu from '@/components/dynamicdiamond/DynamicDiamondRu';


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
            <p className='centered-texts sub-h4-service-texts'>от <CountUp start={690} end={330} duration={2} separator={" "} /> $/мес.</p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={12} end={6} duration={2} /> мес.</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>
    
    
      <div className="relative w-full overflow-hidden black112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Продвижение сайта — 10 основ</h2>
        <p>SEO оптимизация — это сложный и трудоёмкий процесс.<br></br>
        В нашей компании для продвижения сайтов мы прорабатываем 10 основных направлений:</p>
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
    <span>Подробнее о SEO</span>
  </div>
  <div className="spoiler-content">
  <h2>Что такое поисковое продвижение сайта и SEO-оптимизация?</h2>
  <p>Очень трудно представить в наше время бизнес, у которого нет сайта, и сайт, который не нуждался бы в продвижении! Ведь как сказал Билл Гейтс: <em>Если вашего бизнеса нет в интернете, значит вас нет в бизнесе</em>! Поэтому раскрутка сайта – это один из ключевых инструментов интернет-маркетинга, позволяющий сайту быть доступным целевой аудитории по интересующим её запросам. Действительное, целевое обращение! Так что же такое раскрутка?</p>
<p><strong>Продвижение сайта в поисковых системах</strong> – это комплекс мероприятий по приведению технических параметров сайта к соответствию требований поисковых систем, внутренняя и внешняя оптимизация.</p>
<p>Можно выделить продвижение в топ (ориентация на повышение позиций в выдаче по определенным запросам) и продвижение по трафику (увеличение посещаемости сайта за счет переходов по ссылкам, рекламе и т.п.).</p>
<p>Эффективное продвижение сайта зависит от множества факторов. Так, например, существует более 200 факторов ранжирования сайта в поисковой системе Google, проводя работу по каждому из них можно влиять на результаты выдачи. Наша компания при проведении полного seo-аудита анализирует их все, но, к сожалению, повлиять на все факторы невозможно, например, нельзя скорректировать возраст домена, указав вместо 5 мес. – 5 лет. Тем не менее, среди факторов есть основные, работая с которыми мы можем достичь заметного успеха!</p>
<h2>Раскрутка сайта в поисковых системах</h2>
<p>Наши действия по SEO-оптимизации сайта:</p>
    <ol>
        <li>Проведение маркетингового исследования, включающего анализ конъюнктуры рынка, конкуренции, потребительского рынка, сегментирование целевой аудитории, а также подготовку маркетинговой стратегии продвижения (позиционирование и прочее)</li>
        <li>Проведение расширенного аудита сайта, включая анализ скорости загрузки продвигаемого сайта, а также работоспособность сервера</li>
        <li>Подбор и составление семантического ядра пул поисковых запросов, по которым сайт будет продвигаться в поисковых системах</li>
        <li>Техническая настройка сайта (устранение дублей в файле .htaccess, настройка индексации в robots.txt и настройка валидной карты сайта), настройка страницы 404-ошибки</li>
        <li>Анализ юзабилити (UI/UX) продвигаемого сайта, SEO-оптимизация структуры под поисковые запросы и требования поисковых систем</li>
        <li>Контент-менеджмент: уникализация текстов, seo-оптимизация веб-сайта: рерайтинг, написание уникальных мета-тегов, использование ключевых запросов в текстах, заголовках H1 и H2, метатегах и тегах для изображений</li>
        <li>Оптимизация под социальные сети (SMO) размещение кнопок соцсетей, с помощью которых посетитель сможет поделиться интересным контентом в своей новостной ленте</li>
        <li>Индексация в поисковых системах, анализ продвижения сайта с точки зрения ботов Google</li>
        <li>Наращивание естественной ссылочной массы: регистрация в тематических справочниках, получение обратных ссылок с трастовых ресурсов</li>
        <li>Установка систем аналитика: анализ трафика, его структуры, а также снятие поисковых позиций</li>
        <li>Подготовка рекомендаций для дальнейшей раскрутке сайта: ведение блога или ленты новостей для регулярного обновления материалов сайта.</li>
    </ol>
<p>Будьте на виду везде!<br />Продвижение в Google-картах</p>
<p>82% потребителей используют поисковые системы для выбора локальных компаний.</p>
<p>Поэтому при раскрутке сайта уделяем особое внимание продвижению компании в Google-картах (Google Local business). Данный инструмент кроме очевидной выгоды в виде получения дополнительного трафика на сайт, также позволяет задействовать крауд-маркетинг (управление репутацией и работа с отзывами), что оказывает немаловажное влияние на принятие решения о выборе той, или иной компании потенциальным клиентом.</p>

<h2>Сроки и стоимость продвижения сайта в ТОП</h2>
<p><strong>Стоимость продвижения и раскрутки сайта в Харькове</strong> и в Киеве зависит от определенного комплекса факторов, среди которых: конкурентность в продвигаемой тематике, отправное состояние сайта на момент аудита, объемы и структура сайта и его юзабилити, используемая cms, качество кода, наличие ссылок, спама, размер семантического ядра, необходимость копирайтинга/рерайтинга, состояние хостинга и прочее.</p>
<p>Подробно ознакомится со сроками и ценами продвижения сайтов Вы можете, оставив заявку на сайте.</p>
<p>Заказать продвижение сайта в Харькове и Киеве Вы можете по нашим контактным телефонам.</p>
<p>Ознакомьтесь с нашими кейсами по продвижению интернет-магазинов и SEO оптимизации информационных сайтов, а также отзывами клиентов о проделанной нами работе. Стоимость продвижения сайта — от $500 в мес. Предоставляем прогнозы результатов продвижения.</p>
<p>Реальные результаты.<br /> Возврат инвестиций (ROI)<br />и рост продаж</p>

<p>При продвижении сайтов ориентируемся на максимизацию конверсий и возврат вложенных в интернет-маркетинг средств!</p>

<p>Стоимость раскрутки сайтов зависит от множества факторов, среди которых:</p>
<ul className='spoilerUlStyle'>
<li>Тип сайта (продвижение портала, сайта-визитки и интернет-магазина будет отличатся по предполагаемым объемам и составу работ)</li>
<li>Техническое состояние ресурса</li>
<li>Текущий ссылочный профиль</li>
<li>Необходимое количество продвигаемых категорий и посадочных страниц</li>
<li>География продвижения сайта</li>
<li>Уровень конкуренции в нише и отраслевая принадлежность</li>
<li>Цели и задачи раскрутки сайта (акцент на трафике и конверсиях / вывод в ТОП-10 поисковых систем)</li>
<li>Объем продвигаемого семантического ядра</li>
<li>Вспомогательные инструменты при продвижении сайта (PR, продвижение в Google картах, реклама в интернете, работа с отзывами - крауд маркетинг)</li>
</ul>
<p>Таким образом, стоимость раскрутки сайта определяется в индивидуальном порядке и основывается на данных маркетингового исследования и аудита сайта.</p>


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

  </div>
  </div>

      </div>
      </div>
      </div>

      <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Кейсы по продвижению сайтов</h2>
    <p>Изучите примеры достигнутых результатов по SEO оптимизации сайтов. В целом нами выполнено более 300 кампаний по интернет-маркетингу и продвижению сайтов, среди которых оптовые и розничные интернет-магазины, IT-компании, производственные компании, медицинские центры, торговые компании, предприятия общественного питания.</p>
      <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

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

<div className={'desc-col-2-50-mob-1-100'}>

        <AnimatedVideoLink 
          href="/ru/seo-cost-calculator"
          videoSrcWebm="/movie/SEOCostCalculatorVideo.webm"
          caseText="SEO сервис"
          stackArray={["Typescript", "Node.js", "React.js", "SEO", "Web-development"]}
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
      <h2 className='h3ash1'>Методика продвижения сайтов и состав работ по SEO</h2>
      <p>Продвигаем сайты на основе маркетинговых целей клиента и технического аудита. В рамках SEO-стратегии реализуются следующие этапы:</p>
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

export default SEORus;


