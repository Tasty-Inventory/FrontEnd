// MenuDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../../apis/axios';
import MenuEditForm from '../../components/menu/MenuEditForm';
import * as M from '../../styles/Menu';

const MenuDetail = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`/menu/${id}`)
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
      .patch(`/menu/${id}`, data)
      .then(alert('메뉴를 수정했습니다.'), navigate('/menuList'))
      .catch(err => {
        alert(err, '서버에 오류가 발생했습니다. 잠시 후 시도하세요.');
      });
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      instance
        .delete(`/menu/${id}`)
        .then(navigate('/menulist'))
        .catch(err => {
          alert(err, '서버에 오류가 발생했습니다. 잠시 후 시도하세요.');
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
