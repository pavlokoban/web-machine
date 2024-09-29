'use client';

import { useState, useEffect } from 'react';

interface ViewsCounterProps {
  slug: string;
}

const ViewsCounter = ({ slug }: ViewsCounterProps) => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Делаем запрос для получения текущего количества просмотров
        
    
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

    fetchViews(); // Получаем количество просмотров при монтировании компонента

      
    const incrementViews = async () => {
      try {
        // Делаем запрос для увеличения количества просмотров
        await fetch(`/api/incrementViews?slug=${slug}`);
      } catch (error) {
        console.error('Ошибка увеличения просмотров:', error);
      }
    };

    incrementViews(); // Увеличиваем количество просмотров

    // Обратите внимание: вы можете добавить условия, чтобы не увеличивать просмотры несколько раз

  }, [slug]);

  return <p>Просмотры: {views !== null ? views : 'Загрузка...'}</p>;
};

export default ViewsCounter;
