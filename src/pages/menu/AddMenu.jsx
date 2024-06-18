import React from 'react';
import * as M from '../../styles/Menu';
import MenuAddForm from '../../components/menu/MenuAddForm';
import instance from '../../apis/axios';
import { useNavigate } from 'react-router-dom';

export default function AddMenu() {
  const navigate = useNavigate();
  // const handleSubmit = formData => {
  //   fetch('/menu', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then(response => response.json())
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  const handleSubmit = async formData => {
    try {
      await instance.post('/menu', formData);
      alert('메뉴를 추가하였습니다.');
      navigate('/menulist');
    } catch (error) {
      alert(error, '서버에 오류가 발생했습니다. 잠시 후 시도하세요.');
    }
  };

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>새 메뉴 추가하기</M.AddPageHeadline>
      <MenuAddForm onSubmit={handleSubmit} />
    </M.AddPageContainer>
  );
}
