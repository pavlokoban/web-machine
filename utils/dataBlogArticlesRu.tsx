// utils/dataBlogArticlesRu.tsx
export const blogArticles = [
    {
      id: 1,
      title: 'Название статьи',
      slug: 'nazvanie-stati1',
      seoTitle: '666SEO заголовок статьи',
      seoDescription: 'SEO описание статьи',
      canonical: '/ru/blog/nazvanie-stati',
      image: '/images/blog/covers/registration-baidu.jpg',
      imageAlt: 'Описание изображения',
      date: '2024-09-12', // дата публикации
      views: 500, // начальное количество просмотров
      topics: ['React', 'Next.js', 'JavaScript'],
      fullText: `<p>Полный текст статьи...</p>`,
    },
    {
      id: 2,
      title: 'Другая статья',
      slug: 'drugaya-statia',
      seoTitle: '777SEO заголовок для другой статьи',
      seoDescription: 'SEO описание для другой статьи',
      canonical: '/ru/blog/drugaya-statia',
      image: '/images/blog/covers/registration-baidu.jpg',
      imageAlt: 'Другое изображение',
      date: '2024-08-20',
      views: 500,
      topics: ['SEO', 'Продвижение', 'Оптимизация'],
      fullText: `<p>Текст другой статьи...</p>`,
    },
    // можно добавить больше статей...
  ];
  