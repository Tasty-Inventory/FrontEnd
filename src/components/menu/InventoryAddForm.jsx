// InventoryAddMenu.jsx
import React, { useEffect, useState } from 'react';

function InventoryAddForm({ mode, onSubmit, initialData = {} }) {
  const [inventoryData, setInventoryData] = useState({
    name: '',
    unit: '',
    image: null,
  });

  // 수정 모드일 때 초기 데이터로 폼을 채움.
  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setInventoryData(initialData);
    }
  }, [mode, initialData]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setInventoryData({ ...inventoryData, [name]: files[0] });
    } else {
      setInventoryData({ ...inventoryData, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(inventoryData).forEach(key => {
      data.append(key, inventoryData[key]);
    });

    // onSubmit prop을 통해 부모 컴포넌트에 데이터 전달
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        name="name"
        value={inventoryData.name}
        onChange={handleChange}
        placeholder="재고 이름"
      />
      <input
        type="text"
        name="unit"
        value={inventoryData.unit}
        onChange={handleChange}
        placeholder="재고 단위"
      />
      <div>
        <label htmlFor="image">사진:</label>
        <input type="file" id="image" name="image" onChange={handleChange} />
      </div>
      {/* 필요한 다른 입력 필드를 추가할 수 있습니다. */}
      <button type="submit">{mode === 'add' ? '추가' : '수정'}</button>
    </form>
  );
}

export default InventoryAddForm;
