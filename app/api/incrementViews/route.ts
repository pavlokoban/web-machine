import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Путь к файлу
const filePath = path.join(process.cwd(), 'utils', 'views.json');

// Чтение данных из JSON файла
const readViewsData = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Функция для увеличения количества просмотров
const incrementViews = (slug: string) => {
  const viewsData = readViewsData(); // Читаем данные
  if (viewsData[slug]) {
    viewsData[slug] += 1; // Увеличиваем количество просмотров
  } else {
    viewsData[slug] = 1; // Если slug не существует, создаем его с 1 просмотром
  }

  // Сохраняем изменения в файл
  fs.writeFileSync(filePath, JSON.stringify(viewsData, null, 2));
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (typeof slug !== 'string') {
    return NextResponse.json({ error: 'Неверный slug' }, { status: 400 });
  }

  try {
    incrementViews(slug); // Увеличиваем просмотры
    const viewsData = readViewsData(); // Читаем обновленные данные
    const views = viewsData[slug] || 0; // Получаем обновленное количество просмотров
    return NextResponse.json({ views });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка увеличения просмотров' }, { status: 500 });
  }
}
