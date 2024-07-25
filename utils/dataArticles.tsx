import { Article } from '../components/types'; // Импорт интерфейса

const dataArticles: { articles: Article[] } = {
    articles:[
        {
            name: 'Web Development',
            slug: 'web-development',
            category: 'services',
            description: 'Web Development',
            title: 'Web Development',
            image: '/images/blog/covers/prodvizhenie-sajta-v-baidu-2.jpg',
            rating: '4.5',
            numReviews: '67',
            text: 'fsfsfafsfzsdf',
        },
        {
            name: 'SEO',
            slug: 'seo',
            category: 'services',
            description: 'SEO',
            title: 'SEO',
            image: "/images/blog/covers/registration-baidu.jpg",
            rating: '4.4',
            numReviews: '112',
            text: '',
        },
        {
            name: 'PPC',
            slug: 'ppc',
            category: 'services',
            description: 'PPC',
            title: 'PPC',
            image: '/images/blog/covers/prodvizhenie-v-behance-1.jpg',
            rating: '4.2',
            numReviews: '33',
            text: '',
        },
    ]
}

export default dataArticles;
