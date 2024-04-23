// AllMenuService.js
import { useState, useEffect } from 'react';
import instance from './axios';

function useAllMenuService() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllMenus = async () => {
      try {
        const response = await instance.get('/menu');
        setMenus(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMenus();
  }, []);

  return { menus, loading, error };
}

export default useAllMenuService;
