// AddInventory.jsx

import React from 'react';
import InventoryAddForm from '../../components/menu/InventoryAddForm';
import * as M from '../../styles/Menu';
import instance from '../../apis/axios';
import { useNavigate } from 'react-router-dom';

export default function AddInventory() {
  const navigate = useNavigate();
  const handleSubmit = async formData => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const response = await instance.post('/inventory', formData, config);
      const result = response.data;
      navigate('/menulist');
      alert('재고를 추가하였습니다.');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>새 재고 추가하기</M.AddPageHeadline>
      <InventoryAddForm mode="add" onSubmit={handleSubmit} />
    </M.AddPageContainer>
  );
}
