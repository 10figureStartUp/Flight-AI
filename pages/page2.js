import Head from 'next/head';
import React, { useState } from 'react';
import styles from './page2.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Page2 = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const isFormComplete = firstName && lastName && gender && birthDate;

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/page3',
      query: {
        firstName,
        lastName,
        email,
        gender,
        birthDate
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Personal Information</title>
        <meta name="description" content="Enter your personal information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ marginTop: "-80px" }}>
        <Image
          src="/plane.png"
          alt="Plane"
          width={667}
          height={190}
          className={styles.planeImage}
        />
        <h1 className={styles.title}>City-Scape Flights</h1>

        <h2 className={styles.subTitle}>Personal Information</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Gender (ONLY 2):
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={styles.select}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          <label className={styles.label}>
            Birthday:
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className={styles.input}
            />
          </label>

          {isFormComplete && (
            <button className={styles.continueButton} type="submit">
              Continue
            </button>
          )}
        </form>

        <a className={styles.backButton} onClick={() => router.push("/")}>
          Go Back
        </a>
      </main>
    </div>
  );
};

export default Page2;