// src/components/salary/SalaryAddForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Employee';
import { useAddSalary } from '../../apis/SalaryService';

const SalaryAddForm = () => {
  const [salary, setSalary] = useState({
    name: '',
    position: '',
    baseSalary: '',
  });

  const navigate = useNavigate();
  const { addSalary } = useAddSalary();

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
      await addSalary(salary);
      alert('급여 정보가 성공적으로 추가되었습니다.');
      navigate('/salary'); // 등록 후 급여 목록 페이지로 이동
    } catch (error) {
      console.error('급여 정보 추가 실패:', error);
      alert('급여 정보 추가에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.EmployeeContainer>
      <S.EmployeeWrap>
        <S.Title>급여 등록</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <div>
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={salary.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>직책</label>
            <input
              type="text"
              name="position"
              value={salary.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>급여</label>
            <input
              type="text"
              name="baseSalary"
              value={salary.baseSalary}
              onChange={handleChange}
            />
          </div>
          <S.ButtonContainer>
            <S.Button type="button" onClick={() => navigate('/salary')}>
              취소
            </S.Button>
            <S.Button type="submit">등록</S.Button>
          </S.ButtonContainer>
        </S.Form>
      </S.EmployeeWrap>
    </S.EmployeeContainer>
  );
};

export default SalaryAddForm;
