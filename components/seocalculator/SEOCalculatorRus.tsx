"use client";
import { useState, useEffect } from 'react';
import styles from './SEOCalculator.module.css';
import Slider from './Slider';
import Dropdown from './Dropdown';
import InvestmentRange from './InvestmentRange';
import RadioGroup from './RadioGroup';
import EmbedCodeSection from './EmbedCodeSection';
import Link from 'next/link';

const SEOCalculatorRus = () => {
  const [geography, setGeography] = useState<string[]>(['Украина']);
  const [sections, setSections] = useState('1-10');
  const [languages, setLanguages] = useState(1);
  const [siteAge, setSiteAge] = useState(1);
  const [competition, setCompetition] = useState('новая ниша');
  const [currentSEO, setCurrentSEO] = useState(1);
  const [promotionAggressiveness, setPromotionAggressiveness] = useState(1);
  const [budget, setBudget] = useState(1);
  const [hasCopywriter, setHasCopywriter] = useState('нет');
  const [hasProgrammer, setHasProgrammer] = useState('нет');
  const [investmentRange, setInvestmentRange] = useState([0, 0]);
  const [isEmbedPopupOpen, setEmbedPopupOpen] = useState(false);

  const calculateInvestmentRange = () => {
    let baseInvestment = 333; // Уменьшенное начальное значение

    // 1. География
    const geographyCoefficients: { [key: string]: number } = {
      'Украина': 112,
      'США / Канада': 5200,
      'Германия / Австрия': 5250,
      'Польша': 3460,
      'Словакия / Чехия': 3600,
      'Великобритания': 4480,
      'Китай': 7320,
      'ОАЭ': 2270,
      'Франция': 3940,
      'Испания': 2720,
      'Австралия': 4290,
      'Прочая страна / страны': 5150
    };
    geography.forEach(geo => {
      baseInvestment += geographyCoefficients[geo];
    });

    // 2. Возраст сайта
    if (siteAge === 1) {
      baseInvestment += 300;
    } else if (siteAge === 2) {
      baseInvestment += 200;
    } else {
      baseInvestment += 100;
    }

    // 3. Конкуренция
    const competitionCoefficients: { [key: string]: number } = {
      'новая ниша': 10,
      'низкий': 200,
      'средний': 1000,
      'высокий': 2200,
      'сверхвысокий': 3600
    };
    baseInvestment += competitionCoefficients[competition];


    // 4. Текущий уровень SEO
    const currentSEOCoefficients: { [key: number]: number } = {
      1: 500,
      2: 300,
      3: 100
    };
    baseInvestment += currentSEOCoefficients[currentSEO];

    // Остальные параметры
    baseInvestment += parseInt(sections) * 30;
    baseInvestment += languages * 1100;
    baseInvestment += promotionAggressiveness * 800;
    baseInvestment += budget * 900;
    baseInvestment += hasCopywriter === 'да' ? 0 : 500;
    baseInvestment += hasProgrammer === 'да' ? 0 : 800;

    // Уменьшение итогового диапазона на 2.5 раза
    const minInvestment = (baseInvestment * 0.6) / 2.5;
    const maxInvestment = (baseInvestment * 1.4) / 2.5;

    setInvestmentRange([minInvestment, maxInvestment]);
  };

  useEffect(() => {
    calculateInvestmentRange();
  }, [geography, sections, languages, siteAge, competition, currentSEO, promotionAggressiveness, budget, hasCopywriter, hasProgrammer]);

  const resetValues = () => {
    setGeography(['Украина']);
    setSections('1-10');
    setLanguages(1);
    setSiteAge(1);
    setCompetition('новая ниша');
    setCurrentSEO(1);
    setPromotionAggressiveness(1);
    setBudget(1);
    setHasCopywriter('нет');
    setHasProgrammer('нет');
  };

  return (
    <>
      <div className={styles.calculator}>
        <h1>SEO калькулятор онлайн</h1>
        <p className={styles.pp}>
          Сколько стоит раскрутить сайт? Какие актуальные цены на продвижение сайта и SEO-оптимизацию? Ответ здесь! ➤ SEO калькулятор: просто введите необходимые параметры Вашего проекта для расчёта стоимости SEO продвижения сайта.
        </p>
        <hr />
        <div className='space20'></div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Dropdown
              label="География продвижения"
              options={['Украина', 'США / Канада', 'Германия / Австрия', 'Польша', 'Словакия / Чехия', 'Великобритания', 'Китай', 'ОАЭ', 'Франция', 'Испания', 'Австралия', 'Прочая страна / страны']}
              selectedOptions={geography}
              onChange={setGeography}
              multiple
            />
            <Dropdown
              label="Количество разделов сайта"
              options={['1-10', '10-30', '30-50', '50-100', '100+']}
              selectedOptions={[sections]}
              onChange={([value]) => setSections(value)}
              multiple={false}
            />
            <Slider
              label="Количество языков сайта"
              min={1}
              max={3}
              value={languages}
              onChange={setLanguages}
              marks={{
                0: '1 язык',
                25: '2 языка',
                50: '3 и более'
              }}
            />
            <Slider
              label="Возраст сайта"
              min={1}
              max={3}
              value={siteAge}
              onChange={setSiteAge}
              marks={{
                0: 'меньше года',
                50: '1-3 года',
                100: 'старше 3 лет'
              }}
            />
            <Slider
              label="Какой бюджет на ссылки Вы готовы выделить?"
              min={1}
              max={4}
              value={budget}
              onChange={setBudget}
              marks={{
                0: '0',
                33: 'до $1k',
                67: '$1-3k',
                100: '$3k+'
              }}
            />
          </div>

          <div className={styles.column}>
            <Dropdown
              label="Уровень конкуренции в нише"
              options={['новая ниша', 'низкий', 'средний', 'высокий', 'сверхвысокий']}
              selectedOptions={[competition]}
              onChange={([value]) => setCompetition(value)}
              multiple={false}
            />

            <Slider
              label="Текущий уровень SEO оптимизации сайта"
              min={1}
              max={3}
              value={currentSEO}
              onChange={setCurrentSEO}
              marks={{
                0: 'низкий',
                50: 'средний',
                100: 'высокий'
              }}
            />

            <Slider
              label="Насколько агрессивным должно быть продвижение?"
              min={1}
              max={3}
              value={promotionAggressiveness}
              onChange={setPromotionAggressiveness}
              marks={{
                0: 'планомерно',
                50: 'умеренно',
                100: 'агрессивно'
              }}
            />

            <RadioGroup
              label="Есть ли свой копирайтер?"
              options={[
                { label: 'нет', value: 'нет' },
                { label: 'да, есть', value: 'да' }
              ]}
              selectedValue={hasCopywriter}
              onChange={setHasCopywriter}
            />
            <RadioGroup
              label="Есть ли свой программист?"
              options={[
                { label: 'нет', value: 'нет' },
                { label: 'да, есть', value: 'да' }
              ]}
              selectedValue={hasProgrammer}
              onChange={setHasProgrammer}
            />
          </div>

          <div className={styles.column}>
            <InvestmentRange
              min={investmentRange[0]}
              max={investmentRange[1]}
            />
            <button className={styles.resetButton} onClick={resetValues}>
              Сбросить значения
            </button>
            <p>Оставить заявку на персональный просчет по SEO:</p>
            <Link href="/ru/seo#order" className={styles.discussButtonSEO}>
              Обсудить проект<span className={styles.arrowSEO}></span>
            </Link>
            <p className={styles.pForEmbed}>Встроенный SEO онлайн калькулятор:</p>
            <EmbedCodeSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOCalculatorRus;
