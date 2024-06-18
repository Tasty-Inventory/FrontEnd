import { useState, useEffect } from 'react';
import instance from './axios';

export const useFetchSalarys = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get('/salary');
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useFetchSalaryById = salaryId => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get(`/salary/${salaryId}`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [salaryId]);

  return { data, loading, error };
};

export const useAddSalary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addSalary = async salary => {
    setLoading(true);
    try {
      const response = await instance.post('/salary', salary);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { addSalary, loading, error };
};

export const useUpdateSalary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateSalary = async (salaryId, salary) => {
    setLoading(true);
    try {
      const response = await instance.patch(`/salary/${salaryId}`, salary);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateSalary, loading, error };
};

export const useDeleteSalary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteSalary = async salaryId => {
    setLoading(true);
    try {
      const response = await instance.delete(`/salary/${salaryId}`);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteSalary, loading, error };
};
