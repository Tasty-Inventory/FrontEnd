// InventoryAddMenu.jsx
import React, { useEffect, useState } from 'react';
import * as M from '../../styles/Menu';
import { useNavigate } from 'react-router-dom';

function InventoryAddForm({ mode, onSubmit, initialData = {} }) {
  const [inventoryData, setInventoryData] = useState({
    name: '',
    unit: '',
    image: null,
  });
  const navigate = useNavigate();

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

  const navigateToMenuList = () => {
    navigate('/menulist');
  };

  return (
    <M.AddForm onSubmit={handleSubmit} encType="multipart/form-data">
      <M.FlexDiv direction="column" gap="10px">
        <M.InputLabel htmlFor="name">재고 이름</M.InputLabel>
        <M.InputWrap>
          <M.FormInput
            type="text"
            name="name"
            value={inventoryData.name}
            onChange={handleChange}
          />
        </M.InputWrap>
      </M.FlexDiv>

      <M.FlexDiv direction="column" gap="10px">
        <M.InputLabel htmlFor="unit">재고 단위</M.InputLabel>
        <M.InputWrap>
          <M.FormInput
            type="text"
            name="unit"
            value={inventoryData.unit}
            onChange={handleChange}
          />
        </M.InputWrap>
      </M.FlexDiv>

      <M.FlexDiv direction="column" gap="10px">
        <M.InputLabel htmlFor="image">재고 사진</M.InputLabel>
        <input type="file" id="image" name="image" onChange={handleChange} />
      </M.FlexDiv>

      <M.FlexDiv direction="row" gap="30px" justify="center">
        <M.SubmitButton
          type="button"
          border="0.5px solid #7B7A7A"
          onClick={navigateToMenuList}
        >
          취소
        </M.SubmitButton>
        <M.SubmitButton type="submit" back="#fea7a7" color="#fff">
          {mode === 'add' ? '추가' : '수정'}
        </M.SubmitButton>
      </M.FlexDiv>
    </M.AddForm>
  );
}

export default InventoryAddForm;
