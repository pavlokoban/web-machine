"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css'; // Стили, если нужны

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(part => part);

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        <li className={styles.li}>
          <Link href="/">United Technologies of Success</Link>
        </li>
        {pathParts.map((part, index) => {
          const href = '/' + pathParts.slice(0, index + 1).join('/');
          return (
            <li key={href} className={styles.li}>
              <Link href={href}>
                {decodeURIComponent(part).replace(/-/g, ' ')}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
