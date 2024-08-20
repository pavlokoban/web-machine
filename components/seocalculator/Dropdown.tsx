import React, { useState } from 'react';
import styles from './SEOCalculator.module.css';

interface DropdownProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  multiple?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedOptions, onChange, multiple = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    let newSelectedOptions;

    if (multiple) {
      if (selectedOptions.includes(option)) {
        newSelectedOptions = selectedOptions.filter((item) => item !== option);
      } else {
        newSelectedOptions = [...selectedOptions, option];
      }
      // Оставляем список открытым для выбора нескольких опций
    } else {
      newSelectedOptions = [option];
      setIsOpen(false); // Закрываем список после выбора
    }

    onChange(newSelectedOptions); // Обновляем состояние в родительском компоненте
  };

  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdownLabel}>{label}</label>
      <div className={styles.selectContainer} onClick={handleDropdownToggle}>
        <div className={styles.select}>
          {selectedOptions.length > 0 ? selectedOptions[0] : 'Выберите...'}
          <span className={styles.dropdownIcon}></span> {/* Значок выпадающего списка */}
        </div>
        {isOpen && (
          <ul className={styles.optionsList}>
            {options.map((option) => (
              <li
                key={option}
                onClick={(e) => {
                  e.stopPropagation(); // Предотвращаем закрытие списка при выборе
                  handleOptionSelect(option);
                }}
                className={selectedOptions.includes(option) ? styles.selectedOption : ''}
              >
                {multiple && (selectedOptions.includes(option) ? '+ ' : '- ')}
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
