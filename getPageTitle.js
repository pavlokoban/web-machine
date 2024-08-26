import { Metadata } from 'next'; // This line is unnecessary unless you need the Metadata type
export const getPageTitle = async (path) => {
    const titles = {
      '/': 'United Technologies of Success',
      '/about': 'About Us',
      '/services': 'Our Services',

      '/ru': 'Главная',
      '/ru/web-development': 'Создание сайтов',
      '/ru/web-development/react-next-js': 'Создание сайтов на React / Next.js',
      '/ru/seo': 'Продвижение сайтов',
      '/ru/sitemap': 'Карта сайта',
      '/ru/seo-cost-calculator': 'SEO онлайн калькулятор',
      '/ru/web-development-cost-calculator': 'Оценка стоимости веб-разработки онлайн',

    };
  
    return titles[path] || null;
  };
  