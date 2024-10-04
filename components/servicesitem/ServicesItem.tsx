import * as React from 'react';
import Link from 'next/link';
import { Article } from '../types'; //импортирую обязательный для тайпскрипта интерфейс
import Image from 'next/image';

interface ServicesItemProps { //не забыть переименовать все это с Service на Blog
  article: Article;
}

export default function ServicesItem({ article }: ServicesItemProps) {
  return (
    <div className={'max-w-sm overflow-hidden'}>
      <Link href={`/${article.slug}`}>
        <Image 
          src={article.image}
          alt={article.title}
          width={400} height={400} 
          className={'border-12 w-full'}
        />
        <div>
          {article.title + ' ' + article.description}
        </div>
      </Link>
      <div className={'flex flex-col justify-center items-center p-5'}>
        <h2 className={'font-bold text-center text-xl mb-2'}>{article.title}</h2>
        <h3 className={'text-center mb-2'}>{article.description}</h3>
        <button type="button" className={'button-info'}>More</button>
      </div>
    </div>
  );
}
