import Head from 'next/head';
import React, { useState } from 'react';
import styles from './page6.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Page6 = () => {
  const router = useRouter();
  const [budget, setBudget] = useState('');

  const isBudgetValid = budget.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/page7',
      query: { 
        budget: budget,
        ...router.query
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Budget Information</title>
        <meta name="description" content="Enter your budget information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ marginTop: "-10px" }}>
        <Image
          src="/plane.png"
          alt="Plane"
          width={667}
          height={190}
          className={styles.planeImage}
        />
        <h1 className={styles.title}>City-Scape Flights</h1>

        <h2 className={styles.subTitle}>What's Your Budget?</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Budget:
            <input
              type="text"
              value={'$' + budget}
              onChange={(e) => {
                const value = e.target.value;
                const number = value.slice(1);
                if (/^\d*$/.test(number)) {
                  setBudget(number);
                }
              }}
              className={styles.input}
            />
          </label>

          {isBudgetValid && (
            <button className={styles.continueButton} type="submit">
              Continue
            </button>
          )}
        </form>

        <a className={styles.backButton} onClick={() => router.back()}>
          Go Back
        </a>
      </main>
    </div>
  );
};

export default Page6;
