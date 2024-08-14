import Link from 'next/link';
import styles from './Button.module.css';

const DiscussButton = () => {
  return (
    <Link href="/contact" className={styles.discussButton}>
      Let's talk!
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default DiscussButton;
