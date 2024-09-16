import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonLetsTalkProps {
  сtahref: string;
  text: string;
  additionalClasses?: string;
}

const ButtonLetsTalk: React.FC<ButtonLetsTalkProps> = ({ сtahref, text, additionalClasses = '' }) => {
  console.log('Href value:', сtahref); // Проверим, что значение href передается
  return (
    <Link href={сtahref} className={`${styles.discussButton} ${additionalClasses}`}>
      {text}
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default ButtonLetsTalk;
