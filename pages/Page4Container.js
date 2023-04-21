// containers/Page4Container.js
import React, { useState, useEffect } from "react";
import Page4 from "../pages/page4";
import { useRouter } from "next/router";

const Page4Container = () => {
  const router = useRouter();
  const { flightType } = router.query;

  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneWayDate, setOneWayDate] = useState(null);
  const [numFlights, setNumFlights] = useState(1);
  const [multiCityDates, setMultiCityDates] = useState([]);

  useEffect(() => {
    setMultiCityDates(Array(numFlights).fill(null));
  }, [numFlights]);

  const handleContinue = () => {
    // Handle saving dates and move to the next page
    router.push("/page5");
  };

  return (
    <Page4
      flightType={flightType}
      departDate={departDate}
      setDepartDate={setDepartDate}
      returnDate={returnDate}
      setReturnDate={setReturnDate}
      oneWayDate={oneWayDate}
      setOneWayDate={setOneWayDate}
      numFlights={numFlights}
      setNumFlights={setNumFlights}
      multiCityDates={multiCityDates}
      setMultiCityDates={setMultiCityDates}
      onContinue={handleContinue}
    />
  );
};

export default Page4Container;
