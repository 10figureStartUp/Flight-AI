import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./page7.module.css";
import Head from "next/head";
import Image from "next/image";
import Select from "react-select";
import { airlines } from "./AirlineSelection";
import { classes } from "./ClassSelection";

const Page7Container = ({ onContinue }) => {
  const router = useRouter();
  const [preferredAirline, setPreferredAirline] = useState(null);
  const [preferredClass, setPreferredClass] = useState(null);
  const [seatPreference, setSeatPreference] = useState("");
  const airlineOptions = airlines;
  const classOptions = classes;

  const handleContinue = () => {
    // Pass the selected preferences to the parent component
    onContinue({ airline: preferredAirline.value, class: preferredClass.value, seat: seatPreference });

    // Navigate to the next page
    router.push('/page8');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Preferences</title>
        <meta name="description" content="Select your flight preferences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="/plane.png"
          alt="Plane"
          width={100}
          height={65}
          className={styles.planeImage}
        />
        <h1 className={styles.title}>City-Scape Flights</h1>
        <h2 className={styles.subTitle}>Do You Have Any Preferences?</h2>
        <>
          <label className={styles.label}>
            Airline:
            <Select
              options={airlineOptions}
              value={preferredAirline}
              onChange={(value) => setPreferredAirline(value)}
              isClearable
              placeholder="Select Airline"
            />
          </label>
          <label className={styles.label}>
            Class:
            <Select
              options={classOptions}
              value={preferredClass}
              onChange={(value) => setPreferredClass(value)}
              placeholder="Select Class"
            />
          </label>
          <label className={styles.label}>
            Seat:
            <input
              type="text"
              value={seatPreference}
              onChange={(e) => setSeatPreference(e.target.value)}
              className={styles.input}
            />
          </label>
          <button className={styles.continueButton} onClick={handleContinue}>
            Book My Flight
          </button>
        </>
        <a className={styles.backButton} onClick={() => router.back()}>
          Go Back
        </a>
      </main>
    </div>
  );
};

Page7Container.propTypes = {
  onContinue: PropTypes.func.isRequired
};

export default Page7Container;
