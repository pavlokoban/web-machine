// checkVotes.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Получение всех голосований из базы данных
    const allVotes = await prisma.vote.findMany();
    console.log('Все голосования:', allVotes);
    
    // Пример создания новой записи, если нужно
    // const createVote = await prisma.vote.create({
    //   data: {
    //     option: 'SEO-продвижение',
    //     count: 0,
    //   },
    // });
    // console.log('Создано голосование:', createVote);
  } catch (error) {
    console.error('Ошибка при получении голосований:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
