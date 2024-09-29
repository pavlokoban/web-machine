'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import AnimatedBlogLink from '@/components/animatedlinks/AnimatedBlogLink';
import { blogArticles } from '@/utils/dataBlogArticlesRu';
import styles from './PageBlogRuInner.module.css'; // Подключаем стили

const PageBlogRuInner = () => {
  const [visibleArticles, setVisibleArticles] = useState(10); // по умолчанию показываем 10 статей
  const [sortOrder, setSortOrder] = useState('newest'); // сортировка по дате
  const [viewsData, setViewsData] = useState<{ [key: string]: number }>({}); // данные просмотров

  // Функция для загрузки данных о просмотрах для конкретного slug
  const fetchViews = async (slug: string) => {
    try {
      const response = await fetch(`/api/getViews?slug=${slug}`);
      const data = await response.json();
      if (data.views !== undefined) {
        setViewsData((prevViews) => ({ ...prevViews, [slug]: data.views }));
      }
    } catch (error) {
      console.error('Ошибка получения данных просмотров для', slug, error);
    }
  };

  // Загружаем данные о просмотрах для всех видимых статей при рендере компонента
  useEffect(() => {
    blogArticles.slice(0, visibleArticles).forEach((article) => {
      if (!viewsData[article.slug]) {
        fetchViews(article.slug); // Загружаем просмотры только если они ещё не загружены
      }
    });
  }, [visibleArticles, viewsData]);

  // Сортировка статей
  const sortedArticles = [...blogArticles].sort((a, b) => {
    const viewsA = viewsData[a.slug] || 0;
    const viewsB = viewsData[b.slug] || 0;

    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortOrder === 'viewsAsc') {
      return viewsA - viewsB;
    } else if (sortOrder === 'viewsDesc') {
      return viewsB - viewsA;
    }
    return 0; // возвращаем 0, если условие сортировки не выполнено
  });

  // Функция для подгрузки дополнительных статей
  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 10);
  };

  return (
    <>
      {/* Плашка сортировки */}
      <div className={styles.sortContainer}>
        <label htmlFor="sort">Сортировать по: </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="newest">Сначала новые</option>
          <option value="oldest">Сначала старые</option>
          <option value="viewsDesc">По просмотрам (убывание)</option>
          <option value="viewsAsc">По просмотрам (возрастание)</option>
        </select>
      </div>

      {/* Список статей в 2 колонки на десктопе и 1 на мобильном */}
      <div className={styles.articleGrid}>
        {sortedArticles.slice(0, visibleArticles).map((article) => (
          <AnimatedBlogLink
            key={article.id}
            href={`/ru/blog/${article.slug}`}
            imgSrc={article.image}
            imgAlt={article.imageAlt}
            dateText={article.date}
            views={viewsData[article.slug] || 0} // Показываем просмотры из состояния
            topicArray={article.topics}
            titleText={article.title}
          />
        ))}
      </div>

      {/* Кнопка для подгрузки дополнительных статей */}
      {visibleArticles < sortedArticles.length && (
        <button className={styles.loadMoreButton} onClick={loadMoreArticles}>
          Загрузить больше
        </button>
      )}
    </>
  );
};

export default PageBlogRuInner;
