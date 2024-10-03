import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Подключение Prisma

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Неверный slug' }, { status: 400 });
  }

  try {
    // Ищем запись по slug, используя findFirst
    const existingView = await prisma.view.findFirst({
      where: { page: slug },
    });

    if (existingView) {
      // Если запись существует, увеличиваем количество просмотров
      const updatedView = await prisma.view.update({
        where: { id: existingView.id }, // Используем уникальный id для обновления
        data: { count: { increment: 1 } },
      });
      return NextResponse.json({ success: true, views: updatedView.count });
    } else {
      // Если записи нет, создаем новую запись для slug
      const newView = await prisma.view.create({
        data: { page: slug, count: 1 },
      });
      return NextResponse.json({ success: true, views: newView.count });
    }
  } catch (error) {
    console.error('Ошибка при увеличении просмотров:', error);
    return NextResponse.json({ error: 'Ошибка при обновлении просмотров' }, { status: 500 });
  }
}
