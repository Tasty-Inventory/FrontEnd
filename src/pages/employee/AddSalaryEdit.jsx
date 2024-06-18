import React from 'react';
import { useParams } from 'react-router-dom';
import SalaryEditForm from '../../components/employee/SalaryEditForm';
import * as S from '../../styles/Employee';
import {
  useFetchSalaryById,
  useUpdateSalary,
  useDeleteSalary,
} from '../../apis/SalaryService';

const AddSalaryEdit = () => {
  const { id } = useParams();
  const { data: salary, loading, error } = useFetchSalaryById(id);
  const {
    updateSalary,
    loading: updating,
    error: updateError,
  } = useUpdateSalary();
  const {
    deleteSalary,
    loading: deleting,
    error: deleteError,
  } = useDeleteSalary();

  const handleUpdateSalary = async updatedSalary => {
    try {
      await updateSalary(id, updatedSalary);
      // alert('Salary updated successfully');
    } catch (err) {
      alert('Error updating salary: ' + err.message);
    }
  };

  const handleDeleteSalary = async () => {
    try {
      await deleteSalary(id);
      // alert('Salary deleted successfully');
    } catch (err) {
      alert('Error deleting salary: ' + err.message);
    }
  };

  if (loading || updating || deleting) return <p>Loading...</p>;
  if (error || updateError || deleteError)
    return <p>Error: {error || updateError || deleteError}</p>;

  return (
    <S.Container>
      {salary ? (
        <SalaryEditForm
          salaryData={salary.data}
          onUpdateSalary={handleUpdateSalary}
          onDeleteSalary={handleDeleteSalary}
        />
      ) : (
        <p>Loading...</p>
      )}
    </S.Container>
  );
};

export default AddSalaryEdit;
