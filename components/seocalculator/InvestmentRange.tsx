import React from 'react';
import styles from './SEOCalculator.module.css';
interface InvestmentRangeProps {
  min: number;
  max: number;
}

const InvestmentRange: React.FC<InvestmentRangeProps> = ({ min, max }) => {
  return (
    <div className={styles.calculatorBlock}>
      <h3 className={styles.calculatorH3}>Ежемесячные инвестиции на SEO:</h3>
      <p className={styles.calculatorResults}>${min.toFixed(0)} - ${max.toFixed(0)}</p>
    </div>
  );
};

export default InvestmentRange;
