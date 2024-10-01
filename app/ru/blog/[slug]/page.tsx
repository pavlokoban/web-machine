// app/ru/blog/[slug]/page.tsx

import { blogArticles } from '@/utils/dataBlogArticlesRu';
import { notFound } from 'next/navigation';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import VoteComponentRu from '@/components/vote/VoteComponentRu';
import ViewsCounter from './ViewsCounter';
import styles from '@/components/animatedlinks/AnimatedBlogLink.module.css';
import type { Metadata } from "next";
import Link from 'next/link';

interface BlogArticlePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata | undefined> {
  const article = blogArticles.find((item) => item.slug === params.slug);

  if (!article) {
    return;
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: article.canonical,
    },
  };
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = blogArticles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound(); // Отправляем на страницу 404, если статья не найдена
  }

  return (
    <>
    <LayoutMainRus>
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
        <div className='flex' style={{width:'100%'}}>
            <div className='desc-67-mob-100'>
            <img 
            src={article?.image} // Используем свойство 'image', которое есть в структуре
            alt={article?.imageAlt} // Используем свойство 'imageAlt', которое есть в структуре
            className="border-12 w-full transition-transform duration-500 ease-in-out group-hover:transform group-hover:translate-y-2"
            width={871}
        />
                <h1 className={'unbounded'}>{article?.title}</h1>
                <div className='flex'>
                    <div className={styles.articleFormat}>
                        <span className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-1h12V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1z"/>
                            </svg>
                        </span>
                        <span className={styles.dateText}>{article?.date}</span>
                            {/* Убираем передачу начальных просмотров */}
                            <span className="styles.icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.07-.122.153-.195.24a13.133 13.133 0 0 1-1.66 2.042C11.88 11.332 10.12 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.133 13.133 0 0 1 1.173 8z"/>
                            <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                            </svg>
                            </span>
                        <span className={styles.viewsText}><ViewsCounter slug={article.slug} /></span>
                    </div>
                </div>
                <span className="stack-line"></span>
                <div dangerouslySetInnerHTML={{ __html: article?.fullText }}></div>
            </div>
                
            <div className='desc-33-mob-100 padding-blog-col'>
                <VoteComponentRu />
                <h2>Наши услуги</h2>
                <br></br>
                <ul className='ulBlogCol'>
                    <li><Link className={'a-anim'} href="/ru/web-development">Разработка сайта</Link></li>
                    <li><Link className={'a-anim'} href="/ru/online-store-development">Разработка интернет-магазина</Link></li>
                    <li><Link className={'a-anim'} href="/ru/marketplace-auction-development">Разработка маркетплейса</Link></li>
                    <li><Link className={'a-anim'} href="/ru/design">Редизайн сайта</Link></li>
                    <li><Link className={'a-anim'} href="/ru/seo">Раскрутка сайта</Link></li>
                    <li><Link className={'a-anim'} href="/ru/services">Все услуги</Link></li>
                </ul>
            </div>
       
        </div>
    </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
          <ContactFormRus />
        </div>
      </LayoutMainRus>
    </>
  );
}
