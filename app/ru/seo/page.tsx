// app/ru/seo/page.tsx
import { headers } from 'next/headers';

const Page: React.FC = () => {
  // Получаем заголовки из запроса
  const headersList = headers();
  const locale = headersList.get('x-locale') || 'ru'; // Используйте 'ru' по умолчанию, если заголовок не найден

  return (
    <html lang={locale}>
      <head>
        <title>My Page</title>
      </head>
      <body>
        <h1>Current Locale: {locale}</h1>
        {/* Ваше содержимое страницы */}
      </body>
    </html>
  );
};

export default Page;
