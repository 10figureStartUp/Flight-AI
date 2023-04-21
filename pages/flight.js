import Head from "next/head";
import React, { useState } from "react";
import styles from "./index.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Select from "react-select";

function Step1() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      {currentStep === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>
          <form>
            <label>
              Full Name:
              <input type="text" name="fullName" />
            </label>
            <br />
            <label>
              Date of Birth:
              <input type="date" name="dateOfBirth" />
            </label>
            <br />
            <label>
              Gender:
              <select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <button onClick={() => setCurrentStep(currentStep + 1)}>Continue</button>
          </form>
        </div>
      )}
    </div>
  );
}

  function AirportSelect({ label, options, value, onChange }) {
    return (
      <div>
        <label>{label}</label>
        <Select
          options={options}
          value={value}
          onChange={(selectedOption) => onChange(selectedOption)}
        />
      </div>
    );
  }
  
export { AirportSelect };
// data/airports.js

export const airports = [
  { value: "ATL", label: "Hartsfield-Jackson Atlanta International Airport" },
];

function FlightType({ value, onChange }) {
  return (
    <div>
      <label>What Type of Flight Do You Need?</label>
      <div>
        <input
          type="radio"
          id="roundTrip"
          name="flightType"
          value="roundTrip"
          checked={value === "roundTrip"}
          onChange={onChange}
        />
        <label htmlFor="roundTrip">Round Trip</label>
        <input
          type="radio"
          id="oneWay"
          name="flightType"
          value="oneWay"
          checked={value === "oneWay"}
          onChange={onChange}
        />
        <label htmlFor="oneWay">One-Way</label>
        <input
          type="radio"
          id="multiCity"
          name="flightType"
          value="multiCity"
          checked={value === "multiCity"}
          onChange={onChange}
        />
        <label htmlFor="multiCity">Multi-City</label>
      </div>
    </div>
  );
}

function RoundTripFlightDates({ departureDate, returnDate, onChange }) {
  return (
    <>
      <label htmlFor="departureFlight">Departure Flight</label>
      <input
        type="date"
        id="departureFlight"
        name="departureFlight"
        value={departureDate}
        onChange={(e) => onChange(e, "departure")}
      />
      <label htmlFor="returnFlight">Return Flight</label>
      <input
        type="date"
        id="returnFlight"
        name="returnFlight"
        value={returnDate}
        onChange={(e) => onChange(e, "return")}
      />
    </>
  );
}

function OneWayFlightDate
({ departureDate, onChange }) {
  return (
    <>
      <label htmlFor="flightDate">Flight Date</label>
      <input
        type="date"
        id="flightDate"
        name="flightDate"
        value={departureDate}
        onChange={onChange}
      />
    </>
  );
}


