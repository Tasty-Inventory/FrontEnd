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
      const response = await instance.post('/menu', formData);
      const result = response.data;
      console.log(result);
      navigate('/menulist');
      alert('재고를 추가하였습니다.');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>새 메뉴 추가하기</M.AddPageHeadline>
      <MenuAddForm mode="add" onSubmit={handleSubmit} />
    </M.AddPageContainer>
  );
}
