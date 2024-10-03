'use client';

import { useState, useEffect, useRef } from 'react';

interface ViewsCounterProps {
  slug: string;
}

const ViewsCounter = ({ slug }: ViewsCounterProps) => {
  const [views, setViews] = useState<number | null>(null);
  const hasFetched = useRef(false); // Флаг для отслеживания выполнения запроса

  useEffect(() => {
    if (hasFetched.current) return; // Если запрос уже выполнялся, выходим

    const fetchViews = async () => {
      try {
        // Получаем текущее количество просмотров
        const response = await fetch(`/api/getViews?slug=${slug}`);
        const data = await response.json();

        if (response.ok) {
          setViews(data.views); // Устанавливаем обновленные просмотры
        } else {
          console.error('Ошибка получения просмотров:', data.error);
        }
      } catch (error) {
        console.error('Ошибка запроса просмотров:', error);
      }
    };

    const incrementViews = async () => {
      try {
        // Увеличиваем количество просмотров
        await fetch(`/api/incrementViews?slug=${slug}`, {
          method: 'POST',
        });
      } catch (error) {
        console.error('Ошибка увеличения просмотров:', error);
      }
    };

    fetchViews();     // Получаем количество просмотров при монтировании компонента
    incrementViews(); // Увеличиваем количество просмотров

    hasFetched.current = true; // Устанавливаем флаг после выполнения запросов

  }, [slug]);

  return <p>Просмотры: {views !== null ? views : 'Загрузка...'}</p>;
};

export default ViewsCounter;