function MultiCityFlights({ numOfFlights, setNumOfFlights, flightDates, setFlightDates }) {
  const handleDateChange = (e, index) => {
    const newFlightDates = [...flightDates];
    newFlightDates[index] = e.target.value;
    setFlightDates(newFlightDates);
  };

  return (
    <div>
      <label>Number of flights:</label>
      <select
        value={numOfFlights}
        onChange={(e) => {
          const newNumOfFlights = parseInt(e.target.value);
          setNumOfFlights(newNumOfFlights);
          setFlightDates(new Array(newNumOfFlights).fill(new Date().toISOString().split("T")[0]));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <div>
        {flightDates.map((date, index) => (
          <div key={index}>
            <label>{`Flight ${index + 1}`}</label>
            <input
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


function PriceTo({ value, onChange, showInputFields }) {
  return showInputFields ? (
    <div>
      <label>Budget</label>
      <input
        type="number"
        min={1}
        name="priceMax"
        placeholder="Enter the maximum price"
        value={value}
        onChange={onChange}
      />
    </div>
  ) : null;
}

function LoadingScreen() {
  return (
    <div>
      <h3>-Finding Your Ideal Flight-</h3>
      <img src="/loading.gif" className={styles.loading} alt="Loading..." />
    </div>
  );
}

export default function Home() {
  const [flightType, setFlightType] = useState("roundTrip");
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [flightDate, setFlightDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [age, setAge] = useState(30);
  const [priceMax, setPriceMax] = useState(100);
  const [loading, setLoading] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [numOfMultiCityFlights, setNumOfMultiCityFlights] = useState(1);
  const [multiCityFlightDates, setMultiCityFlightDates] = useState([new Date().toISOString().split("T")[0]]);
  const [showLoadingPage, setShowLoadingPage] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(true);

const [gender, setGender] = useState("male");
const [fullName, setFullName] = useState("");
const [dateOfBirth, setDateOfBirth] = useState("");

// Add state variables for Step 2 input fields
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");

const [fromAirport, setFromAirport] = useState({});
const [toAirport, setToAirport] = useState({});


  

  const [showInputFields, setShowInputFields] = useState(true);
  

  const [result, setResult] = useState("");

  async function handleOnSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setShowInputFields(false);
    setLoading(true);
    setResult("");
    const response = await fetch("/api/generate-flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        // ... other fields
      }),
    });
  
    const data = await response.json();
        setLoading(false);
  }
  

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <main className={styles.main}>
      {!loading && <img src="/dog.png" className={styles.img} />}
{!loading && <h3>City-Scape Flights</h3>}



{currentStep === 1 && (
    <div>
      <h2>Step 1: Personal Information</h2>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender(ONLY 2):
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <button onClick={() => setCurrentStep(currentStep + 1)}>Continue</button>
      </form>
    </div>
  )}



        {showInputFields && (
  <>
    {currentStep === 2 && (
      <FlightType
        value={flightType}
        onChange={(e) => setFlightType(e.target.value)}
      />
    )}

  </>
)}

  {currentStep === 3 &&
    (flightType === "roundTrip" ? (
      <RoundTripFlightDates
        departureDate={departureDate}
        returnDate={returnDate}
        onChange={(e, type) => {
          if (type === "departure") {
            setDepartureDate(e.target.value);
          } else if (type === "return") {
            setReturnDate(e.target.value);
          }
        }}
      />
    ) : flightType === "oneWay" ? (
      <OneWayFlightDate
        departureDate={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
    ) : (
<MultiCityFlights
  numOfFlights={numOfMultiCityFlights}
  setNumOfFlights={setNumOfMultiCityFlights}
  flightDates={multiCityFlightDates}
  setFlightDates={setMultiCityFlightDates}
  onUpdate={(data) => setMultiCityFlightDates(data)} // Add an onUpdate prop to update the parent state
/>

    ))}

{currentStep === 4 && flightType === "roundTrip" && (
  <>
    <h3>Where Are You Flying?</h3>
    <AirportSelect
      label="From"
      options={airports}
      value={fromAirport}
      onChange={(selectedOption) => setFromAirport(selectedOption)}
    />
    <AirportSelect
      label="To"
      options={airports}
      value={toAirport}
      onChange={(selectedOption) => setToAirport(selectedOption)}
    />
  </>
)}


{currentStep === 5 && (
  <>
    <PriceTo
      value={priceMax}
      onChange={(e) => setPriceMax(Number.parseInt(e.target.value))}
      showInputFields={showInputFields} // Pass showInputFields prop
    />

    {loading ? (
      <LoadingScreen />
    ) : (
      <form onSubmit={handleOnSubmit}>        
        <input type="submit" value="Book My Flight" />
      </form>
    )}
  </>
)}





{currentStep < 5 && currentStep !== 1 && (
        <>
          {showContinueButton && (
            <button onClick={() => setCurrentStep(currentStep + 1)}>
              Continue
            </button>
          )}

          {currentStep > 1 && !loading && (
            <button
              onClick={() => {
                setCurrentStep(currentStep - 1);
                setShowContinueButton(true);
              }}
            >
              {loading && <LoadingScreen />}

              Back
            </button>
          )}
        </>
      )}

{!loading && result && (
  <div>
    <h3>Generated Message</h3>
    <p>{result}</p>
  </div>
)}

{!loading && <h3>City-Scape Flights</h3>}






        

        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
    </div>
  );
}