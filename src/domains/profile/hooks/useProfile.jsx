import { useEffect, useState } from 'react';
import { getBalance } from '../api/getBalance';

export const useProfile = () => {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    getBalance().then((data) => {
      setBalance(data.data);
    });
  }, []);

  return {
    balance,
  };
};