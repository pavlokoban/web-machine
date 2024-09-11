"use client";
import { useState, useEffect } from 'react';
import styles from './SEOCalculator.module.css';
import Slider from './Slider';
import Dropdown from './Dropdown';
import InvestmentRangeEn from './InvestmentRangeEn';
import RadioGroup from './RadioGroup';
import EmbedCodeSection from './EmbedCodeSection';
import Link from 'next/link';

const SEOCalculatorEn = () => {
  const [geography, setGeography] = useState<string[]>(['USA']);
  const [sections, setSections] = useState('1-10');
  const [languages, setLanguages] = useState(1);
  const [siteAge, setSiteAge] = useState(1);
  const [competition, setCompetition] = useState('startup');
  const [currentSEO, setCurrentSEO] = useState(1);
  const [promotionAggressiveness, setPromotionAggressiveness] = useState(1);
  const [budget, setBudget] = useState(1);
  const [hasCopywriter, setHasCopywriter] = useState('no');
  const [hasProgrammer, setHasProgrammer] = useState('no');
  const [investmentRange, setInvestmentRange] = useState([0, 0]);
  const [isEmbedPopupOpen, setEmbedPopupOpen] = useState(false);

  const calculateInvestmentRange = () => {
    let baseInvestment = 333; // Уменьшенное начальное значение

    // 1. География
    const geographyCoefficients: { [key: string]: number } = {
      'USA': 5000,
      'Canada': 5200,
      'Germany': 5250,
      'Poland': 3460,
      'Czechia': 3600,
      'UK': 4480,
      'China': 7320,
      'UAE': 2270,
      'France': 3940,
      'Spain': 2720,
      'Australia': 4290,
      'Other / others': 9999
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
      'startup': 10,
      'low': 200,
      'medium': 1000,
      'high': 2200,
      'superhigh': 3600
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
    baseInvestment += hasCopywriter === 'yes' ? 0 : 500;
    baseInvestment += hasProgrammer === 'yes' ? 0 : 800;

    // Уменьшение итогового диапазона на 2.5 раза
    const minInvestment = (baseInvestment * 0.6) / 2.5;
    const maxInvestment = (baseInvestment * 1.4) / 2.5;

    setInvestmentRange([minInvestment, maxInvestment]);
  };

  useEffect(() => {
    calculateInvestmentRange();
  }, [geography, sections, languages, siteAge, competition, currentSEO, promotionAggressiveness, budget, hasCopywriter, hasProgrammer]);

  const resetValues = () => {
    setGeography(['USA']);
    setSections('1-10');
    setLanguages(1);
    setSiteAge(1);
    setCompetition('startup');
    setCurrentSEO(1);
    setPromotionAggressiveness(1);
    setBudget(1);
    setHasCopywriter('no');
    setHasProgrammer('no');
  };

  return (
    <>
      <div className={styles.calculator}>
        <h1>SEO cost calculator</h1>
        <p className={styles.pp}>
        How much does it cost to promote a website? What are the current prices for website promotion and SEO optimization? The answer is here! ➤ SEO calculator: just enter the necessary parameters of your project to calculate the cost of SEO website promotion.
        </p>
        <hr />
        <div className='space20'></div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Dropdown
              label="Geography of promotion"
              options={['USA', 'Canada', 'Germany', 'Poland', 'Czechia', 'UK', 'China', 'UAE', 'France', 'Spain', 'Australia', 'Other / others']}
              selectedOptions={geography}
              onChange={setGeography}
              multiple
            />
            <Dropdown
              label="Number of site sections"
              options={['1-10', '10-30', '30-50', '50-100', '100+']}
              selectedOptions={[sections]}
              onChange={([value]) => setSections(value)}
              multiple={false}
            />
            <Slider
              label="Number of site languages"
              min={1}
              max={3}
              value={languages}
              onChange={setLanguages}
              marks={{
                0: '1 language',
                25: '2 languages',
                50: '3 and more'
              }}
            />
            <Slider
              label="Domain age"
              min={1}
              max={3}
              value={siteAge}
              onChange={setSiteAge}
              marks={{
                0: 'less than a year',
                50: '1-3 years',
                100: 'over 3 years old'
              }}
            />
            <Slider
              label="What budget are you willing to allocate for links?"
              min={1}
              max={4}
              value={budget}
              onChange={setBudget}
              marks={{
                0: '0',
                33: 'less $1k',
                67: '$1-3k',
                100: '$3k+'
              }}
            />
          </div>

          <div className={styles.column}>
            <Dropdown
              label="Level of competition in the niche"
              options={['startup', 'low', 'medium', 'high', 'superhigh']}
              selectedOptions={[competition]}
              onChange={([value]) => setCompetition(value)}
              multiple={false}
            />

            <Slider
              label="Current level of SEO optimization of the site"
              min={1}
              max={3}
              value={currentSEO}
              onChange={setCurrentSEO}
              marks={{
                0: 'low',
                50: 'medium',
                100: 'high'
              }}
            />

            <Slider
              label="How aggressive should promotion be?"
              min={1}
              max={3}
              value={promotionAggressiveness}
              onChange={setPromotionAggressiveness}
              marks={{
                0: 'systematically',
                50: 'reasonably',
                100: 'aggressively'
              }}
            />

            <RadioGroup
              label="Do you have your own copywriter?"
              options={[
                { label: 'no', value: 'no' },
                { label: 'yes', value: 'yes' }
              ]}
              selectedValue={hasCopywriter}
              onChange={setHasCopywriter}
            />
            <RadioGroup
              label="Do you have your own programmer?"
              options={[
                { label: 'no', value: 'no' },
                { label: 'yes', value: 'yes' }
              ]}
              selectedValue={hasProgrammer}
              onChange={setHasProgrammer}
            />
          </div>

          <div className={styles.column}>
            <InvestmentRangeEn
              min={investmentRange[0]}
              max={investmentRange[1]}
            />
            <button className={styles.resetButton} onClick={resetValues}>
            Reset values
            </button>
            <p>Leave a request for a personal SEO estimate:</p>
            <Link href="/seo#order" className={styles.discussButtonSEO}>
            Discuss the project<span className={styles.arrowSEO}></span>
            </Link>
            <p className={styles.pForEmbed}>Built-in SEO online calculator:</p>
            <EmbedCodeSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOCalculatorEn;
