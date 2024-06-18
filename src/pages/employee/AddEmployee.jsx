import React from 'react';
import EmployeeAddForm from '../../components/employee/EmployeeAddForm';
import * as S from '../../styles/Employee';
import { useAddEmployee } from '../../apis/EmployeeService';

const AddEmployee = () => {
  const { addEmployee, loading, error } = useAddEmployee();

  const handleAddEmployee = async employee => {
    try {
      await addEmployee(employee);
      alert('Employee added successfully');
    } catch (err) {
      alert('Error adding employee: ' + err.message);
    }
  };

  return (
    <S.Container>
      <EmployeeAddForm onAddEmployee={handleAddEmployee} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </S.Container>
  );
};

export default AddEmployee;
