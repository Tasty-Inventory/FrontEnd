// MenuDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../apis/axios';
import MenuEditForm from '../../components/menu/MenuEditForm';
import * as M from '../../styles/Menu';

const MenuDetail = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(`/menu/${id}`)
      .then(response => {
        setInitialData(response.data.data);
        console.log(response.data.data);

        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleEditSubmit = data => {
    instance
      .patch(`/menu/${id}`, data)
      .then(response => console.log(response.data))
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      instance
        .delete(`/menu/${id}`)
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
      <M.AddPageHeadline>{initialData.menuName} 상세정보</M.AddPageHeadline>
      <MenuEditForm
        initialData={initialData}
        onSubmit={handleEditSubmit}
        onDelete={handleDelete}
        menuId={id}
      />
    </M.AddPageContainer>
  );
};

export default MenuDetail;
