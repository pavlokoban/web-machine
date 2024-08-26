// можно удалить

export const getLangFromPath = (path) => {
  const langMap = {
     // '/': 'en',
     // '/contact': 'en',
      '/ru': 'ru',
      'ru/contact': 'ru',
      '/ru/web-development': 'ru',
      'web-machine.rocks/ru/web-development': 'ru',
      '/ru/web-development/react-next-js': 'ru',
      '/ru/seo': 'ru',
      '/ru/sitemap': 'ru',
      '/ru/seo-cost-calculator': 'ru',
      '/ru/web-development-cost-calculator': 'ru',
    };
  
    // Приведение пути к нижнему регистру и обрезка лишних слэшей
    //const cleanedPath = path.toLowerCase().replace(/\/+$/, '');
    const cleanedPath = path.replace(/\/$/, ''); // Убираем последний слэш, если он есть
    console.log('Received fullPath:', path);  // Логирование полученного пути
    console.log('Cleaned path:', cleanedPath);  // Логирование очищенного пути
    console.log('Matching Lang:', langMap[cleanedPath]); // Логирование языка по cleanedPath

    // По умолчанию 'en', если путь не соответствует ни одному ключу
    return langMap[cleanedPath] || 'en';
  };
  