import Link from 'next/link';
import styles from './Button.module.css';
import clsx from 'clsx'; // инструмент объединения классов

interface ButtonLetsTalkRuProps {
  href: string;
  text: string;
  additionalClasses?: string;
}

const ButtonLetsTalkRu: React.FC<ButtonLetsTalkRuProps> = ({ href, text, additionalClasses = '' }) => {
  return (
    //<Link href={reflink} className={clsx(styles.discussButton, additionalClasses)}>
    <Link href={href} className={`${styles.discussButton} ${additionalClasses}`}>
      {text}
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default ButtonLetsTalkRu;

