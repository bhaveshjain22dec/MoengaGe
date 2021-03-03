import React, { useEffect } from 'react';

// import useActivity from '../../hooks/data';
import axios from 'axios';

const Data: React.FC = () => {
  const getHighLightData = () => {
    const data = axios.get('http://13.232.99.42/get_highlight');
    return data;
  };
  useEffect(() => {
    console.log(getHighLightData());
  }, []);

  return <div>xfxfgsf</div>;
};

export default Data;
