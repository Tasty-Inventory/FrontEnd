// AllMenuService.js
import { useState, useEffect } from 'react';
import instance from './axios';

const useFetchMenus = selectedOption => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (selectedOption === 'menu') {
          response = await instance.get('/menu');
        } else if (selectedOption === 'inventory') {
          response = await instance.get('/inventory');
        }
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOption]);

  return { data, loading, error };
};

export default useFetchMenus;
