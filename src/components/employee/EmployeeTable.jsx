// src/components/employee/EmployeeTable.jsx
import React from 'react';
import * as S from '../../styles/Employee';

const EmployeeTable = ({ employees, onRowClick }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>직원번호</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>직책</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id} onClick={() => onRowClick(employee.id)}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.phoneNumber}</td>
            <td>{employee.position}</td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

export default EmployeeTable;
