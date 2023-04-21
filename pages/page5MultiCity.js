import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./page5.module.css";
import Head from "next/head";
import Image from "next/image";
import Select from "react-select";
import { airports } from "./AirportSelection";

const Page5MultiCity = () => {
  const router = useRouter();
  const {
    firstName,
    lastName,
    email,
    gender,
    birthDate,
    flightType,
    numFlights,
  } = router.query;

  const airportOptions = airports;
  const [selectedAirports, setSelectedAirports] = useState(
    Array(parseInt(numFlights) || 0).fill({ from: null, to: null })
  );

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
        numFlights,
        ...selectedAirports.reduce(
          (result, airport, index) => ({
            ...result,
            [`from${index + 1}`]: airport.from.value,
            [`to${index + 1}`]: airport.to.value,
          }),
          {}
        ),
      },
    });
  };

  const handleAirportChange = (index, type, value) => {
    const newAirports = [...selectedAirports];
    newAirports[index] = { ...newAirports[index], [type]: value };
    setSelectedAirports(newAirports);
  };

  const isFormComplete = () => {
    return selectedAirports.every(
      (airport) => airport.from !== null && airport.to !== null
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>City-Scape Flights - Flight Dates</title>
        <meta name="description" content="Select your flight dates" />
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
        <h1 className={styles.title}>Where are you flying?</h1>
        <>
          {Array.from({ length: parseInt(numFlights) }).map((_, i) => (
            <div key={i}>
              <h3>Flight #{i + 1}</h3>
              <Select
                options={airportOptions}
                value={airportOptions.find(
                  (option) => option.value === selectedAirports[i].from
                )}
                onChange={(value) => handleAirportChange(i, "from", value)}
                placeholder="From:"
              />
              <Select
                options={airportOptions}
                value={airportOptions.find(
                  (option) => option.value === selectedAirports[i].to
                )}
                onChange={(value) => handleAirportChange(i, "to", value)}
                placeholder="To:"
              />
            </div>
          ))}
          {isFormComplete() && (
            <button
              className={styles.continueButton}
              onClick={handleContinue}
            >
              Continue
            </button>
          )}

          <a
            className={styles.backButton}
            onClick={() => router.push("/page4?flightType=Multi-City")}
          >
        Go Back
      </a>
    </>
  </main>
</div>
);
};

export default Page5MultiCity;