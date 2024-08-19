import React from 'react';
import styles from './OfficeLocations.module.css';

const OfficeLocationsRus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.officeBlock}>
        <div className={styles.city}>Киев, Украина</div>
        <div className={styles.address}>
          Киев, ул. Дорогожицкая, 3 («Unit City»)
        </div>
        <div className={styles.country}>
          <span className={styles.line}></span>
          Украина 🇺🇦
        </div>
      </div>
      <div className={styles.officeBlock}>
        <div className={styles.city}>Таллинн, Эстония</div>
        <div className={styles.address}>
          Таллинн, ул. Независимости, 12, оф. 100.
        </div>
        <div className={styles.country}>
          <span className={styles.line}></span>
          Эстония 🇪🇪
        </div>
      </div>
    </div>
  );
};

export default OfficeLocationsRus;
