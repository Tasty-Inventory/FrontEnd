// src/pages/salary/SalaryList.jsx
import { useNavigate } from 'react-router-dom';
import Tabs from '../../components/employee/EmployeeTabs';
import * as S from '../../styles/Employee';

const SalaryList = () => {
  const navigate = useNavigate();

  const handleRowClick = id => {
    navigate(`/salary/${id}`);
  };

  const fixedData = [
    {
      id: 24,
      name: '김신희',
      position: '사원',
      salaryDate: '24.06.20',
      workingHours: 160,
      baseSalary: 9860,
      totalSalary: '2,200,000',
      deductions: '200,000',
      netSalary: '2,000,000',
    },
    {
      id: 25,
      name: '김은혜',
      position: '매니저',
      salaryDate: '24.06.20',
      workingHours: 170,
      baseSalary: 11000,
      totalSalary: '2,750,000',
      deductions: '250,000',
      netSalary: '2,500,000',
    },
    {
      id: 26,
      name: '오동재',
      position: '수습',
      salaryDate: '24.06.20',
      workingHours: 120,
      baseSalary: 9000,
      totalSalary: '1,650,000',
      deductions: '150,000',
      netSalary: '1,500,000',
    },
    {
      id: 27,
      name: '김용욱',
      position: '매니저',
      salaryDate: '24.06.20',
      workingHours: 180,
      baseSalary: 11000,
      totalSalary: '3,300,000',
      deductions: '300,000',
      netSalary: '3,000,000',
    },
  ];

  return (
    <S.EmployeeContainer>
      <S.EmployeeWrap>
        <S.EmployeeTitle>Employee</S.EmployeeTitle>
        <Tabs />
        <S.ContentContainer>
          <S.NavigationAndTitle>
            <S.Navigation>
              <S.NavigationButton>{'<'}</S.NavigationButton>
              <span>6월</span>
              <S.NavigationButton>{'>'}</S.NavigationButton>
            </S.Navigation>
            <S.TitleThird>급여 관리</S.TitleThird>
          </S.NavigationAndTitle>
          <S.RegisterButton onClick={() => navigate('/salary/add')}>
            등록
          </S.RegisterButton>
          <S.Table>
            <thead>
              <tr>
                <th>직원번호</th>
                <th>이름</th>
                <th>직책</th>
                <th>급여일</th>
                <th>근무 시간</th>
                <th>기본급여</th>
                <th>총 급여</th>
                <th>공제액</th>
                <th>실수령액</th>
              </tr>
            </thead>
            <tbody>
              {fixedData.map(salary => (
                <tr key={salary.id} onClick={() => handleRowClick(salary.id)}>
                  <td>{salary.id}</td>
                  <td>{salary.name}</td>
                  <td>{salary.position}</td>
                  <td>{salary.salaryDate}</td>
                  <td>{salary.workingHours}</td>
                  <td>{salary.baseSalary}</td>
                  <td>{salary.totalSalary}</td>
                  <td>{salary.deductions}</td>
                  <td>{salary.netSalary}</td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.ContentContainer>
      </S.EmployeeWrap>
    </S.EmployeeContainer>
  );
};

export default SalaryList;
