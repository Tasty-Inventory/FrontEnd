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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await onUpdateEmployee(employee);
      alert('직원이 성공적으로 수정되었습니다.');
      navigate('/employee'); // 수정 후 직원 목록 페이지로 이동
    } catch (error) {
      console.error('직원 수정 실패:', error);
      alert('직원 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCancel = () => {
    navigate('/employee'); // 직원 목록 페이지로 이동
  };

  const handleDelete = async () => {
    try {
      await onDeleteEmployee(employee.id);
      alert('직원이 성공적으로 삭제되었습니다.');
      navigate('/employee'); // 삭제 후 직원 목록 페이지로 이동
    } catch (error) {
      console.error('직원 삭제 실패:', error);
      alert('직원 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Container>
      <S.Title>직원 상세</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={employee.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>주민등록번호</label>
          <input
            type="text"
            name="rrn"
            value={employee.rrn || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>전화번호</label>
          <input
            type="text"
            name="phoneNumber"
            value={employee.phoneNumber || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={employee.email || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>주소</label>
          <input
            type="text"
            name="address"
            value={employee.address || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>직책</label>
          <input
            type="text"
            name="position"
            value={employee.position || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>입사일</label>
          <input
            type="date"
            name="hireDate"
            value={employee.hireDate ? employee.hireDate.split('T')[0] : ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>고용 상태</label>
          <input
            type="text"
            name="employmentStatus"
            value={employee.employmentStatus || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>은행 계좌</label>
          <input
            type="text"
            name="bankAccount"
            value={employee.bankAccount || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>비고</label>
          <input
            type="text"
            name="note"
            value={employee.note || ''}
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

export default EmployeeEditForm;
