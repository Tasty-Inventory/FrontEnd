import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from '../../styles/Employee';

const EmployeeTabs = () => {
  const location = useLocation();

  return (
    <S.Tabs>
      <Link
        to="/employee"
        className={location.pathname === '/employee' ? 'active' : ''}
      >
        인사 관리
      </Link>
      <Link
        to="/schedule"
        className={location.pathname === '/schedule' ? 'active' : ''}
      >
        근태 관리
      </Link>
      <Link
        to="/salary"
        className={location.pathname === '/salary' ? 'active' : ''}
      >
        급여 관리
      </Link>
    </S.Tabs>
  );
};

export default EmployeeTabs;
