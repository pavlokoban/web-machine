import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Подключение Prisma

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Неверный slug' }, { status: 400 });
  }

  try {
    // Ищем количество просмотров для указанного slug, используя findFirst
    const view = await prisma.view.findFirst({
      where: { page: slug },
    });

    if (view) {
      return NextResponse.json({ views: view.count });
    } else {
      // Если записи нет, возвращаем 0
      return NextResponse.json({ views: 0 });
    }
  } catch (error) {
    console.error('Ошибка получения данных о просмотрах:', error);
    return NextResponse.json({ error: 'Ошибка получения данных о просмотрах' }, { status: 500 });
  }
}
