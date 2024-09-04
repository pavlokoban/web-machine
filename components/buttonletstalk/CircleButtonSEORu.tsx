import Link from 'next/link';
import styles from './Button.module.css';

interface CircleDiscussButtonSEORuProps {
  reflink: string;
}

const CircleDiscussButtonSEORu: React.FC<CircleDiscussButtonSEORuProps> = ({ reflink }) => {
  return (
    <Link href={reflink} className={styles.circleDiscussButton}>
      Обсудить проект<span className={styles.arrow}></span>
    </Link>
  );
};

export default CircleDiscussButtonSEORu;
