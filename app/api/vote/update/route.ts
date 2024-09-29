import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const filePath = path.join(process.cwd(), 'utils', 'voteBlog.json');
  try {
    const voteData = await req.json(); // Получаем данные из POST-запроса

    // Читаем текущие данные из файла
    const fileData = await fs.readFile(filePath, 'utf-8');
    const votes = JSON.parse(fileData);

    // Обновляем данные голосования
    const { option } = voteData;
    if (votes[option] !== undefined) {
      votes[option] += 1;
    }

    // Записываем обновленные данные обратно в файл
    await fs.writeFile(filePath, JSON.stringify(votes, null, 2));

    return NextResponse.json({ success: true, votes });
  } catch (error) {
    console.error('Ошибка при обновлении голосования:', error);
    return NextResponse.json({ error: 'Не удалось обновить данные голосования' }, { status: 500 });
  }
}
