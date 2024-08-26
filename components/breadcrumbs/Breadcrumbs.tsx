"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css';
import { getPageTitle } from '@/getPageTitle';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(part => part);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      const titlesArray = await Promise.all(
        pathParts.map(async (part, index) => {
          const path = '/' + pathParts.slice(0, index + 1).join('/');
          const title = await getPageTitle(path);
          return title || decodeURIComponent(part).replace(/-/g, ' ');
        })
      );
      setTitles(titlesArray);
    };

    fetchTitles();
  }, [pathname]);

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {titles.map((title, index) => {
          const href = '/' + pathParts.slice(0, index + 1).join('/');
          const isLast = index === titles.length - 1;
          return (
            <li key={href} className={styles['breadcrumb-item']}>
              {isLast ? (
                <span className={styles.active}>{title}</span>
              ) : (
                <Link href={href}>
                  {index === 0 ? (
                    <span rel="v:url" property="v:title">
                      {title}
                    </span>
                  ) : (
                    title
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
