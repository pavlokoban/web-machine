import React from 'react';
import styles from './SEOCalculator.module.css';

interface SliderProps {
label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  marks: { [key: number]: string }; // marks как обязательный параметр
}

const Slider: React.FC<SliderProps> = ({ label, min, max, value, onChange, marks }) => {
  return (
    <div className={styles.sliderContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.slider}
      />
      <div className={styles.marks}>
        {Object.entries(marks).map(([key, markLabel]) => (
          <span
            key={key}
            className={styles.mark}
            style={{ left: `${((Number(key) - min) / (max - min)) * 100}%` }}
          >
            {markLabel}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
