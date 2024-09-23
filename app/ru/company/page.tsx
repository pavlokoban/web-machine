// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import MarqueeText from '@/components/marqueetext/MarqueeText';
import TestimonialsRu from '@/components/testimonials/TestimonialsRu';
import ImageRow from '@/components/imagerow/ImageRow';

export const metadata: Metadata = {
    title: "WEB-MACHINE – о компании: история, ценности, команда и фото",
    description: "WEB-MACHINE в деталях: история компании, наши достижения, миссия и взгляды. Мы пришли в поисковый маркетинг не из SEO или разработки сайтов, а из классического маркетинга в 2013 году с проведения маркетинговых исследований.",
    alternates: {
      canonical: "https://web-machine.rocks/ru/company/",
      languages: {
        en: "https://web-machine.rocks/company/",
        ru: "https://web-machine.rocks/ru/company/",
        uk: "https://web-machine.rocks/uk/company/",
      },
    },
  };

const CompanyPageRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <h1 className={'unbounded'}>WEB-MACHINE – о компании: история, ценности, команда и фото</h1>
        <p style={{marginTop:'10px'}}>
        Работаем с 2013 года в digital, имеем опыт международных маркетинговых исследований и экспертизу в продвижении компаний на рынках США и Китая.<br></br>
Имеем статус Google Partner и входим в ТОП-10 digital-агентств Украины.<br></br>
<br></br>
За время нашей работы развиваем digital-продукты и системы маркетинга для 250 клиентов.<br></br>
<br></br>
А также... пишем книги по интернет-маркетингу, разрабатываем онлайн сервисы для маркетологов и ведём блог.<br></br>
<br></br>
Самая большая ценность для нашей команды — это доверие клиента, и чтобы оправдать его мы поставили себе цель — делать лучшее.<br></br>
Поэтому наш девиз, как и слоган бренда Mercedes-Benz: &quot;Лучшее или ничего!&quot;. Плакаты с этим призывом можно увидеть на стенах нашего офиса.
        </p>
        <br></br>
        <div className="tooltip">
            <img className="border-36" src='/images/team/web-machine-team-2018.jpg' width={1600} height={800} alt='Команда Веб-машины в 2018 году'/>
            <span className="tooltiptext">Команда &quot;WEB-MACHINE&quot;, 2018 год. Харьков</span>
        </div>
        <br></br>
        <h2 className='h3ash1'>История компании</h2>
        <p>Непосредственное решение о создании компании было принято <b>летом 2013 года</b> Павлом Соколенко в одном из кофешопов Амстердама. Тогда он принимал участие в программе культурного обмена AEGEE и целых полтора месяца вместе с 30 ребятами с разных стран Европы колесил по Нидерландам и Германии. На память об Амстердаме на нашем логотипе до 2024 года красовался один из трех Андреевских крестов герба этого яркого мультикультурного города, известного во всем мире. Именно его яркость и открытость к неординарным и смелым решениям была взята в основу концепции компании.<br></br>
        <b>2014 год</b>: основная специализация — разработка и продвижение сайтов, вскоре был разработан текущий сайт. В индекс Google вошли первые страницы. К маю компания состояла из 3 человек, а также 2 внештатных SEO-специалистов и 1 SMM-щика. В октябре открыт первый офис компании WEB-MACHINE в Харькове.</p>
        <br></br>
        <p>К концу <b>2015 года</b> в штате 10 человек. За этот год было реализовано более 120 кампаний по продвижению сайтов, контекстным рекламным кампаниям, маркетинговым аудитам, кампаниям в социальным сетям, крауд-маркетингу. С июня 2016 года был запущен личный кабинет клиента. Фирма получила статус Партнёра Google. С 2017 года мы активно участвуем в отраслевой жизни: выступаем на конференциях, семинарах, посвященных интернет-маркетингу. Параллельно мы улучшаем свои знания и опыт по части локального продвижения и задействования дополнительных инструментов интернет-маркетинга: крауд, Google local business, YouTube. Также с конца 2017 года мы отрыли ряд новых разделов на сайте: это онлайн тесты, бесплатные книги, а также онлайн сервисы: стратегия интернет-маркетинга и SEO-калькулятор. В 2018 году мы провели ребрендинг, открыли школу маркетинга и курсы SEO в Харькове.</p>
        <br></br>

        <p><b>В 2019 году</b> вошли в ТОП-10 digital-агентств Украины по версии CMS Magazine: 7 место в рейтинге разработчиков и 3 место в рейтинге SEO-компаний; заняли 8 место в рейтинге рекламных агентств Украины и вошли в ТОП-20 веб-студий по версии IT-RATING. Также мы получили первые серьёзные победы на рынке рекламных услуг — наши работы вошли в шортлисты рекламных фестивалей: WOW DONE AWARDS, Киевский международных фестиваль рекламы, ADC*UA и Ukrainian Design.
        </p>
        <br></br>
        <p><b>2020г.</b> Ряд наших работ занял призовые места в международных конкурсах разработчиков, в том числе создание сайта для всемирно известного разработчика мобильных игр &quot;Zplay&quot; заняло второе место в категории &quot;IT и интернет&quot;, а интернет-магазин &quot;Мегазайка&quot; - 1 место в категории &quot;Товары и услуги для детей&quot; в Украине в WEB AWARDS.
        С марта 2020 года компания на 98% перешла на удаленную работу, и вопреки внутренним негативным прогнозам количество клиентов выросло на 24%.</p>
        <br></br>
        <p><b>2021г.</b> В команде 30+ сотрудников, в работе 70+ проектов, сотрудничество с 5 партнерами. География как сотрудников, так и клиентов значительно расширилась. В будущем планируем открытие представительства в Киеве, а также в США.</p>
        <br></br>

        <div className="grid-container-4-1">
        <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/office-2024.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/team-3.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/team-4.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/team-5.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/conference-2018.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/team-2017.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/office-1.jpg' width={600} height={600}/>
            </div>
            <div className="grid-item-4-1">
            <img className="border-12" src='/images/team/office-2.jpg' width={600} height={600}/>
            </div>

</div>



        <br></br>
        <p><b>2022-2023.</b> 2022 год - год больших потрясений для всех в Украине, количество клиентов по объективным причинам значительно сократилось, как и команда. Тем не менее, удалось базово сохранить ядро компании, встретить и провести 2023 год в штатном формате.</p>
        <br></br>
        <p><b>2024 год и планы.</b> Удалось реорганизовать ряд вопросов, также расширить стек, также открыть офис в ЕС и начать работу с европейскими клиентами, кроме Китая. В планах переход на разработку маркетплейсов и сервисов на фреймворках, а также развивать услуги онлайн-продвижения проектов. Важный акцент делается на эмоциональном дизайне и технологиях.</p>
        </div>
        <div className='space80'></div>
        <div className="relative w-full overflow-hidden white112">
        
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
    </LayoutMainRus>
    </>
  );
};

export default CompanyPageRu;