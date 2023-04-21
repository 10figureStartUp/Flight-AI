import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/page2");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights</title>
        <meta name="description" content="City-Scape Flights booking website" />
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

        <p className={styles.description}>
          Welcome to City-Scape Flights
          <br />
          Press continue to begin
        </p>

        <button className={styles.continueButton} onClick={handleContinue}>
          Continue
        </button>
      </main>
    </div>
  );
}
