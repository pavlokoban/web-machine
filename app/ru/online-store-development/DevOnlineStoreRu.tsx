'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedLink from '@/components/animatedlinks/AnimatedLink';
import AnimatedVideoLink from '@/components/animatedlinks/AnimatedVideoLink';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import StageSliderDevRu from '@/components/stageslider/StageSliderDevRu';
import CircleDiscussButtonSEORu from '@/components/buttonletstalk/CircleButtonSEORu';
import CountUp from 'react-countup';
import PricingPlansStoreRu from '@/components/pricingplans/PricingPlansStoreRu';


const DevOnlineStoreRu = () => {
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
      <h1 className={'unbounded centered-texts'}>Создание интернет-магазинов</h1>
      <h4 className={'centered-texts sub-title-service-texts'}>Разработка интернет-магазина — это не только дизайн и код, это прежде всего простота и логика взаимодействия, направленные на одно - на увеличение продаж. Мы разрабатываем современные интернет-магазины под ключ, построенные на современных технологиях (Woocommerce, Opencart, Laravel).
        </h4>
        
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div>
            <h3 className='centered-texts'>Стоимость:</h3>
            <hr className="servicesHr"></hr>
            <p className='centered-texts sub-h4-service-texts'>от $<CountUp start={12000} end={2900} duration={3} separator={" "} /></p>

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
        <h2 className='h3ash1'>Цены на разработку интернет-магазина</h2>
        <p>Существует различные опции. На них влияет сложность функционала магазина, количество уникальных макетов, необходимость переноса товаров и синхронизации с CRM, а также выбор программного решения и платформы, такие как WooCommerce, Opencart, Shopify, Laravel и прочие.</p>
          <div className='space40'></div>

          <PricingPlansStoreRu />

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
    <span>Подробнее о разработке интернет-магазинов</span>
  </div>
  <div className="spoiler-content">
  <h2>Разработка интернет-магазинов в Харькове, Киеве</h2>
<p>Создание интернет-магазина — это процесс разработки сайта, позволяющего осуществлять эффективную торговлю онлайн, полностью соответствующего требованиям поисковых систем и стандартам юзабилити, а также ожиданиям целевой аудитории. Зачем нужно заказывать разработку интернет-магазина? В настоящее время создание интернет-магазинов, как и в целом электронная коммерция, является важной частью продвижения бизнеса любой компании, занятой в сфере торговли. Кроме того, что ecommerce является устойчивым трендом интернет-маркетинга, разработка интернет-магазинов обусловлена объективными преимуществами перед традиционными способами торговли оффлайн.</p>
<h2>Преимущества интернет-магазина</h2>
<p>К основным причинам, обуславливающим создание интернет-магазина можно отнести:</p>
    <ul className='spoilerUlStyle'>
        <li>интернет-магазин работает 24/7: без выходных и без перерывов на обед, в любое время суток Ваш товар всегда доступен к покупке онлайн!</li>
        <li>доступ в Ваш виртуальный магазин есть всегда и везде: посетить интернет магазин может каждый, у кого есть доступ в сеть, как с ноутбука, так и с телефона благодаря внедрению адаптивной вёрстки;</li>
        <li>экономьте на арендных издержках, т.к. Вам не требуется торговое помещение;</li>
        <li>с грамотно разработанным с точки зрения мерчандайзинга макетом категорий Вы получаете лучшую онлайн витрину, да и в целом не требуется дорогостоящее торговое оборудование;</li>
        <li>не требуется держать и раздувать штат сотрудников: вместо множества работников зала, охранников и бухгалтеров — Вам всего лишь нужен менеджер, а на большинство вопросов ответит сам магазин!</li>
        <li>при налаженной работе с поставщиками наличие товара не обязательно;</li>
        <li>управлять интернет магазином можно отовсюду, где есть доступ к сети Интернет;</li>
        <li>и самое главное, всё больше и больше потребителей совершают покупки через интернет-магазины!</li>
    </ul>
<h3>Этапы создания интернет-магазинов</h3>
<p>Создание интернет-магазина предусматривает, чтобы он был удобным в использовании, интуитивно понятным целевой аудитории, был быстрым и корректно отображаться на разных типах устройств. Как правило, разработка интернет-магазина включает в себя следующие этапы:</p>
    <ol className='spoilerUlStyle'>
        <li>Разработка концепции</li>
        <li>Техническое Задание</li>
        <li>Разработка дизайна</li>
        <li>Внедрение</li>
        <li>Наполнение</li>
        <li>Тестирование</li>
        <li>Передача Заказчику</li>
    </ol>
<p>Мы передаем полностью утвержденный Заказчиком интернет-магазин, настроенный на сервере и протестированный, готовый к продажам.</p>
<h3>Сроки на создание интернет-магазина</h3>
<p>Сроки на создание интернет-магазина варьируются от 5 до 10 недель. Как правило, возможность разработки до оговоренного в договоре дедлайна зависит от взаимодействия между рабочей группой и Заказчиком, поэтому часто мы сдаем интернет-магазины до оговоренного срока.</p>
<h3>Стоимость разработки интернет-магазина: смета, цены</h3>
<p>Стоимость создания интернет-магазина стартует от $1480 и зависит от различных факторов, таких как сложность функциональных внедрений, размер структуры интернет-магазина, пожелания к дизайну и прочее.</p>
<h2>Создание интернет-магазинов в Харькове и Киеве</h2>
<p>При создании интернет-магазина в Харькове и Киеве мы предлагаем широкие функциональные возможности, гарантии качества и гибкое ценообразование.</p>
<p>Наша компания работает на рынке уже более 4 лет и за это время мы пополнили наше портфолио разработкой интернет-магазинов для различных компаний в сфере торговли, среди которых были одежда оптом и в розницу, лекарства, товары для дома, автомобильные товары, продукты питания, товары хозяйственного назначения, электроника, продажа B2B-товаров.</p>
<p>С нашими работами Вы можете ознакомиться в разделе Кейсы. Цены на создание интернет-магазинов: от $2900. Сроки: от 8 до 12 недель.</p>
<p>Заказать разработку интернет-магазина в Харькове или Киеве Вы можете оставив заявку на нашем сайте, либо позвонив по контактным номерам телефона.</p>
<p>Стоимость создания интернет-магазинов зависит от множества факторов, среди которых:</p>
<ul className='spoilerUlStyle'>
<li>Тип проекта - интернет-магазин с онлайн покупкой, или нет, просто интернет-магазин или маркетплейс</li>
<li>Платформа — система управления контентом: CMS, например, CMS OcStore / Opencart или Magento, ecommerce расширение для WordPress), фреймворк, например, интернет-магазин на фреймворке Yii / Laravel, либо Saas решение, например, Prom или Shopify.</li>
<li>Сложность используемого функционала</li>
<li>Необходимость SEO оптимизации на этапе разработки</li>
<li>Объёмов сайта и необходимости наполнения контентом</li>
<li>Сроках разработки</li>
<li>Сложность дизайнерских решений, а также UI/UX</li>
</ul>
<p>Таким образом, стоимость разработки интернет-магазина определяется в индивидуальном порядке и основывается на данных технического задания и целей разработки.</p>

