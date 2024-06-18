import React, { useState, useEffect } from 'react';
import * as S from '../../styles/Employee';
import { useNavigate } from 'react-router-dom';

const SalaryEditForm = ({ salaryData, onUpdateSalary, onDeleteSalary }) => {
  const [salary, setSalary] = useState(salaryData);
  const navigate = useNavigate();

  useEffect(() => {
    setSalary(salaryData);
  }, [salaryData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setSalary(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await onUpdateSalary(salary);
      alert('급여가 성공적으로 수정되었습니다.');
      navigate('/salary'); // 수정 후 급여 목록 페이지로 이동
    } catch (error) {
      console.error('급여 수정 실패:', error);
      alert('급여 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCancel = () => {
    navigate('/salary'); // 급여 목록 페이지로 이동
  };

  const handleDelete = async () => {
    try {
      await onDeleteSalary(salary.id);
      alert('급여가 성공적으로 삭제되었습니다.');
      navigate('/salary'); // 삭제 후 급여 목록 페이지로 이동
    } catch (error) {
      console.error('급여 삭제 실패:', error);
      alert('급여 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Container>
      <S.Title>급여 상세</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={salary.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>직책</label>
          <input
            type="text"
            name="position"
            value={salary.position || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>기본급</label>
          <input
            type="text"
            name="baseSalary"
            value={salary.baseSalary || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>급여일</label>
          <input
            type="date"
            name="salaryDate"
            value={salary.salaryDate ? salary.salaryDate.split('T')[0] : ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>근무 시간</label>
          <input
            type="text"
            name="workingHours"
            value={salary.workingHours || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>총 급여</label>
          <input
            type="text"
            name="totalSalary"
            value={salary.totalSalary || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>공제액</label>
          <input
            type="text"
            name="deductions"
            value={salary.deductions || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>실수령액</label>
          <input
            type="text"
            name="netSalary"
            value={salary.netSalary || ''}
            onChange={handleChange}
          />
        </div>
        <S.ButtonContainer>
          <S.Button type="submit">수정</S.Button>
          <S.Button type="button" onClick={handleCancel}>
            취소
          </S.Button>
          <S.Button type="button" onClick={handleDelete}>
            삭제
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  );
};

export default SalaryEditForm;
