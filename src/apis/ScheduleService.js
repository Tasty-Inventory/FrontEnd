// src/apis/ScheduleService.js
import { useState, useEffect } from 'react';
import instance from './axios';

export const useFetchSchedulesByWeek = ({ year, month, week }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log(
      `Fetching schedules for year: ${year}, month: ${month}, week: ${week}`,
    );
    setLoading(true);
    try {
      const response = await instance.get(`/schedule/week`, {
        params: { year, month, week },
      });
      setData(response.data.data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching schedules:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (year && month && week) {
      fetchData();
    }
  }, [year, month, week]);

  return { data, loading, error, refetch: fetchData };
};

export const useFetchSchedulesByEmployee = employeeId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/schedule/employee/${employeeId}`);
      setData(response.data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [employeeId]);

  return { data, loading, error, refetch: fetchData };
};

export const useAddSchedule = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addSchedule = async schedule => {
    setLoading(true);
    try {
      const response = await instance.post('/schedule', schedule);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { addSchedule, loading, error };
};

export const useUpdateSchedule = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateSchedule = async (scheduleId, schedule) => {
    setLoading(true);
    try {
      const response = await instance.patch(
        `/schedule/${scheduleId}`,
        schedule,
      );
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateSchedule, loading, error };
};

export const useDeleteSchedule = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteSchedule = async scheduleId => {
    setLoading(true);
    try {
      const response = await instance.delete(`/schedule/${scheduleId}`);
      return response.data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteSchedule, loading, error };
};
