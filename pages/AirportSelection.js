import React from "react";
import Select from "react-select";

// Include your airport list here
export const airports = [
  { value: "JFK", label: "New York - John F. Kennedy International Airport" },
  { value: "LAX", label: "Los Angeles - Los Angeles International Airport" },
  { value: "ORD", label: "Chicago - O'Hare International Airport" },
  { value: "DFW", label: "Dallas/Fort Worth - Dallas/Fort Worth International Airport" },
  { value: "DEN", label: "Denver - Denver International Airport" },
  { value: "LAS", label: "Las Vegas - Harry Reid International Airport" },
  { value: "ATL", label: "Atlanta - Hartsfield-Jackson Atlanta International Airport" },
  { value: "SFO", label: "San Francisco - San Francisco International Airport" },
  { value: "SEA", label: "Seattle - Seattle-Tacoma International Airport" },
  { value: "BOS", label: "Boston - Logan International Airport" },
  { value: "MIA", label: "Miami - Miami International Airport" },
  { value: "PHX", label: "Phoenix - Phoenix Sky Harbor International Airport" },
  { value: "CLT", label: "Charlotte - Charlotte Douglas International Airport" },
  { value: "EWR", label: "Newark - Newark Liberty International Airport" },
  { value: "MCO", label: "Orlando - Orlando International Airport" },
  { value: "IAH", label: "Houston - George Bush Intercontinental Airport" },
  { value: "DTW", label: "Detroit - Detroit Metropolitan Airport" },
  { value: "PHL", label: "Philadelphia - Philadelphia International Airport" },
  { value: "LGA", label: "New York - LaGuardia Airport" },
  { value: "MSP", label: "Minneapolis - Minneapolis-St. Paul International Airport" },
  { value: "BWI", label: "Baltimore - Baltimore/Washington International Thurgood Marshall Airport" },
  { value: "TPA", label: "Tampa - Tampa International Airport" },
  { value: "MDW", label: "Chicago - Chicago Midway International Airport" },
  { value: "SLC", label: "Salt Lake City - Salt Lake City International Airport" },
  { value: "HNL", label: "Honolulu - Daniel K. Inouye International Airport" },
  { value: "DCA", label: "Washington, D.C. - Ronald Reagan Washington National Airport" },
  { value: "FLL", label: "Fort Lauderdale - Fort Lauderdale-Hollywood International Airport" },
  { value: "SAN", label: "San Diego - San Diego International Airport" },
  { value: "BNA", label: "Nashville - Nashville International Airport" },
  { value: "AUS", label: "Austin - Austin-Bergstrom International Airport" },
  { value: "STL", label: "St. Louis - St. Louis Lambert International Airport" },
  { value: "SMF", label: "Sacramento - Sacramento International Airport" },
  { value: "DAL", label: "Dallas - Dallas Love Field" },
  { value: "SJC", label: "San Jose - Norman Y. Mineta San Jose International Airport" },
  { value: "RDU", label: "Raleigh-Durham - Raleigh-Durham International Airport" },
  { value: "CLE", label: "Cleveland - Cleveland Hopkins International Airport" },
  { value: "OAK", label: "Oakland - Oakland International Airport" },
  { value: "PDX", label: "Portland - Portland International Airport" },
 { value: "MSY", label: "New Orleans - Louis Armstrong New Orleans International Airport" },
{ value: "SNA", label: "Orange County - John Wayne Airport" },
{ value: "SDF", label: "Louisville - Louisville International Airport" },
{ value: "SAT", label: "San Antonio - San Antonio International Airport" },
{ value: "BUR", label: "Burbank - Hollywood Burbank Airport" },
{ value: "MCI", label: "Kansas City - Kansas City International Airport" },
{ value: "BHM", label: "Birmingham - Birmingham-Shuttlesworth International Airport" },
{ value: "IND", label: "Indianapolis - Indianapolis International Airport" },
{ value: "PIT", label: "Pittsburgh - Pittsburgh International Airport" },
{ value: "CVG", label: "Cincinnati/Northern Kentucky - Cincinnati/Northern Kentucky International Airport" },
{ value: "JAX", label: "Jacksonville - Jacksonville International Airport" },
{ value: "MEM", label: "Memphis - Memphis International Airport" },
{ value: "RSW", label: "Fort Myers - Southwest Florida International Airport" },
{ value: "ORF", label: "Norfolk - Norfolk International Airport" },
{ value: "OMA", label: "Omaha - Eppley Airfield" },
{ value: "TUS", label: "Tucson - Tucson International Airport" },
{ value: "ICT", label: "Wichita - Wichita Dwight D. Eisenhower National Airport" },
{ value: "BUF", label: "Buffalo - Buffalo Niagara International Airport" },
{ value: "RIC", label: "Richmond - Richmond International Airport" },
{ value: "GEG", label: "Spokane - Spokane International Airport" },
{ value: "CRW", label: "Charleston - Yeager Airport" },
{ value: "GRR", label: "Grand Rapids - Gerald R. Ford International Airport" },
{ value: "ROC", label: "Rochester - Greater Rochester International Airport" },
{ value: "LIT", label: "Little Rock - Bill and Hillary Clinton National Airport/Adams Field" },
{ value: "MHT", label: "Manchester - Manchester-Boston Regional Airport" }





    ];

    const AirportSelection = ({ label, value, setValue }) => {
      const handleChange = (selectedOption) => {
        setValue(selectedOption.value);
      };
    
      return (
        <div>
          <label>{label}</label>
          <Select
            value={{ value, label: value }}
            onChange={handleChange}
            options={airports}
          />
        </div>
      );
    };
    
    export default AirportSelection;