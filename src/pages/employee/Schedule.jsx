import React from 'react';
import * as S from '../../styles/Employee';
import Tabs from '../../components/employee/EmployeeTabs';
import Header from '../../components/layout/Header';

const Schedule = () => {
  return (
    <>
      <S.PageContainer>
        <S.PageTitle>Employee</S.PageTitle>
        <Tabs />
        <S.ContentContainer>
          <S.Title>근태 관리</S.Title>
          {/* 근태 관리 관련 내용 */}
        </S.ContentContainer>
      </S.PageContainer>
    </>
  );
};

export default Schedule;
