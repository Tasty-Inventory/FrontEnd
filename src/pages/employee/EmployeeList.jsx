// src/pages/employee/EmployeeList.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeTable from '../../components/employee/EmployeeTable';
import Tabs from '../../components/employee/EmployeeTabs';
import * as S from '../../styles/Employee';
import { useFetchEmployees } from '../../apis/EmployeeService';

const EmployeeList = () => {
  const { data: employees, loading, error } = useFetchEmployees();
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate('/employee/add');
  };

  const handleRowClick = id => {
    navigate(`/employee/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <S.EmployeeContainer>
      <S.EmployeeWrap>
        <S.EmployeeTitle>Employee</S.EmployeeTitle>
        <Tabs />
        <S.ContentContainer>
          <S.Title>직원 정보</S.Title>
          <S.ButtonContainer>
            <S.Button onClick={handleAddButtonClick}>등록</S.Button>
          </S.ButtonContainer>
          <EmployeeTable employees={employees} onRowClick={handleRowClick} />
        </S.ContentContainer>
      </S.EmployeeWrap>
    </S.EmployeeContainer>
  );
};

export default EmployeeList;
