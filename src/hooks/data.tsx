/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
import { useState } from 'react';
import api from '../services/api';

export interface IUserData {
  label: string;
  value: string;
  color: string;
}

type UseActivityReturnType = {
  activities: IUserData[];
  buyer: IUserData[];
  countries: IUserData[];
  income: IUserData[];
  getHighLight: () => Promise<void>;
  getBuyer: () => Promise<void>;
  getCountries: () => Promise<void>;
  getIncome: () => Promise<void>;
};

const useActivity = (): UseActivityReturnType => {
  const [activities, setActivities] = useState([] as IUserData[]);
  const [buyer, setBuyer] = useState([] as IUserData[]);
  const [countries, setCountries] = useState([] as IUserData[]);
  const [income, setIncome] = useState([] as IUserData[]);

  const getHighLight = async (): Promise<void> => {
    const { status, data } = await api.get('/get_highlight');

    if (status !== 200) throw new Error('Error getting activities');
    setActivities(data.data);
  };

  const getBuyer = async (): Promise<void> => {
    const { status, data } = await api.get('/get_buyer');

    if (status !== 200) throw new Error('Error getting activities');
    setBuyer(data.data);
  };
  const getCountries = async (): Promise<void> => {
    const { status, data } = await api.get('/get_country');

    if (status !== 200) throw new Error('Error getting activities');
    setCountries(data.data);
  };
  const getIncome = async (): Promise<void> => {
    const { status, data } = await api.get('/get_income');

    if (status !== 200) throw new Error('Error getting activities');
    setIncome(data.data);
  };

  return {
    activities,
    buyer,
    countries,
    income,
    getHighLight,
    getBuyer,
    getCountries,
    getIncome,
  };
};

export default useActivity;
