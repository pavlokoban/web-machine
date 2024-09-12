import Link from 'next/link';
import styles from './Button.module.css';

interface CircleDiscussButtonSEORuProps {
  reflink: string;
  text: string;
}

const CircleDiscussButtonSEORu: React.FC<CircleDiscussButtonSEORuProps> = ({ reflink, text }) => {
  return (
    <Link href={reflink} className={styles.circleDiscussButton}>
      {text}<span className={styles.arrow}></span>
    </Link>
  );
};

export default CircleDiscussButtonSEORu;
