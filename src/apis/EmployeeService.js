import { useState, useEffect } from 'react';
import instance from './axios';

export const useFetchEmployees = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get('/employee');
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

export const useFetchEmployeeById = employeeId => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get(`/employee/${employeeId}`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [employeeId]);

  return { data, loading, error };
};

export const useAddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addEmployee = async employee => {
    setLoading(true);
    try {
      const response = await instance.post('/employee', employee);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { addEmployee, loading, error };
};

export const useUpdateEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateEmployee = async (employeeId, employee) => {
    setLoading(true);
    try {
      const response = await instance.patch(
        `/employee/${employeeId}`,
        employee,
      );
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateEmployee, loading, error };
};

export const useDeleteEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteEmployee = async employeeId => {
    setLoading(true);
    try {
      const response = await instance.delete(`/employee/${employeeId}`);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteEmployee, loading, error };
};
