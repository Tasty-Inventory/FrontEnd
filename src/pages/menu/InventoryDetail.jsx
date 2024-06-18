// InventoryDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../../apis/axios';
import InventoryEditForm from '../../components/menu/InventoryEditForm';
import * as M from '../../styles/Menu';

const InventoryDetail = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      .then(alert('재고가 수정되었습니다.'), navigate('/menulist'))
      .catch(err => {
        alert(err, '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      });
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      instance
        .delete(`/inventory/${id}`)
        .then(navigate('/menulist'))
        .catch(err => {
          alert(err, '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
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
