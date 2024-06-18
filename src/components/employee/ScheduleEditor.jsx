/*
// src/components/schedule/ScheduleEditor.jsx
import React, { useState, useEffect } from 'react';
import * as S from '../../styles/Employee';
import ScheduleTable from './ScheduleTable';
import {
  useFetchSchedulesByEmployee,
  useAddSchedule,
  useUpdateSchedule,
  useDeleteSchedule,
} from '../../apis/ScheduleService';

const ScheduleEditor = ({ employeeId }) => {
  const { data: schedules, refetch } = useFetchSchedulesByEmployee(employeeId);
  const { addSchedule } = useAddSchedule();
  const { updateSchedule } = useUpdateSchedule();
  const { deleteSchedule } = useDeleteSchedule();

  const handleAddSchedule = async (day, slot) => {
    try {
      await addSchedule({
        employeeId,
        dayOfWeek: day,
        timeSlot: `SLOT_${slot}_${slot + 1}`,
        date: new Date().toISOString().split('T')[0],
      });
      refetch();
    } catch (error) {
      console.error('Failed to add schedule:', error);
    }
  };

  // Similarly handle update and delete

  return (
    <div>
      <S.Title>Schedule for Employee {employeeId}</S.Title>
      <ScheduleTable schedules={schedules} onCellClick={handleAddSchedule} />
    </div>
  );
};

export default ScheduleEditor;
*/
