import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./page5.module.css";
import Head from "next/head";
import Image from "next/image";
import Select from "react-select";
import { airports } from "./AirportSelection";

const Page5OneWay = ({ onContinue }) => {
  const router = useRouter();
  const [originAirport, setOriginAirport] = useState(null);
  const [destinationAirport, setDestinationAirport] = useState(null);
  const airportOptions = airports;

  const handleContinue = () => {
    // Pass the selected airports to the parent component
    onContinue([{ origin: originAirport.value, destination: destinationAirport.value }]);

    // Navigate to the next page
    router.push('/page6');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Flight Dates</title>
        <meta name="description" content="Select your flight dates" />
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
          <button className={styles.continueButton} onClick={handleContinue}>
            Continue
          </button>
        </>
      </main>
    </div>
  );
};

Page5OneWay.propTypes = {
  onContinue: PropTypes.func.isRequired
};

export default Page5OneWay;
