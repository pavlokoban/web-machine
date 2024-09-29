'use client';

import React, { useEffect, useRef } from 'react';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import StageSliderPPCRu from '@/components/stageslider/StageSliderPPCRu';
import CountUp from 'react-countup';



const AdsComponentRu = () => {
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
        <h1 className={'unbounded centered-texts'}>Контекстная реклама (PPC)</h1>
        <h4 className={'centered-texts sub-title-service-texts'}>Контекстная реклама в Google Ads (PPC) — тип интернет-рекламы, при которой объявления рекламодателя показывается релевантно к содержанию поискового запроса. Благодаря нашему опыту и преимуществам статуса партнера Google мы поможем Вам получить заявки, клиентов и покупателей в поисковых системах. Сочетаем ручную работу и передовые технологии.</h4>
        
        <div className='space20'></div>
       
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от <CountUp start={999} end={500} duration={2} separator={" "} /> $/мес.</p>

          </div>
          <div>
          <h3 className='centered-texts'>Сроки:</h3>
          <hr className="servicesHr"></hr>
          <p className='centered-texts sub-h4-service-texts'>от <CountUp start={12} end={6} duration={3} /> мес.</p>
        </div>

        </div>
        <div className='flex'>
        
        <CircleDiscussButtonSEORu text="Обсудить проект" reflink="#contact-form-here" />


        </div>
      <div className='space20'></div>      
      </div>
    
    
      <div className="relative w-full overflow-hidden white112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Виды и типы интернет-рекламы</h2>
            <ul className='spoilerUlStyle'>
                <li>Контекстная реклама в поиске Google — настройка рекламы в поисковой выдаче, а также в Google-картах Вашим целевым клиентам.</li>
                <li>Медийная рекламная кампания — разработка и настройка баннерной рекламы на целевых площадках.</li>
                <li>Видеореклама в YouTube — проведение рекламных кампаний в видеохостере-партнёре Google.</li>
                <li>Ремаркетинг — настройка таргетированной рекламы, которая будет показываться посетившим Ваш сайт потенциальным клиентам.</li>
                <li>Тартег, SMM реклама и мобильная реклама — реклама в Facebook, Instagram, мессенджерах. Также настраиваем рекламные кампании для показа на мобильных устройствах.</li>
                <li>Видеореклама перед фильмами — креативная реклама для целого ряда тематики, показ которых ограничен в GoogleAds и социальных сетях</li>
            </ul>
     
            <h2>Что такое контекстная реклама?</h2>
                <p>Контекстная реклама - это разновидность онлайн-рекламы, которая показывается пользователю в соответствии с контекстом и содержимым страницы, на которой он находится, его предпочтениями и интересами, что позволяет делать такую рекламу более целевой, настраиваемой и таргетированной, что в свою очередь позволяет повысить отклик и эффективность такой рекламной кампании.</p>

            <h2>Контекстная реклама в Google Ads — PPC в Киеве и Харькове</h2>
                <p>Контекстная реклама — это наиболее конверсионная разновидность онлайн-рекламы, которая показывается в результатах поиска Google. Одной из характеристик PPC является: точный таргетинг и результат "здесь и сейчас". Виды, типы и стоимость PPC. Заказать контекстную рекламу в Харькове и Киеве в агентстве интернет-маркетинга «WEB-MACHINE» — эффективное продвижение в Google, Youtube, Facebook, а также услуги ремаркетинга, баннерной рекламы и рекламы в социальных сетях.</p>

            <h2>Тартегированная реклама: настройка и ведение</h2>
                <p><b>Этапы проведения таргетированной рекламной кампании:</b></p>
                <ol className='spoilerOlStyle'>
                    <li>Разработка стратегии продвижения </li>
                    <li>Запуск и ведение рекламных кампаний  </li>
                    <li>Поддержание и оптимизация результативности кампаний  </li>
                    <li>Достижение результатов по KPI  </li>
                    <li>Настройка Pixel Facebook</li>
                    <li>Работа с бюджетами до $20 тыс. на украинском рынке</li>
                </ol>
                <br></br>
                <p><b>Состав работ для ведения таргета:</b></p>

<ol className='spoilerUlStyle'>
        <li>Список работ</li>
        <li>Анализ соцсетей и сайта перед началом работы (советы по их улучшению)</li>
        <li>Разработка стратегии продвижения</li>
        <li>Установка и настройка Facebook Pixel и событий при необходимости (проверка срабатывания событий на сайте)</li>
        <li>Анализ рекламы конкурентов</li>
        <li>Анализ успешности предыдущих рекламных кампаний</li>
        <li>Создание рекламных креативов и написание текстов</li>
        <li>Запуск и ведение рекламных кампаний</li>
        <li>Поддержание и оптимизация результативности кампаний</li>
        <li>Работа с несколькими целями рекламных кампаний</li>
        <li>Работа с теплыми и холодными аудиториями</li>
        <li>Запуск нескольких сегментов ремаркетинга</li>
        <li>Месячные отчеты + недельные отчеты(при необходимости)</li>
    </ol>

<h2>Как создаётся контекстная реклама?</h2>
<p><b>Для создания и настройки контекстной рекламы необходимо:</b></p>
    <ol className='spoilerOlStyle'>
        <li>Собирается статистика запросов по Вашей тематике.</li>
        <li>Определяется сезонность и рекомендуемые ставки по группам объявлений и по ключевым запросам.</li>
        <li>Далее создаётся кампания и делаются необходимые настройки.</li>
        <li>Объявления подаются на модерацию и поисковой системой определяется качество целевых страниц.</li>
        <li>Старт рекламной кампании - это только начало трудоёмкого пути анализа и улучшений!
        </li>
    </ol>
    <br></br>
    <p>Также важно отметить, что принцип работы PPC - это аукцион, то есть кто больше платит, тот и занимает лучшее место! Оплата снимается за переходы.<br></br>
Но это если совсем вкратце!<br></br>
Наши технические специалисты постоянно проходят тестирование на платформах, где доступна контекстная реклама и медийная реклама, а также изучают новые тренды и нововведения всех платформ. Также важно отметить, что наши специалисты по контекстной рекламе, в основе своих знаний имеют навыки по раскрутке сайтов и по повышению качества ресурса в составе работ по раскрутке, что напрямую будет влиять на эффективность рекламы и на продажи с сайта.<br></br>
Наши творческие маркетологи прорабатывают и составляют только эффективные предложения под различные группы пользователей из числа целевой аудитории.<br></br>
Мы постоянно совершенствуем знания и навыки в настройке рекламных кампаний и стремимся автоматизировать сложные процессы для достижения наилучших результатов.
</p>

      </div>
      </div>
      </div>

      <div className="relative w-full overflow-hidden brave112">
                <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
                <h2 className='h3ash1'>Преимущества контекстной рекламы</h2>
                <div className='space40'></div>
                <div className='descCol4Mob1'>
                  <div>
                  <p style={{fontSize: '112px', textAlign: 'center', filter: 'grayscale(1)'}}>📊</p>
                  <p>В контекстной рекламе можно использовать неограниченный список ключевых слов – вы не платите за увеличение списка слов, вы платите только за целевые переходы.</p>
                  </div>
                  <div>
                  <p style={{fontSize: '112px', textAlign: 'center', filter: 'grayscale(1)'}}>🏆</p>
                  <p>Контекстная реклама работает сразу – не нужно ждать несколько месяцев, пока сайт выйдет в ТОП – 10 поисковых систем для получения прибыли. Более того, изменять настройки кампании можно в течение 1 дня!</p>
                  </div>
                  <div>
                  <p style={{fontSize: '112px', textAlign: 'center', filter: 'grayscale(1)'}}>🎯</p>
                  <p>Объявления увидят только те пользователи, которые уже заинтересованы в ваших товарах или услугах. Вы можете выбирать регион и время показа рекламы для получения самой целевой аудитории.</p>
                  </div>
                  <div>
                  <p style={{fontSize: '112px', textAlign: 'center', filter: 'grayscale(1)'}}>💸</p>
                  <p>Размер бюджета Вы определяете сами. На основе прогнозируемых показателей мы предложим вам рекомендуемый. Вы только платите компании абонплату за ведение рекламной кампании.</p>
                  </div>
                </div>
              </div>
              </div>

<div className="relative w-full overflow-hidden white112">
<div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
      <h2 className='h3ash1'>Этапы настройки и ведения рекламных кампаний</h2>
      <p>Настраиваем таргет, контактные рекламные кампании, включая следующие этапы:</p>
      <div className='space20'></div>
      <StageSliderPPCRu />
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

export default AdsComponentRu;