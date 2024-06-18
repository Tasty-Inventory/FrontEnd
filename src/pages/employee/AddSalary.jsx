import React from 'react';
import EmployeeTabs from '../../components/employee/EmployeeTabs';
import * as S from '../../styles/Employee';

const AddSalary = () => {
  return (
    <S.Container>
      <EmployeeTabs />
      <S.Title>급여 관리</S.Title>
      {/* 여기에 급여 관리 관련 내용 추가 */}
    </S.Container>
  );
};

export default AddSalary;
