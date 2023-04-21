import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./page3.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Page3 = () => {
  const [flightType, setFlightType] = useState("Round Trip");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleContinue(flightType);
  };

  const handleChange = (e) => {
    setFlightType(e.target.value);
  };

  const handleContinue = (flightType) => {
    const { firstName, lastName, email, gender, birthDate } = router.query;
    router.push({
      pathname: "/page4",
      query: {
        firstName,
        lastName,
        email,
        gender,
        birthDate,
        flightType,
      },
    });
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Flight Type</title>
        <meta name="description" content="Choose your flight type" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ marginTop: "-100px" }}>
        <Image
          src="/plane.png"
          alt="Plane"
          width={667}
          height={190}
          className={styles.planeImage}
        />
        <h1 className={styles.title}>City-Scape Flights</h1>
        <h2 className={styles.subTitle}>What Type of Flight Am I Booking?</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                value="Round Trip"
                checked={flightType === "Round Trip"}
                onChange={handleChange}
              />
              Round Trip
            </label>
            <label>
              <input
                type="radio" 
                value="One-Way"
                checked={flightType === "One-Way"}
                onChange={handleChange}
              />
              One-Way
            </label>
            <label>
              <input
                type="radio"
                value="Multi-City"
                checked={flightType === "Multi-City"}
                onChange={handleChange}
              />
              Multi-City
            </label>
          </div>

          <button className={styles.continueButton} type="submit">
            Continue
          </button>
        </form>

        <a className={styles.backButton} onClick={() => router.push("/page2")}>
          Go Back
        </a>
      </main>
    </div>
  );
};

export default Page3;
