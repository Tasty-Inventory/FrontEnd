import React, { useEffect, useState } from 'react';
import instance from '../../apis/axios';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Employee';

function SalaryInfo({ salaries, loadSalaries }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const fetchSalaries = async () => {
      setLoading(true);
      try {
        const response = await instance.get(`/salary?month=${selectedMonth}`);
        loadSalaries();
      } catch (err) {
        setError('급여 정보를 가져오는데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSalaries();
  }, [selectedMonth, loadSalaries]);

  const handleMonthChange = delta => {
    setSelectedMonth(prevMonth => ((prevMonth + delta - 1 + 12) % 12) + 1);
  };

  const navigateToAddSalary = () => {
    navigate('/addsalary');
    setShowForm(true);
  };

  return (
    <div>
      <S.SalaryHeader>
        <S.Navigation>
          <S.ArrowButton onClick={() => handleMonthChange(-1)}>
            &lt;
          </S.ArrowButton>
          <S.CurrentMonth>{selectedMonth}월</S.CurrentMonth>
          <S.ArrowButton onClick={() => handleMonthChange(1)}>
            &gt;
          </S.ArrowButton>
        </S.Navigation>
        <div>
          <S.SalaryHeaderText>급여관리</S.SalaryHeaderText>
        </div>
        <div>
          <S.AddButton type="button" onClick={navigateToAddSalary}>
            등록
          </S.AddButton>
        </div>
      </S.SalaryHeader>

      <S.SalaryTable>
        <thead>
          <tr>
            <th>직원 번호</th>
            <th>이름</th>
            <th>직책</th>
            <th>급여일</th>
            <th>근무 시간</th>
            <th>기본 급여</th>
            <th>총급여</th>
            <th>공제액</th>
            <th>실수령액</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="9">로딩 중...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="9">에러: {error}</td>
            </tr>
          )}
          {!loading &&
            !error &&
            salaries.map(salary => (
              <tr key={salary.id}>
                <td>{salary.employeeId}</td>
                <td>{salary.name}</td>
                <td>{salary.position}</td>
                <td>{salary.salaryDate}</td>
                <td>{salary.workHours}</td>
                <td>{salary.baseSalary}</td>
                <td>{salary.totalSalary}</td>
                <td>{salary.deductions}</td>
                <td>{salary.netSalary}</td>
              </tr>
            ))}
        </tbody>
      </S.SalaryTable>
    </div>
  );
}

export default SalaryInfo;
