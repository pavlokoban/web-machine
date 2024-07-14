import { Article } from '../components/types'; // Импорт интерфейса

const dataArticles: { articles: Article[] } = {
    articles:[
        {
            name: 'Web Development',
            slug: 'web-development',
            category: 'services',
            description: 'Web Development',
            title: 'Web Development',
            image: '/images/web-development.png',
            rating: '4.5',
            numReviews: '67',
            text: '',
        },
        {
            name: 'SEO',
            slug: 'seo',
            category: 'services',
            description: 'SEO',
            title: 'SEO',
            image: "/images/seo.png",
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
            image: '/images/ppc.png',
            rating: '4.2',
            numReviews: '33',
            text: '',
        },
    ]
}

export default dataArticles;