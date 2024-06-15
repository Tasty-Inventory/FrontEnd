// InventoryDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../apis/axios';
import InventoryEditForm from '../../components/menu/InventoryEditForm';
import * as M from '../../styles/Menu';

const InventoryDetail = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(`/inventory/${id}`)
      .then(response => {
        setInitialData(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleEditSubmit = data => {
    instance
      .patch(`/inventory/${id}`, data)
      .then(response => console.log(response.data))
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      instance
        .delete(`/inventory/${id}`)
        .then(response => {
          console.log(response.data);
          window.location.href = '/menulist';
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>
        {initialData.inventoryName} 상세정보
      </M.AddPageHeadline>
      <InventoryEditForm
        mode="edit"
        initialData={initialData}
        onSubmit={handleEditSubmit}
        onDelete={handleDelete}
        inventoryId={id}
      />
    </M.AddPageContainer>
  );
};

export default InventoryDetail;
