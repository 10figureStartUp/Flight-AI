import Head from 'next/head';
import React, { useState } from 'react';
import styles from './page7.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Select from 'react-select';
import LoadingScreen from './loadingscreen';

const airlines = [
  { value: 'American Airlines', label: 'American Airlines' },
  { value: 'Delta Air Lines', label: 'Delta Air Lines' },
  { value: 'United Airlines', label: 'United Airlines' },
  { value: 'Southwest Airlines', label: 'Southwest Airlines' },
  { value: 'JetBlue Airways', label: 'JetBlue Airways' },
  { value: 'Alaska Airlines', label: 'Alaska Airlines' }
];

const flightClasses = [
  { value: 'Cheapest', label: 'Cheapest' },
  { value: 'Economy', label: 'Economy' },
  { value: 'Business Class', label: 'Business Class' },
  { value: 'First Class', label: 'First Class' },
  { value: 'Semi-Private', label: 'Semi-Private' },
  { value: 'Private', label: 'Private' }
];

const Page7 = () => {
  const router = useRouter();
  const {
    firstName,
    lastName,
    gender,
    email,
    flightType,
    departDate,
    returnDate,
    oneWayDate,
    numFlights,
    multiCityDates,
    originAirport,
    destinationAirport,
    selectedAirports,
    budget,
  } = router.query;

  const [airline, setAirline] = useState(null);
  const [flightClass, setFlightClass] = useState(null);
  const [seat, setSeat] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const requestData = {
      fullName: `${firstName} ${lastName}`,
      email,
      gender,
      flightType,
      departDate,
      returnDate,
      oneWayDate,
      numFlights,
      multiCityDates,
      originAirport,
      destinationAirport,
      selectedAirports,
      budget,
      airline: airline?.value,
      flightClass: flightClass?.value,
      seat,
    };

    // Send the request data to the generate.js file
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    const data = await response.json();
    setResult(data.result);    

    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push({
      pathname: '/page8',
      query: { result: data.result },
    });
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Head>
            <title>City-Scape Flights - Preferences</title>
            <meta name="description" content="Enter your flight preferences" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main} style={{ marginTop: "-110px" }}>
        <Image
          src="/plane.png"
          alt="Plane"
          width={667}
          height={190}
          className={styles.planeImage}
        />
            <h1 className={styles.title}>City-Scape Flights</h1>

            <h2 className={styles.subTitle}>Do You Have Any Preferences?</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={
styles.label}>
Airline:
<Select
               options={airlines}
               onChange={setAirline}
               value={airline}
               className={styles.select}
             />
</label>
<label className={styles.label}>
            Class:
            <Select
              options={flightClasses}
              onChange={setFlightClass}
              value={flightClass}
              className={styles.select}
            />
          </label>

          <label className={styles.label}>
            Seat:
            <input
              type="text"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              className={styles.input}
            />
          </label>

          <button className={styles.continueButton} onClick={handleSubmit}>
  Book My Flight
</button>

{result && <p>{result}</p>}
        </form>

        <a className={styles.backButton} onClick={() => router.back()}>
          Go Back
        </a>
      </main>
    </>
  )}
</div>
);
};

export default Page7;
