// src/components/employee/EmployeeSelector.jsx
import React from 'react';
import * as S from '../../styles/Employee';

const EmployeeSelector = ({ employees, onChange, selectedEmployee }) => {
  return (
    <S.Select value={selectedEmployee} onChange={onChange}>
      <option value="">직원 선택</option>
      {employees.map(employee => (
        <option key={employee.id} value={employee.id}>
          {employee.name}
        </option>
      ))}
    </S.Select>
  );
};

export default EmployeeSelector;
