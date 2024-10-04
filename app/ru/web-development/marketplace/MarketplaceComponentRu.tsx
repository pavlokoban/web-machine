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
import Image from 'next/image';


const MarketplaceComponentRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Разработка маркетплейсов под ключ</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Создание и продвижение маркетплейса — это быстрый захват рынка. Маркетплейсы — это системы онлайн господства! Делаем быстрые маркетплейсы торговых площадок онлайн под ключ в Украине на Laravel, Next.js, Woocommerce
        </h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={16000} end={8000} duration={2} separator={" "} /></p>

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
      <div className="backgroundMarketplace">
        <div className="blockMarketplace">
            <h3 className='unbounded-font textMarketplace'>Во всех нишах онлайн торговли в выдаче скоро не будет ни сайтов компаний, ни интернет-магазинов – только одни агрегаторы и маркетплейсы</h3>
        </div>
      </div>
        <div className='space40'></div>

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
    <span>Подробнее о разработке маркетплейс</span>
  </div>
  <div className="spoiler-content">
    <h2>Разработка маркетплейсов в Киеве, Харькове, Днепре, Одессе</h2>
        <p>Маркетплейс — это торговая онлайн площадка, на которой каждый продавец может зарегистрироваться и создать свой магазин. По сути, это онлайн молл.</p>
        <h3>Выгоды разработки агрегаторов и маркетплейсов</h3>
        <p>Кроме очевидных преимуществ маркетплейса, касающихся широких функциональных возможностей, а также возможностей монетизации также есть и более фундаментальные и далеко идущие причины говорить о перспективах бизнес-модели агрегатора.</p>
        <p>Во-первых, обладание успешным прокаченным маркетплейсом фактически означает контроль целой рыночной ниши! У компании-владельца такого агрегатора появляются волшебные возможности регулирования конкуренции, модерации предложений отдельных игроков и так далее. В случае обладания таким мощным инструментом продвижение продукции собственной компании и ее рекламные возможности выходят на новый уровень.</p>
        <p>Во-вторых, уже в самом ближайшем будущем в поисковом маркетинге отдельным интернет-магазинам и сайтам компаний будет нереально конкурировать как за лояльность покупателей, так и за лояльность Google. Уже сейчас 70% ТОПа как в контекстной рекламе, так и в органической выдаче (SEO-продвижение), занимают агрегаторы и маркетплейсы.</p>
        <p>Перспективность маркетплейсов в онлайн торговле подтверждается стремительностью роста их популярности. Примеры известных агрегаторов: Amazon, App Store, Google Play, ebay, uber, Alibaba, airbnb и booking, wikipedia (агрегатор информации), olx. Косвенно можно говорить не только об их популярности, но и о прибыльности. Так, например, капитализация Amazon ($802.18 млрд.) превышает стоимость таких компаний, как Microsoft, Google, Apple и Facebook! Более того, на 2019 год маркетплейс Amazon — самая дорогая компания в мире!</p>


    <h3>Какие бывают агрегаторы?</h3>
        <p>Существуют различные типы агрегаторов, среди которых:</p>
        <ul className='spoilerUlStyle'>
            <li>Информационные агрегаторы</li>
            <li>Прайс-агрегаторы</li>
            <li>Агрегаторы различных услуг</li>
            <li>Туристические агрегаторы</li>
            <li>Мультимедиа агрегаторы</li>
            <li>Билетные агрегаторы</li>
            <li>Новостные агрегаторы</li>
            <li>Агрегаторы объявлений</li>
        </ul>

        <h3>Платформа для создания агрегаторов, порталов и маркетплейсов</h3>
        <p>Для разработки сайтов-агрегаторов, в зависимости от масштаба проекта, как правило, используется 2 типа платформ:</p>
        <ul className='spoilerUlStyle'>
        <li>для нишевых маркетплейс площадок — CMS Wordpress с функционалом Multi-Vendor;</li>
        <li>для высоконагруженных проектов — фреймворк Laravel для бэкенд и React/Next.js / View/Nuxt.js для фронтенд.</li>
        </ul>
        <p>Digital-агентство WEB-MACHINE предлагает создание сайта агрегатора под ключ в любом варианте в зависимости от целей и задач клиента.</p>
     
        <h3>Дизайн маркетплейса</h3>
        <p>При создании маркетплейс дизайн агрегаторов целиком и полностью базируется на юзабилити и должен соответствовать строгим требованиям удобства посетителей. Никакого перегруза, никаких отвлекающих элементов, ясные шрифты, читабельность. Разумеется, дизайн уникальный и адаптивный под мобильные устройства, доля трафика которых в онлайн торговле уже давно превысила долю десктопов. Справедливо заметить, что данными принципами следует руководствоваться при создании сайта любого типа.</p>
        <h3>Функционал маркетплейсов</h3>
        <p>Функционал маркетплейса кроме всех возможностей интернет-магазинов дополнительно включает в себя широкие функции администрирования как в рамках продавцов на уровне магазинов, так и на уровне администрирования магазинов на уровне агрегатора.</p>
        <p>Среди основных технических функций сайтов агрегаторов можно отметить:</p>
        <ul className='spoilerUlStyle'>
            <li>Отдельная учетная запись продавца (продавец может создать отдельную учетную запись с выделенным URL-адресом магазина)</li>
            <li>Поддерживается настраиваемый тип продукта (на многопрофильной торговой площадке продавец может создать кастомный набор настроек и атрибутов для продуктов)</li>
            <li>Управление на 4 уровнях: неавторизованная область агрегатора, личный кабинет клиента, личный кабинет исполнителя, панель управления (личный кабинет администратора системы агрегатора)</li>
            <li>Возможность создания собственной структуры маркетплейса</li>
            <li>Управление отзывами продавца и его продуктов</li>
            <li>Подписка на тарифные планы</li>
            <li>Внутренние чаты продавец-покупатель</li>
            <li>Оповещения о действиях пользователей</li>
            <li>Отдельные домены в рамках платформы Multi-Vendor</li>
            <li>Настраиваемые шаблоны уведомлений клиентам</li>
            <li>Настраиваемые модули для интеграции с Instagram, Facebook, google</li>
            <li>Определение геолокации</li>
            <li>Логин и регистрация через социальные сети</li>
            <li>Возможность настройки кастомных отчетов о продажах в магазинах</li>
            <li>Создание привлекательной целевой страницы для магазина продавца, настройка ее дизайна</li>
            <li>Идеальные условия для дропшиппинга</li>
            <li>ейтинги продавцов и их магазинов внутри платформы</li>
            <li>Статистика товаров и магазинов</li>
            <li>Гибкие настройки вариантов загрузки товаров</li>
            <li>Широкие настройки управления товарами и категориями у продавцов</li>
            <li>Единая структура категорий товаров и удобный поиск по каталогу</li>
            <li>Удобный и интеллектуальный поиск по маркетплейсу, заточенный под удобства ниши</li>
            <li>родавец может продать продукт администратора</li>
            <li>Автоматизация импорта (категории, цены, изображения, описание, остатки и прочее.)</li>
            <li>Администратор может обновить или удалить профиль продавца</li>
            <li>Администратор имеет право одобрить или отклонить профиль продавца</li>
            <li>Администратор может установить комиссию.</li>
        </ul>

        <h3>Монетизация маркетплейса</h3>
        <p>Существует множество способов заработка на сайтах-агрегаторах и маркетплейс, например, с помощью трафика, продажи лидов (заявок), действий, продажи товаров и услуг, рекламы и спецразмещений, дополнительных услуг. Разумеется, мы не говорим, когда один из продавцов маркетплейс — это его владелец...</p>
        
        <h3>Продвижение маркетплейса</h3>
        <p>Для продвижения маркетплейс используется весь арсенал инструментов интернет-маркетинга — SEO, PPC и товарная реклама, SMM, видео реклама, PR, крауд-маркетинг и даже оффлайн-реклама! Благодаря тому, что большая часть контента маркетплейс создается самими пользователями, а также хорошим естественным показателям поведенческих факторов в конкурентной борьбе за ТОПы у агрегаторов есть все шансы на победу. Но самое важное, что в случае удобного юзабилити есть вероятность того, что пользователи выберут Ваш маркетплейс как основное место поиска товаров вместо поиска Google и прочих отдельных интернет-магазинов.</p>  

        <h2>Преимущества создания маркетплейс в компании WEB-MACHINE</h2>
        <ul className='spoilerUlStyle'>
        <li>Гарантия. Компания дает гарантию 3 года и обязуется устранять ошибки в работе сайта на рекомендуемом хостинге при условии целостности кода</li>
        <li>Рассрочка. Для разработки сложных проектов предлагаем возможность рассрочки на 4-8 мес. Вы оплачиваете создание сайта поэтапно работам</li>
        <li>Скидка. Если у Вас уже есть готовое техническое задание, мы предоставляем скидку на разработку сайта до 15% в зависимости от сложности</li>
        <li>Бонусы. Для клиентов с проектами, состав которых предусматривает использование различных инструментов, мы предоставляем партнерские бонусы</li>
        </ul>

        <h2>Сколько стоит создать сайт агрегатор (маркетплейс)?</h2>
        <p>Цена разработки маркетплейса (агрегатора) зависит от амбициозности проекта, и следовательно масштабов разработки.</p>
        <p>Наше предложение базируется на двух вариантах:</p>
        <ol className='spoilerOlStyle'>
         <li>для нишевых маркетплейс — CMS Wordpress с функционалом MultiVendor от $8000.</li>
         <li>для высоконагруженных проектов — фреймворк Laravel для бэкенда и React.js для фронтенда — от $12000.</li>
        </ol>
        <h2>Примеры агрегаторов и маркетплейсов (модели B2B, B2C, C2C/P2P)</h2>
        <p><br></br></p>
        <div className='grid-container-4-1' style={{backgroundColor: 'var(--color-main-1-deep)', padding: '2%'}}>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-airbnb.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-aliexpress.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-amazon.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-booking.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-doc.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-googleplay.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-indeed.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-olx.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-prom.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-rozetka.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-wiki.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
            <div><Image className="border-36 grayscale100" src='/images/blog/articles/marketplace/agregator-youtube.png' width={171} height={86} alt='Создание маркетплейс, заказать разработку маркетплейса'/></div>
       </div>
  </div>
