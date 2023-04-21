// pages/Page3Container.js
import React, { useState } from 'react';
import Page3 from '../pages/page3';
import { useRouter } from 'next/router';

const Page3Container = () => {
  const [flightType, setFlightType] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    router.push(`/page4?flightType=${flightType}`);
  };

  return (
    <Page3
      flightType={flightType}
      setFlightType={setFlightType}
      onContinue={handleContinue}
    />
  );
};

export default Page3Container;
