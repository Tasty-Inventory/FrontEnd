import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../apis/axios';
import InventoryAddForm from '../../components/menu/InventoryAddForm';
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
      .put(`/inventory/${id}`, data)
      .then(response => console.log(response.data))
      .catch(err => {
        console.log(err);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>
        {initialData.inventoryName} 상세정보
      </M.AddPageHeadline>
      <InventoryAddForm
        mode="edit"
        initialData={initialData}
        onSubmit={handleEditSubmit}
        inventoryId={id}
      />
    </M.AddPageContainer>
  );
};

export default InventoryDetail;
