import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeEditForm from '../../components/employee/EmployeeEditForm';
import * as S from '../../styles/Employee';
import {
  useFetchEmployeeById,
  useUpdateEmployee,
  useDeleteEmployee,
} from '../../apis/EmployeeService';

const AddEmployeeEdit = () => {
  const { id } = useParams();
  const { data: employee, loading, error } = useFetchEmployeeById(id);
  const {
    updateEmployee,
    loading: updating,
    error: updateError,
  } = useUpdateEmployee();
  const {
    deleteEmployee,
    loading: deleting,
    error: deleteError,
  } = useDeleteEmployee();

  const handleUpdateEmployee = async updatedEmployee => {
    try {
      await updateEmployee(id, updatedEmployee);
      // alert('Employee updated successfully');
    } catch (err) {
      alert('Error updating employee: ' + err.message);
    }
  };

  const handleDeleteEmployee = async () => {
    try {
      await deleteEmployee(id);
      // alert('Employee deleted successfully');
    } catch (err) {
      alert('Error deleting employee: ' + err.message);
    }
  };

  if (loading || updating || deleting) return <p>Loading...</p>;
  if (error || updateError || deleteError)
    return <p>Error: {error || updateError || deleteError}</p>;

  return (
    <S.Container>
      {employee ? (
        <EmployeeEditForm
          employeeData={employee.data}
          onUpdateEmployee={handleUpdateEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      ) : (
        <p>Loading...</p>
      )}
    </S.Container>
  );
};

export default AddEmployeeEdit;
