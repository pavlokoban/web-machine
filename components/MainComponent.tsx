import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import dataArticles from "../utils/dataArticles";
import ServicesItem from './ServicesItem';
import { Unbounded } from "next/font/google";

const MainComponent = () => {
    return(
<div className={'container mx-auto p-10 px-10 m-10 w-100'}>
<h1 className={'unbounded'}>Welcome to New Web-Machine Rocks site</h1>
<div className={'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
        {dataArticles.articles.map((article) => (
                <ServicesItem
                    article={article}
                    key={article.slug}
                >
                </ServicesItem>
        ))}
</div>
</div>
    );
}

export default MainComponent;