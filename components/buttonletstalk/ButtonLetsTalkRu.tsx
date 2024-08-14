import Link from 'next/link';
import styles from './Button.module.css';

const DiscussButtonRu = () => {
  return (
    <Link href="/ru/contact" className={styles.discussButton}>
      Обсудить проект
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default DiscussButtonRu;
