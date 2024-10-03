// testConnection.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const allVotes = await prisma.vote.findMany(); // предположим, что у вас есть таблица 'vote'
  console.log(allVotes);
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
