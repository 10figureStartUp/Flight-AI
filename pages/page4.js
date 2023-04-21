import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./page4.module.css";

const Page4 = () => {
  const router = useRouter();
  const { flightType, firstName, lastName, email, gender, birthDate } = router.query;

  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneWayDate, setOneWayDate] = useState(null);
  const [numFlights, setNumFlights] = useState(1);
  const [multiCityDates, setMultiCityDates] = useState([]);

  const isFormComplete =
    (flightType === "Round Trip" && departDate && returnDate) ||
    (flightType === "One-Way" && oneWayDate) ||
    (flightType === "Multi-City" &&
      multiCityDates.length > 0 &&
      multiCityDates.every((date) => date));

  const handleContinue = () => {
    const nextPage = flightType === "Round Trip"
      ? "/page5RoundTrip"
      : flightType === "One-Way"
        ? "/page5OneWay"
        : "/page5MultiCity";

    router.push({
      pathname: nextPage,
      query: {
        firstName,
        lastName,
        email,
        gender,
        birthDate,
        flightType,
        departDate,
        returnDate,
        oneWayDate,
        numFlights,
        multiCityDates: JSON.stringify(multiCityDates),
      },
    });
  };

  useEffect(() => {
    setMultiCityDates(Array(numFlights).fill(null));
  }, [numFlights]);

  const handleMultiCityDateChange = (index, date) => {
    const newDates = [...multiCityDates];
    newDates[index] = date;
    setMultiCityDates(newDates);
  };

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
        <h2 className={styles.subTitle}>What Date Are You Flying?</h2>

        {flightType === "Round Trip" && (
          <>
            <label className={styles.label}>
              Departing Flight:
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Returning Flight:
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </label>
          </>
        )}

        {flightType === "One-Way" && (
          <label className={styles.label}>
            One-Way Flight:
            <input
              type="date"
              value={oneWayDate}
              onChange={(e) => setOneWayDate(e.target.value)}
            />
          </label>
)}
{flightType === "Multi-City" && (
      <>
        <h3>How many Flights Do You Need?</h3>
        <select
          value={numFlights}
          onChange={(e) => setNumFlights(parseInt(e.target.value))}
        >
          {[...Array(20)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {multiCityDates.map((date, i) => (
          <label className={styles.label} key={i}>
            Flight #{i + 1}:
            <input
              type="date"
              value={date}
              onChange={(e) =>
                handleMultiCityDateChange(i, e.target.value)
              }
            />
          </label>
        ))}
      </>
    )}

    {isFormComplete && (
      <button className={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
    )}
    <a className={styles.backButton} onClick={() => router.push("/page3")}>
      Go Back
    </a>

  </main>
</div>
);
};

export default Page4;
