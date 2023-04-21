import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./page5.module.css";
import Head from "next/head";
import Image from "next/image";
import Select from "react-select";
import { airports } from "./AirportSelection";

const Page5OneWay = () => {
  const router = useRouter();
  const {
    firstName,
    lastName,
    email,
    gender,
    birthDate,
    flightType,
    oneWayDate,
  } = router.query;

  const [originAirport, setOriginAirport] = useState(null);
  const [destinationAirport, setDestinationAirport] = useState(null);
  const airportOptions = airports;

  const handleContinue = () => {
    // Navigate to the next page
    router.push({
      pathname: "/page6",
      query: {
        firstName,
        lastName,
        email,
        gender,
        birthDate,
        flightType,
        oneWayDate,
        originAirport: originAirport.value,
        destinationAirport: destinationAirport.value,
      },
    });
  };

  const isFormComplete = originAirport && destinationAirport;

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Flight Dates</title>
        <meta name="description" content="Select your flight dates" />
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
        <h1 className={styles.title}>Where are you flying?</h1>
        <>
          <Select
            options={airportOptions}
            value={originAirport}
            onChange={(value) => setOriginAirport(value)}
            placeholder="From:"
          />
          <Select
            options={airportOptions}
            value={destinationAirport}
            onChange={(value) => setDestinationAirport(value)}
            placeholder="To:"
          />

          {isFormComplete && (
            <button className={styles.continueButton} onClick={handleContinue}>
              Continue
            </button>
          )}
          <a
            className={styles.backButton}
            onClick={() => router.push("/page4?flightType=One-Way")}
          >
            Go Back
          </a>
        </>
      </main>
    </div>
  );
};

export default Page5OneWay;
