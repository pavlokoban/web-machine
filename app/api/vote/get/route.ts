import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'utils', 'voteBlog.json');
  try {
    const fileData = await fs.readFile(filePath, 'utf-8');
    const votes = JSON.parse(fileData);
    return NextResponse.json(votes);
  } catch (error) {
    return NextResponse.json({ error: 'Не удалось загрузить данные голосования' }, { status: 500 });
  }
}