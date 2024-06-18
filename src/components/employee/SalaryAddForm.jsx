import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Employee';
import { useNavigate } from 'react-router-dom';

function SalaryAddForm({ mode, onSubmit, initialData = {} }) {
  const [salaryData, setSalaryData] = useState({
    name: '',
    position: '',
    baseSalary: '',
    salaryDate: '',
    workHours: '',
    totalSalary: '',
    deductions: '',
    netSalary: '',
  });

  useEffect(() => {
    // 임시로 하드코딩된 초기 데이터
    const hardcodedInitialData = {
      name: 'John Doe',
      position: 'Manager',
      baseSalary: '5000000',
    };

    // 초기 데이터가 있으면 설정
    if (initialData && Object.keys(initialData).length > 0) {
      setSalaryData({
        ...initialData,
      });
    } else {
      // 초기 데이터가 없으면 하드코딩된 데이터 사용
      setSalaryData(hardcodedInitialData);
    }
  }, [initialData]);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', salaryData.name);
    formData.append('position', salaryData.position);
    formData.append('baseSalary', salaryData.baseSalary);
    formData.append('salaryDate', salaryData.salaryDate);
    formData.append('workHours', salaryData.workHours);
    formData.append('totalSalary', salaryData.totalSalary);
    formData.append('deductions', salaryData.deductions);
    formData.append('netSalary', salaryData.netSalary);

    onSubmit(formData, mode);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setSalaryData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigateToSalaryList = () => {
    navigate('/stafflist');
  };

  return (
    <S.AddForm onSubmit={handleSubmit}>
      <S.FlexDiv direction="row" gap="20px">
        <S.InputWrap>
          <S.FormInput
            type="text"
            id="name"
            name="name"
            value={salaryData.name}
            onChange={handleChange}
            required
            placeholder="이름"
          />
        </S.InputWrap>

        <S.InputWrap>
          <S.FormInput
            type="text"
            id="position"
            name="position"
            value={salaryData.position}
            onChange={handleChange}
            required
            placeholder="직책"
          />
        </S.InputWrap>
      </S.FlexDiv>

      <S.FlexDiv direction="row" gap="20px">
        <S.InputWrap>
          <S.FormInput
            type="number"
            name="baseSalary"
            value={salaryData.baseSalary}
            onChange={handleChange}
            required
            placeholder="기본급"
          />
        </S.InputWrap>

        <S.InputWrap>
          <S.FormInput
            type="date"
            name="salaryDate"
            value={salaryData.salaryDate}
            onChange={handleChange}
            required
            placeholder="급여일"
          />
        </S.InputWrap>
      </S.FlexDiv>

      <S.FlexDiv direction="row" gap="20px">
        <S.InputWrap>
          <S.FormInput
            type="number"
            name="workHours"
            value={salaryData.workHours}
            onChange={handleChange}
            required
            placeholder="근무시간"
          />
        </S.InputWrap>

        <S.InputWrap>
          <S.FormInput
            type="number"
            name="totalSalary"
            value={salaryData.totalSalary}
            onChange={handleChange}
            required
            placeholder="총급여"
          />
        </S.InputWrap>
      </S.FlexDiv>

      <S.FlexDiv direction="row" gap="20px">
        <S.InputWrap>
          <S.FormInput
            type="number"
            name="deductions"
            value={salaryData.deductions}
            onChange={handleChange}
            required
            placeholder="공제액"
          />
        </S.InputWrap>

        <S.InputWrap>
          <S.FormInput
            type="number"
            name="netSalary"
            value={salaryData.netSalary}
            onChange={handleChange}
            required
            placeholder="실수령액"
          />
        </S.InputWrap>
      </S.FlexDiv>

      <S.FlexDiv direction="row" gap="30px" justify="center">
        <S.SubmitButton
          type="button"
          back="#000"
          onClick={navigateToSalaryList}
        >
          취소
        </S.SubmitButton>

        <S.SubmitButton type="submit" back="#000" color="#fff">
          {mode === 'add' ? '등록' : '등록'}
        </S.SubmitButton>
      </S.FlexDiv>
    </S.AddForm>
  );
}

export default SalaryAddForm;
