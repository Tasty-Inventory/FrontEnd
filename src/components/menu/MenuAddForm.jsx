// MenuAddForm.jsx
import React, { useEffect, useState } from 'react';
import * as M from '../../styles/Menu';
import { useNavigate } from 'react-router-dom';

function MenuAddForm({ mode, onSubmit, initialData = {} }) {
  const [selectedInventories, setSelectedInventories] = useState([]);
  // 모달 검색
  const [showModal, setShowModal] = useState(false);
  const [menuData, setMenuData] = useState({
    name: '',
    image: null,
  });
  const navigate = useNavigate();

  // 수정 모드일 때 초기 데이터로 폼을 채움.
  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setMenuData(initialData);
    }
  }, [mode, initialData]);

  // 재고 검색 모달에서 재고를 선택했을 때 호출되는 함수
  const handleInventorySelect = inventory => {
    setSelectedInventories(prev => [...prev, inventory]);
    setShowModal(false); // 모달 닫기
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setMenuData({ ...menuData, [name]: files[0] });
    } else {
      setMenuData({ ...menuData, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', menuData.name);
    formData.append('image', menuData.image);
    selectedInventories.forEach((inv, index) => {
      formData.append(
        `relatedInventory[${index}][inventoryId]`,
        inv.inventoryId,
      );
      formData.append(
        `relatedInventory[${index}][inventoryUsage]`,
        inv.inventoryUsage,
      );
    });

    // onSubmit prop을 통해 부모 컴포넌트에 데이터 전달
    onSubmit(formData);
  };

  const navigateToMenuList = () => {
    navigate('/menulist');
  };

  return (
    <M.AddForm onSubmit={handleSubmit} encType="multipart/form-data">
      <M.FlexDiv direction="column" gap="10px">
        <M.InputLabel htmlFor="name">메뉴 이름</M.InputLabel>
        <M.InputWrap>
          <M.FormInput
            type="text"
            name="name"
            value={menuData.name}
            onChange={handleChange}
          />
        </M.InputWrap>
      </M.FlexDiv>

      <M.FlexDiv direction="column" gap="20px">
        <M.InputLabel>연관 재고</M.InputLabel>
        <M.OpenButton type="button">재고 추가</M.OpenButton>
        <M.Table>
          <thead>
            <tr>
              <th>재고명</th>
              <th>사용량</th>
              <th>단위</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>감자</td>
              <td>1</td>
              <td>g</td>
              <td>
                <button type="button">삭제</button>
              </td>
            </tr>
          </tbody>
        </M.Table>
      </M.FlexDiv>

      <M.FlexDiv direction="column" gap="10px">
        <M.InputLabel htmlFor="image">메뉴 사진</M.InputLabel>
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

export default MenuAddForm;
