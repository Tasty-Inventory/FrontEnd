import React, { useState, useEffect } from 'react';
import * as S from '../../styles/Employee';
import { useNavigate } from 'react-router-dom';

const EmployeeEditForm = ({
  employeeData,
  onUpdateEmployee,
  onDeleteEmployee,
}) => {
  const [employee, setEmployee] = useState(employeeData);
  const navigate = useNavigate();

  useEffect(() => {
    setEmployee(employeeData);
  }, [employeeData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateEmployee(employee);
  };

  const handleCancel = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <S.Container>
      <S.Title>직원 상세</S.Title>
      <S.Form onSubmit={handleSubmit}>
        {Object.keys(employee).map(key => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="text"
              name={key}
              value={employee[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <S.ButtonContainer>
          <S.Button type="submit">수정</S.Button>
          <S.Button type="button" onClick={handleCancel}>
            취소
          </S.Button>
          <S.Button type="button" onClick={() => onDeleteEmployee(employee.id)}>
            삭제
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  );
};

export default EmployeeEditForm;
