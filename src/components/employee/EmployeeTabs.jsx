import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from '../../styles/Employee';
import styled from 'styled-components';

// styled-components를 사용하여 Link에 스타일 적용
const StyledLink = styled(Link)`
  color: #232121;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none; /* 기본 링크 밑줄 제거 */

  &.active {
    color: #fea7a7; /* 선택된 탭의 색상 */
    font-weight: 700;
  }

  &:hover {
    color: #fea7a7; /* 호버 시 색상 변경 */
  }
`;

const EmployeeTabs = () => {
  const location = useLocation();

  return (
    <S.EmployeeLayout>
      <S.FlexLayout>
        <StyledLink
          to="/employee"
          className={location.pathname === '/employee' ? 'active' : ''}
        >
          인사 관리
        </StyledLink>
        <StyledLink
          to="/schedule"
          className={location.pathname === '/schedule' ? 'active' : ''}
        >
          근태 관리
        </StyledLink>
        <StyledLink
          to="/salary"
          className={location.pathname === '/salary' ? 'active' : ''}
        >
          급여 관리
        </StyledLink>
      </S.FlexLayout>
    </S.EmployeeLayout>
  );
};

export default EmployeeTabs;
