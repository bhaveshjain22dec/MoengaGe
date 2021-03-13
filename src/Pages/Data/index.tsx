/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import useActivity from '../../hooks/data';
import Container from '../../components/container';

const Data: React.FC = () => {
  const {
    activities,
    buyer,
    countries,
    income,
    getHighLight,
    getBuyer,
    getCountries,
    getIncome,
  } = useActivity();

  useEffect(() => {
    getHighLight();
    getBuyer();
    getCountries();
    getIncome();
  }, []);

  return (
    <>
      <div className="">
        <Container
          headerValue="Highlights"
          url="get_highlight"
          propsData={activities}
        />
      </div>
      <div className="">
        <Container headerValue="Buyers" url="get_buyer" propsData={buyer} />
      </div>

      <div>
        <Container
          headerValue="Countries"
          url="get_country"
          propsData={countries}
        />
      </div>
      <div>
        <Container headerValue="Income" url="get_income" propsData={income} />
      </div>
    </>
  );
};

export default Data;
