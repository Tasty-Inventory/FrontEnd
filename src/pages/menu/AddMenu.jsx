// AddMenu.jsx

import React from 'react';
import * as M from '../../styles/Menu';
import MenuAddForm from '../../components/menu/MenuAddForm';

export default function AddMenu() {
  const handleSubmit = data => {
    const formData = new FormData();

    // 'name'과 'description'을 JSON 형태
    const info = JSON.stringify({
      name: data.name,
      description: data.description,
    });
    formData.append('info', info);

    // 'image'는 File 객체로 'image' 필드에 추가
    formData.append('image', data.image);

    // fetch API를 사용하여 서버에 폼 데이터 전송
    fetch('/menu', {
      method: 'POST', // 또는 'PUT'
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
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
