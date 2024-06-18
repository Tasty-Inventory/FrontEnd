// src/components/salary/SalaryTable.jsx
import React from 'react';
import * as S from '../../styles/Employee';

const SalaryTable = ({ salarys, onRowClick }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>직원번호</th>
          <th>이름</th>
          <th>직책</th>
          <th>급여일</th>
          <th>근무 시간</th>
          <th>시급</th>
          <th>총급여</th>
          <th>공제액</th>
          <th>실수령액</th>
        </tr>
      </thead>
      <tbody>
        {salarys.map(salary => (
          <tr key={salary.id} onClick={() => onRowClick(salary.id)}>
            <td>{salary.id}</td>
            <td>{salary.name}</td>
            <td>{salary.position}</td>
            <td>{salary.salaryDate}</td>
            <td>{salary.workingHours}</td>
            <td>{salary.baseSalary}</td>
            <td>{salary.totalSalary}</td>
            <td>{salary.deduction}</td>
            <td>{salary.netSalary}</td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

export default SalaryTable;
