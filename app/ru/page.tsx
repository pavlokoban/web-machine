import * as React from 'react';
import Head from 'next/head';
import styles from './RuStyle.module.css'

const Test = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us on this page." />
      </Head>
      <div className={styles.backgroundru}>
        <h1 className={styles.text_white}>About Us</h1>
        <p>Welcome to the about page!</p>
      </div>
    </>
  );
};

export default Test;
