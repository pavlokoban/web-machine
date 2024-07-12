import * as React from 'react';
import Link from 'next/link';
import dataArticles from "../utils/dataArticles";
import Image from 'next/image';
import { Article } from '../types'; // Импорт интерфейса

interface ServicesItemProps {
  article: Article;
}

export default function ServicesItem({ article }: ServicesItemProps) {
    return (
        <div className={'max-w-sm rounded-md overflow-hiddens shadow-lg'}>
        <Link href={`/${article.slug}`}>
        <img src={article.image}
                alt={article.title}
                className={'rounded shadow w-full'}
        />
                {article.title + ' ' + article.description}
        </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <h2 className={'font-bold text-center text-xl mb-2'}>{article.title}</h2>
                <h3 className={'text-center mb-2'}>{article.description}</h3>
                <button type="button" className={'bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md'}>More</button>
            </div>
        </div>
)
}
    return (
        <div className={'max-w-sm rounded-md overflow-hiddens shadow-lg'}>
        <Link href={`/${article.slug}`}>
        <img src={article.image}
                alt={article.title}
                className={'rounded shadow w-full'}
        />
                {article.title + ' ' + article.description}
        </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <h2 className={'font-bold text-center text-xl mb-2'}>{article.title}</h2>
                <h3 className={'text-center mb-2'}>{article.description}</h3>
                <button type="button" className={'bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md'}>More</button>
            </div>
        </div>
)
}
