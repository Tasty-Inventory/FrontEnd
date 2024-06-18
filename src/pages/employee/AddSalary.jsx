import React from 'react';
import SalaryAddForm from '../../components/employee/SalaryAddForm';
import * as S from '../../styles/Employee';
import { useAddSalary } from '../../apis/SalaryService';

const AddSalary = () => {
  const { addSalary, loading, error } = useAddSalary();

  const handleAddSalary = async employee => {
    try {
      await addSalary(employee);
      alert('Salary added successfully');
    } catch (err) {
      alert('Error adding employee: ' + err.message);
    }
  };

  return (
    <S.Container>
      <SalaryAddForm onAddSalary={handleAddSalary} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </S.Container>
  );
};

export default AddSalary;
