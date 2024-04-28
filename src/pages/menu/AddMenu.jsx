// AddMenu.jsx

import React from 'react';
import * as M from '../../styles/Menu';
import MenuAddForm from '../../components/menu/MenuAddForm';

export default function AddMenu() {
  const handleSubmit = data => {
    const formData = new FormData();

    // 폼 데이터를 FormData 객체에 추가
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('image', data.image); // File 객체

    // fetch API를 사용하여 서버에 폼 데이터 전송
    fetch('/menu', {
      method: 'POST', // 또는 'PUT'
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        // console.log('Success:', result);
        // 성공 처리 로직
      })
      .catch(error => {
        console.error('Error:', error);
        // 오류 처리 로직
      });
  };

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>새 메뉴 추가하기</M.AddPageHeadline>
      <MenuAddForm mode="add" onSubmit={handleSubmit} />
    </M.AddPageContainer>
  );
}
