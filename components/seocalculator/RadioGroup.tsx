import React from 'react';
import styles from './SEOCalculator.module.css';

interface RadioGroupProps {
  label: string;
  options: { label: string, value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className={styles.radioGroup}>
      <label className={styles.label}>{label}</label>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.radioButton}>
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className={styles.radioInput}
            />
                      <span className={styles.radioCircle}></span>
                      <span className={styles.radioLabel}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};


export default RadioGroup;