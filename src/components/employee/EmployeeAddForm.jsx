import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Employee';
import { useAddEmployee } from '../../apis/EmployeeService';

const EmployeeAddForm = () => {
  const [employee, setEmployee] = useState({
    이름: '',
    주민등록번호: '',
    전화번호: '',
    이메일: '',
    주소: '',
    직책: '',
    고용일: '',
    재직상태: '',
    계좌번호: '',
    특이사항: '',
  });

  const navigate = useNavigate();
  const { addEmployee } = useAddEmployee();

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addEmployee(employee);
      alert('직원이 성공적으로 추가되었습니다.');
      navigate('/employee'); // 등록 후 직원 목록 페이지로 이동
    } catch (error) {
      console.error('직원 추가 실패:', error);
      alert('직원 추가에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.EmployeeContainer>
      <S.EmployeeWrap>
        <S.Title>직원 추가</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {Object.keys(employee).map(key => (
            <div key={key}>
              <label>{key}</label>
              <input
                type={key === 'hireDate' ? 'date' : 'text'}
                name={key}
                value={employee[key]}
                onChange={handleChange}
              />
            </div>
          ))}
          <S.ButtonContainer>
            <S.VButton type="button" onClick={() => navigate('/employee')}>
              취소
            </S.VButton>
            <S.VButton type="submit">등록</S.VButton>
          </S.ButtonContainer>
        </S.Form>
      </S.EmployeeWrap>
    </S.EmployeeContainer>
  );
};

export default EmployeeAddForm;
