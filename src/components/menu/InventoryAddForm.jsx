import React, { useState } from 'react';
import * as M from '../../styles/Menu';
import { useNavigate } from 'react-router-dom';

function AddInventory({ onSubmit }) {
  const [inventoryData, setInventoryData] = useState({
    name: '',
    unit: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append('inventoryName', inventoryData.name);
    data.append('inventoryUnit', inventoryData.unit);
    data.append('inventoryImage', inventoryData.image);

    if (inventoryData.image) {
      data.append('inventoryImage', inventoryData.image);
    } else {
      const response = await fetch('/assets/MockUp.png');

      const blob = await response.blob();
      const defaultImage = new File([blob], 'MockUp.png', {
        type: 'image/png',
      });
      data.append('inventoryImage', defaultImage);
    }

    await onSubmit(data, 'add');
    navigate('/menulist');
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file.size > 10485760) {
        // 파일 크기가 클 경우 업로드 막음
        alert(
          '파일 크기가 너무 큽니다. 10MB 이하의 파일만 업로드할 수 있습니다.',
        );
        return;
      }
      setInventoryData({ ...inventoryData, [name]: file });
    } else {
      setInventoryData({ ...inventoryData, [name]: value });
    }
  };

  return (
    <M.AddForm onSubmit={handleSubmit} encType="multipart/form-data">
      <M.FlexDiv $direction="column" $gap="10px">
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

      <M.FlexDiv $direction="column" $gap="10px">
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

      <M.FlexDiv $direction="column" $gap="10px">
        <M.InputLabel htmlFor="image">재고 사진</M.InputLabel>
        <input type="file" id="image" name="image" onChange={handleChange} />
      </M.FlexDiv>

      <M.FlexDiv $direction="row" $gap="30px" $justify="center">
        <M.SubmitButton
          type="button"
          $border="0.5px solid #7B7A7A"
          onClick={() => navigate('/menulist')}
        >
          취소
        </M.SubmitButton>

        <M.SubmitButton type="submit" $back="#fea7a7" $cl="#fff">
          추가
        </M.SubmitButton>
      </M.FlexDiv>
    </M.AddForm>
  );
}

export default AddInventory;
