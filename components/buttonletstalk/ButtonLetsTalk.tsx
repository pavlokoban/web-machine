import Link from 'next/link';
import styles from './Button.module.css';

const DiscussButton = () => {
  return (
    <Link href="/contacts" className={styles.discussButton}>
      Обсудить проект
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default DiscussButton;
