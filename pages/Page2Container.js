import React, { useState } from 'react';
import Page2 from './page2';

const Page2Container = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handlePersonalInfoSubmit = (data) => {
    // Save personal information and navigate to the next page
    // You can also pass the collected data as a parameter to the next page
    console.log('Personal Info:', data);
    // Navigate to the next page here
  };

  return (
    <Page2
      firstName={firstName}
      lastName={lastName}
      gender={gender}
      birthDate={birthDate}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setGender={setGender}
      setBirthDate={setBirthDate}
      onSubmit={handlePersonalInfoSubmit}
    />
  );
};

export default Page2Container;
