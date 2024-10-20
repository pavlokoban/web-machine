import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import AnotherCasesRu from '@/components/anothercases/AnotherCasesRu';
import FadeInImage from '@/components/anothercases/FadeInImage';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Продвижение стоматологии и раскрутка сайта стоматологической клиники",
  description: "Кейс по продвижению стоматологической клиники. Работы: маркетинговый аудит, продвижение сайта стоматологии, продвижение в Google-картах.",
  alternates: {
    canonical: "https://web-machine.rocks/ru/cases/dental",
    languages: {
      en: "https://web-machine.rocks/cases/dental",
      ru: "https://web-machine.rocks/ru/cases/dental",
      uk: "https://web-machine.rocks/uk/cases/dental",
    },
  },
};

const CasesDentalRu = () => {
  return (
    <>
  <LayoutMainRus>
  <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <h1 className={'unbounded'}>Продвижение стоматологии и раскрутка сайта стоматологической клиники</h1>
        <h4 className={''}>Кейс по продвижению стоматологической клиники &laquo;Стоматология для всех&raquo;, г. Харьков. Работы: маркетинговый аудит, продвижение сайта стоматологии, продвижение в Google-картах. Результаты: рост целевого трафика в 7 раз за 6 месяцев.</h4>
       
        <FadeInImage src="/images/portfolio/dental/dental-01.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
        <h2>Обзор проекта</h2>
        <p>Вместо предисловия — пару слов о проекте в небольшом интервью с руководителем стоматологической клиники...</p>
        
        <div className='desc-flex-mob-block'>
        <div className='desc-67-mob-100'>
        <p>На наши вопросы отвечает стоматолог-терапевт высшей категории — Иванова Валерия Феликсовна.</p>
        <p style={{fontWeight: 'bold'}}>— Благодарю, что смогли уделить мне немного времени в Вашем плотном графике! Опишите кратко принципы работы стоматологической клиники, ценности и, если можно так сказать, миссию...</p>
        <p>— Стоматологическая клиника &laquo;Стоматология для всех&raquo; - это клиника, отвечающая высоким стандартам в оказании широкого спектра стоматологических услуг пациентам различной степени сложности. Успешная медицинская деятельность команды врачей нашей клиники проверена годами практики, основана на полном доверии наших пациентов, сохранение здоровья которых, является нашей наивысшей ценностью. Высокий профессионализм, командная работа, максимальный уровень безопасности пациента, порядочность и этика- наши основные принципы работы. Мы создаем приятную атмосферу и уют наряду с современным оборудованием мирового уровня.. В своей работе соблюдаем индивидуальный подход к проблеме каждого пациента и высокие стандарты в профилактике, диагностике и лечении.  Мы постоянно совершенствуемся и работаем над собой, чтобы быть на гребне волны профессионализма, следуя инновациям и новым технологиям в мировой стоматологии, чтобы каждая проблема наших пациентов находила оптимальное решение и Ваше доверие к нам всегда оставалось безукоризненно.</p>
        <p style={{fontWeight: 'bold'}}>— Что является основополагающим в работе Ваших врачей?</p>
        <p>— Основополагающими принципами в работе наших докторов являются высокие стандарты качества,рекомендованные и признанные мировой стоматологией и добросовестное отношение к своей работе! Этот принцип можно описать кратким выражением: Проведи лечение так, как бы ты хотел, чтобы полечили тебя или твоих близких!</p>
        <p>— Благодарю за информацию!</p>
        <br></br>
        <p>—Беседу вела Юлия Кушнир, менеджера по работе с клиентами.</p>
        
        </div>

        <div className='desc-33-mob-100'>
        <div style={{maxWidth: '1200px', margin: 'auto'}}>
        <div className='space20'></div>
        <Image className="border-100" src='/images/portfolio/dental/dental-02.webp' width={800} height={800} alt='Разработка интернет-аукциона'/>
        </div>
        </div>
        </div>

        <div className='desc-flex-mob-block'>
        <div className='desc-33-mob-100'>
        <h2>Проблема</h2>
        </div>
        <div className='desc-67-mob-100'>
        <p>Сайт Стоматология для всех был запущен в 2015 году. SEO оптимизация уже проводилась, однако со слов клиента основной проблемой был низкий уровень трафика и почти полное отсутствие заявок.</p>
        </div>
        </div>

        <div className='desc-flex-mob-block'>
        <div className='desc-33-mob-100'>
        <h2>Задачи</h2>
        </div>
        <div className='desc-67-mob-100'>
        <ol className='spoilerOlStyle'>
            <li>Оптимизировать конверсии и реализовать систему лидогенерации.</li>
            <li>Увеличить посещаемость сайта из органического поиска и локального поиска в сервисе Google Maps.</li>
        </ol>
        </div>
        </div>

        <div className='desc-flex-mob-block'>
        <div className='desc-33-mob-100'>
        <h2>Решение</h2>
        </div>
        <div className='desc-67-mob-100'>
        <h3>Анализ конкурентов</h3>
        <p>Анализ конкурентов показал большое число сильных игроков с хорошо оптимизированными сайтами, многие домены в индексе более 10 лет. Также, примерно 25% сайтов в выдаче ТОП-30 являются специализированными стоматологическими справочниками и порталами. Всего было обнаружено более 100 сайтов клиник, над которыми в настоящий момент ведётся работа. Более того, из наших данных по нишевым холодным звонкам (да-да, нагло предлагали продвижение стоматологическим центрам) многие руководители непосредственно самостоятельно курируют SEO продвижение своих стоматологических клиник, что говорит о высоком уровне вовлеченности в этот процесс, а значит и общего уровня конкуренции. О высоком уровне конкуренции в нише продвижения стоматологических клиник косвенно можно судить по данным из Планировщика ключевых слов Google AdWords по запросу Имплантация зубов:</p>
        <FadeInImage src="/images/portfolio/dental/dental-03.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
        <p>В целом, для нас не было новостью то, с чем придётся иметь дело...</p>
        <h3>Анализ целевой аудитории, особенностей клиники и стратегия интернет-маркетинга</h3>
        <p>В виду месторасположения стоматологического центра Стоматология для всех в крупнейшем спальном районе Харькове (самый крупный жилой массив Украины) было принято решение сделать ставку на жителей непосредственно Салтовского жилмассива (население более миллиона постоянных жителей). Это было реализовано прежде всего за счёт акцентированного указания района в сниппетах поисковой выдачи. Также это осуществлялось путём продвижения стоматологической клиники в локальном поиске Google карт. Привлечение жителей других районов осуществлялось путем средне- и низкочастотного продвижения стоматологических услуг компании в поиске с харьковских IP-адресов пользователей, или с геопривязкой города Харьков.</p>
        <h3>Этап 1. Внутренние факторы.</h3>
        <p>1й этап стратегии продвижения сайта стоматологической клиники состоял из технической и контентой проработки (onpage SEO) и длился 3 месяца. По сути это был подготовительный этап. Нами проводились следующие работы:</p>
        <ul className='spoilerUlStyle'>
            <li>Написание нишевого геозависимого контента</li>
            <li>Проработка уже существующего контента</li>
            <li>техническая SEO оптимизация</li>
            <li>Внедрение микроразметки</li>
            <li>Ускорение сайта. Начинали 16/100 для десктопных устройств, остановились на 79/100. Было выполнено: оптимизация загрузки видимого контента, проработки TTFB и времени ответа сервера (важнейший показатель среди всех факторов ускорения и быстродействия), сокращен код CSS и JS, было настроено использование кеша браузера (кроме элементов сервисов Google). Единственное с чем решили не заигрываться — это с оптимизацией изображений. Да, мы их оптимизировали, но до разумных пределов, т.к. качественные изображения лучше некачественных, но лёгких, иначе теряется смысл их размещать...</li>
        </ul>
        <FadeInImage src="/images/portfolio/dental/dental-04.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
       
        <p>И ряд других технических манипуляций. <br></br>
        Далее, </p>
        <h3>Этап 2. Ссылки всё же имеют значение...</h3>
        <p>На 2м этапе ставилась задача увеличения тематического ссылочного профиля. В приоритете были тематические стоматологические порталы и блоги, а также региональные справочники. Часть нежелательных ссылок были отклонены (около 20). Проработка ссылочного профиля в настоящий момент: 296 ссылок с 148 доменов.</p>
        
        <h3>Этап 3. Партизаны и географы.</h3>
        <p>3й этап: дальнейшее поисковое продвижение стоматологии и управление репутацией путём партизанского маркетинга (длительность 1,5 мес.), а также активное развитие аккаунта в Google Local Business, с целью охвата потенциальных клиентов из локального поиска. Важно отметить, что крауд-маркетинг — крайне важная часть работ по продвижению сайтов стоматологической тематики, которая во многом определяет успех или неуспех конченого результата — привлечения лида. </p>
        
        <FadeInImage src="/images/portfolio/dental/dental-05.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
        <p>Итак, пора посмотреть результаты!</p>
        </div>
        </div>

        <div className='desc-flex-mob-block'>
        <div className='desc-33-mob-100'>
        <h2>Результаты</h2>
        </div>
        <div className='desc-67-mob-100'>
        <h3>Результаты по задаче №1: рост трафика.</h3>
        <p>Трафик на сайт за 6 месяцев вырос на 778% — с 291 посетит./мес. на 15.05.2017 — до 1975 посетит./мес. к 15.12.2017.</p>

        <p>При этом:</p>
        <ul className='spoilerUlStyle'>
        <li>Доля оrganic search (т.е. непосредственно из поиска Google): 79,04%.</li>
        <li>Новые сеансы: 82,08%.</li>
        <li>Доля пользователей из Харькова: 82,18%.</li>
        </ul>
        <FadeInImage src="/images/portfolio/dental/dental-06.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
       
        <p>Также были переработаны метатеги с целью повышения CTR, внедрено указание непосредственного месторасположения клиники (район Салтовка). Итог:</p>
        <p style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}}>CTR: 9%</p>
        <p>Средний CTR (01.11.-30.11.2017): 8,72%*</p>

        <p>*согласно данным сервиса Google Search Console.</p>
        <br></br>
        <p>Данный фактор также иметь большое знание в продвижении стоматологического сайта в условиях высокой конкуренции — мало быть видимым, нужно быть заметным!</p>
        <h3>Позиции в поисковой выдачи Google.</h3>
        <p>Результаты поисковой выдачи в Google Украина (Харьков, Харьковская область, Украина), язык интерфейса: русский. Снятие позиций с помощью сервиса Seranking.</p>
       
       <FadeInImage src="/images/portfolio/dental/dental-07.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
       <p>+ ещё 242 ключевых запроса, входящих в семантическое ядро.</p>

 

<p>Видимость сайта Стоматология для всех в Google (Google Украина (Харьков, Харьковская область, Украина), язык интерфейса: русский) за полгода работ по продвижению была увеличена с 2,5% до 36,08%.</p>

 
        <h3>Результаты продвижения в Google картах.</h3>
        <p>Несмотря на то, что работы ведутся относительно недавно, тем не менее уже есть первые результаты.</p>
        <FadeInImage src="/images/portfolio/dental/dental-08.webp" alt="Продвижение стоматологии и раскрутка сайта стоматологической клиники" />
        <p>В дальнейшем эти показатели можно значительно улучшить.</p>

 

            <h3>Результаты по задаче №2: лидогенерация.</h3>
            <p>Внедрены: обратный звонок, кнопка записаться на приём в фиксированной планке, также был установлен код ремаркетинга для таргетированной рекламной кампании.</p>
            <p>Всё это позволило значительно повысить число заявок*</p>
            <br></br>
            <p>*Точные данные мы не публикуем по запросу Заказчика.</p>
        
        </div>
        </div>

        </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <AnotherCasesRu />
        <ContactFormRus />
        </div>

</LayoutMainRus>
</>
  );
};

export default CasesDentalRu;