<div itemScope itemType="https://schema.org/FAQPage">
    <h2 itemProp="name" className="h3ash1">Частые вопросы по созданию интернет-магазина</h2>
    <div style={{ margin: 'auto', padding: '0 7%', maxWidth: '1200px' }}>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько стоит разработка интернет-магазина?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ На цену создания интернет-магазина влияет много факторов, среди которых сложность функционала, программная платформа и сроки реализации.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько товаров можно добавить в интернет-магазин?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ Большинство программных платформ, на которых мы предлагаем создание интернет-магазинов, не имеют ограничений по товарам. Скорость работы магазина определяется настройками сервера.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <span itemProp="name">💬 Сколько стоит переделать уже имеющийся интернет-магазин?</span>
            <div className="content">
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                        <div className="faq-ans">
                            <p>✅ Переделка интернет-магазина может включать разный состав работ - от редизайна, до обновление либо смены программной платформы, поэтому стоимость и сроки данной услуги определятся исходя из технического задания.</p>
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
    <h2 className='h3ash1'>Примеры работ по разработке интернет-магазинов</h2>
    <p>Для успешной онлайн торговли мы создаем интернет-магазины, которые показывают хорошие цифры — высокую конверсию и быстрое продвижение.</p>
    <p>Мы разработали 100+ интернет-магазинов в различных рыночных нишах на основе отраслевых стандартов и понимания целевой аудитории.</p>
      <div className='space20'></div>
    <div className={'desc-flex-mob-block'}>
      <div className={'desc-col-2-50-mob-1-100'}>

      <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/underspace-cover-4.jpg"
          imgAlt="Дизайн и создание интернет-магазина женского белья"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка"]}
          titleText="Дизайн и создание интернет-магазина женского белья"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/ukreina-cover-2.jpg"
          imgAlt="Дизайн и разработка саинтернет-магазинайта для бренда женской одежды Ukreina"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка"]}
          titleText="Дизайн и разработка интернет-магазина для бренда женской одежды Ukreina"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/lamps4makeup_cover_01-min.png"
          imgAlt="Создание интернет-магазина на страны ЕС на CMS Opencart"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Figma", "Разработка"]}
          titleText="Создание интернет-магазина на страны ЕС на CMS Opencart"
        />

        </div>

        <div className={'desc-col-2-50-mob-1-100'}>
       
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/varvar-cover-2.jpg"
          imgAlt="Дизайн и создание интернет-магазина ювелирных украшений на CMS Opencart"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Figma"]}
          titleText="Дизайн и создание интернет-магазина ювелирных украшений на CMS Opencart"
        />
       
        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/case_toptv_cover.png"
          imgAlt="Дизайн, разработка и SEO продвижение крупного интернет-магазина электроники и бытовой техники"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка", "SEO"]}
          titleText="Дизайн, разработка и SEO продвижение крупного интернет-магазина электроники и бытовой техники"
        />

        <AnimatedLink 
          href="/"
          imgSrc="/images/portfolio/haited-cover-2.jpg"
          imgAlt="Дизайн и создание интернет-магазина по продаже дизельных генераторов и двигателей Hited"
          caseText="Кейс"
          stackArray={["Opencart", "Дизайн", "Разработка"]}
          titleText="Дизайн и создание интернет-магазина по продаже дизельных генераторов и двигателей"
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
        <p>Создаем интернет-магазины и проектируем веб-интерфейсы с 2013 года, имеем опыт и экспертизу в веб-дизайне, верстке и программировании на PHP, JS.</p>
        <p>Создали более 100 интернет-магазинов в различных тематиках и нишах.</p>
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
            <p>Разрабатываем интернет-магазины, используя современные технологии: программирование на JS, PHP, быстрые CMS и фреймверки</p>
          </div>
          <div>
            <h3 className='unbounded-font'>Продвижение</h3>
            <p>Благодаря компетенции в поисковом маркетинге создаем быстрые интернет-магазины, подготовленные к дальнейшей SEO-оптимизации и активной интернет-рекламе</p>
          </div>
        </div>
      </div>
      </div>
      <div className="relative w-full overflow-hidden white112">
      <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h2 className='h3ash1'>Создание интернет-магазина &quot;под ключ&quot;</h2>
        <p>Предлагаем выгодные варианты разработки интернет-магазинов. Вы получаете готовый к онлайн продажам магазин, со всеми инструкциями и доступами.</p>
        <p>Для разработки интернет-магазинов под ключ мы используем каскадный метод &quot;Waterfall model&quot; управления проектом, которая позволяет создать интернет-магазин в течение 3 недель. В рамках каскадного метода реализуются следующие этапы:</p>
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

export default DevOnlineStoreRu;