</div>
        </div>

        </div>
        </div>
    
    <div className="relative w-full overflow-hidden white112">
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
    <h2 className='h3ash1'>Примеры создания агрегаторов и маркетплейс</h2>
    <p>Для успешной онлайн торговли мы создаем сайты, которые показывают хорошие цифры — высокую конверсию и быстрое продвижение. Мы разработали 100+ интернет-магазинов, маркетплейс, порталов и агрегаторов в различных рыночных нишах на основе отраслевых стандартов и понимания целевой аудитории.</p>
      <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/bus365-sozdanie-saita.jpg"
          imgAlt="Создание билетного агрегатора Bus365 и его продвижение"
          caseText="Кейс"
          stackArray={["Wordpress", "Дизайн", "PPC", "Разработка"]}
          titleText="Создание билетного агрегатора Bus365 и его продвижение"
        />
    
        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
         <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/job-agregator-min.jpg"
          imgAlt="Разработка агрегатора вакансий MeridianNurse"
          caseText="Кейс"
          stackArray={["Worpdress", "Дизайн", "Разработка"]}
          titleText="Разработка агрегатора вакансий MeridianNurse"
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
        <h2 className='h3ash1'>Этапы разработки маркетплейса под ключ</h2>
        <p>Предлагаем выгодные варианты разработки маркетплейсов. Вы получаете готовый к онлайн маркетплейс, со всеми инструкциями и доступами. Для разработки маркетплейс под ключ мы используем каскадный метод (Waterfall) управления проектом, которая позволяет создать маркетплейс в течение 10 недель. В рамках каскадного метода реализуются следующие этапы:</p>
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

export default MarketplaceComponentRu;