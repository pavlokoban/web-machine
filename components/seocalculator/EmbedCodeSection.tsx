import React, { useState } from 'react';
import styles from './SEOCalculator.module.css';

const EmbedCalculator: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const embedCode = `<iframe src="https://web-machine.rocks/ru/seo-cost-calculator/" width="100%" height="705" style="border:none; margin: 40px 0;"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Через 2 секунды убираем сообщение
    });
  };

  return (
    <div className={styles.embedCodeSection}>
      <div className={styles.embedCodeHeader}>
        <span>iframe</span>
        <button style={{gap: '5px'}} onClick={handleCopy}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="icon-sm">
            <path
              fill="currentColor"
              d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {isCopied ? 'Скопировано!' : 'Копировать код'}
        </button>
      </div>
      <div className={styles.embedCodeBox}>
        <code>{embedCode}</code>
      </div>
    </div>
  );
};

export default EmbedCalculator;
