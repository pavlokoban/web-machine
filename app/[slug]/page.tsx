'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import dataArticles from "../../utils/dataArticles";
import LayoutMain from '@/components/LayoutMain';

export default function ServicePageScreen() {
    const { slug } = useParams();
    const articlePage = dataArticles.articles.find(item => item.slug === slug);

    if (!articlePage) {
        return (
            <h1>Page not found</h1>
        );
    }

    return (
        <div>
            <LayoutMain>
                <h1>{articlePage.name}</h1>
            </LayoutMain>
        </div>
    );
}
