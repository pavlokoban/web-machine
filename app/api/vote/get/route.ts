import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Получаем все варианты голосования из базы данных
    const votes = await prisma.vote.findMany();
    
    // Преобразуем результат в объект для голосов
    const votesObj: { [key: string]: number } = {};
    const options = votes.map((vote) => vote.option); // Получаем список опций

    votes.forEach((vote: { option: string, count: number }) => {
      votesObj[vote.option] = vote.count;
    });

    // Возвращаем и голоса, и опции
    return NextResponse.json({ votes: votesObj, options });
  } catch (error) {
    console.error('Ошибка при получении данных голосования:', error);
    return NextResponse.json({ error: 'Не удалось загрузить данные голосования' }, { status: 500 });
  }
}

 
//const prisma = new PrismaClient();

//export async function GET() {
  //try {
    // Получение всех голосований из базы данных
    //const allVotes = await prisma.vote.findMany();
    //console.log('Все голосования:', allVotes);
    
   // return NextResponse.json(allVotes);
 // } catch (error) {
    //console.error('Ошибка при получении голосований:', error);
   // return NextResponse.json({ error: 'Ошибка при получении голосований' }, { status: 500 });
  //} finally {
   // await prisma.$disconnect();
 // }
//}
