import { Metadata } from 'next'; // This line is unnecessary unless you need the Metadata type
export const getPageTitle = async (path) => {
    // Mock function to get the title based on the path
    // This can be replaced by actual logic that matches your project setup
    const titles = {
      '/': 'United Technologies of Success',
      '/about': 'About Us',
      '/ru': 'Главная',
      '/ru/web-development': 'Создание сайтов',
      '/ru/seo': 'Продвижение сайтов',
      '/services': 'Our Services',
      '/ru/sitemap': 'Карта сайта',
      '/ru/seo-cost-calculator': 'SEO онлайн калькулятор',
      '/ru/web-development-cost-calculator': 'Оценка стоимости веб-разработки онлайн',
      // Add more paths and their titles here
    };
  
    return titles[path] || null;
  };
  