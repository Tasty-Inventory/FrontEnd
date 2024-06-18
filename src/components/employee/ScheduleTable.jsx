// src/components/schedule/ScheduleTable.jsx
import React from 'react';
import * as S from '../../styles/Employee';

const ScheduleTable = ({ schedules, onCellClick }) => {
  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <S.Table>
      <thead>
        <tr>
          <th></th>
          {daysOfWeek.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((slot, slotIdx) => (
          <tr key={slot}>
            <td>{slot}</td>
            {daysOfWeek.map((day, dayIdx) => (
              <td
                key={`${day}-${slot}`}
                onClick={() => onCellClick(day, slotIdx)}
              >
                {schedules[`${day}_${slotIdx}`] || ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

export default ScheduleTable;
