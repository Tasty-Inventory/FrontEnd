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

    formData.append('image', data.image);

    fetch('/menu', {
      method: 'POST', // 또는 'PUT'
      body: formData,
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <M.AddPageContainer>
      <M.AddPageHeadline>새 메뉴 추가하기</M.AddPageHeadline>
      <MenuAddForm mode="add" onSubmit={handleSubmit} />
    </M.AddPageContainer>
  );
}
