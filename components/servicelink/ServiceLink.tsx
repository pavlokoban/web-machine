import Link from 'next/link';
import styles from './ServiceLink.module.css';

interface ServiceLinkProps {
  title: string;
  description: string;
  href: string;
}

const ServiceLink: React.FC<ServiceLinkProps> = ({ title, description, href }) => {
  return (
    <Link href={href} className={styles.serviceLink}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.arrowContainer}>
      <span className={styles.arrow}>&#x2794;</span>
      </div>
    </Link>
  );
};

export default ServiceLink;
