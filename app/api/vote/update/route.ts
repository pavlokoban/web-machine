import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Подключение Prisma

export async function POST(req: Request) {
  try {
    const { option } = await req.json();
    console.log('Полученные данные из запроса:', { option });

    // Проверяем, существует ли уже такой вариант голосования в базе данных
    const existingVote = await prisma.vote.findFirst({
      where: { option },
    });

    if (existingVote) {
      // Если запись найдена, обновляем количество голосов
      await prisma.vote.update({
        where: { id: existingVote.id }, // Используем id для обновления
        data: { count: { increment: 1 } },
      });
    } else {
      console.error('Ошибка: Вариант не найден');
      return NextResponse.json({ error: 'Вариант не найден' }, { status: 404 });
    }

    // После обновления голоса, снова получаем все опции с их голосами
    const votes = await prisma.vote.findMany();
    const votesObj: { [key: string]: number } = {};
    votes.forEach((vote: { option: string, count: number }) => {
      votesObj[vote.option] = vote.count;
    });

    // Возвращаем обновленные данные для всех опций
    return NextResponse.json({ success: true, votes: votesObj });
  } catch (error) {
    console.error('Ошибка при обновлении голосования:', error);
    return NextResponse.json({ error: 'Не удалось обновить данные голосования' }, { status: 500 });
  }
}
