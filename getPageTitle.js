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
      '/ru/cases': 'Наши работы',
      '/ru/company': 'О компании',
      '/ru/reviews': 'Отзывы о компании',
      '/ru/sitemap': 'Карта сайта',
      '/ru/ads': 'Онлайн реклама',
      '/ru/contact': 'Контакты',
      '/ru/online-store-development': 'Разработка интернет-магазинов',
      '/ru/seo-online-store': 'Раскрутка интернет-магазина',
      '/ru/design': 'Веб-дизайн',
      '/ru/services': 'Услуги и цены', 
      '/ru/online-services': 'Онлайн сервисы',
      '/ru/seo-cost-calculator': 'SEO онлайн калькулятор',
      '/ru/web-development-cost-calculator': 'Оценка стоимости веб-разработки онлайн',
      '/ru/legal': 'Юридическая информация',
      '/ru/cookies': 'Политика Cookies',

    };
  
    return titles[path] || null;
  };
  