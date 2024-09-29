import { NextResponse } from 'next/server';
import viewsData from '@/utils/views.json'; // Импортируем JSON-файл с просмотрами

// Определяем тип для viewsData
type ViewsData = {
    [key: string]: number; // любая строка может быть ключом, а значением будет число
  };

const getViewsData = (slug: string, data: ViewsData) => {
  return data[slug] || 0; // Возвращаем просмотры или 0, если для данного slug просмотров нет
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (typeof slug !== 'string') {
    return NextResponse.json({ error: 'Неверный slug' }, { status: 400 });
  }

  try {
    const views = getViewsData(slug, viewsData); // Получаем просмотры из JSON
    return NextResponse.json({ views });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка получения данных о просмотрах' }, { status: 500 });
  }
}
