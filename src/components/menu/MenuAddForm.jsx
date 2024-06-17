import React, { useEffect, useState } from 'react';
import * as M from '../../styles/Menu';
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/axios';
import InventoryModal from './InventoryModal';

function MenuAddForm({ onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [menuData, setMenuData] = useState({
    name: '',
    image: null,
  });
  const [inventoryList, setInventoryList] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get('/inventory')
      .then(response => {
        setInventoryList(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInventorySelect = inventory => {
    const isDuplicate = selectedInventories.some(
      item => item.inventoryId === inventory.inventoryId,
    );

    if (!isDuplicate) {
      setSelectedInventories(prevState => [...prevState, inventory]);
    }
  };

  const handleDeleteInventory = inventoryId => {
    const updatedSelectedInventories = selectedInventories.filter(
      inventory => inventory.inventoryId !== inventoryId,
    );
    setSelectedInventories(updatedSelectedInventories);
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setMenuData({ ...menuData, [name]: files[0] });
    } else {
      setMenuData({ ...menuData, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();

    // 이미지 추가
    formData.append('image', menuData.image);

    // 데이터 객체 생성
    const data = {
      name: menuData.name,
      relatedInventories: selectedInventories.map((inv, index) => ({
        inventoryId: inv.inventoryId,
        inventoryUsage: inv.inventoryUsage,
      })),
    };

    formData.append('data', JSON.stringify(data));

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    try {
      await onSubmit(formData);
      navigate('/menulist');
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  const navigateToMenuList = () => {
    navigate('/menulist');
  };

  return (
    <M.AddForm onSubmit={handleSubmit} encType="multipart/form-data">
      {showModal && (
        <InventoryModal
          inventoryList={inventoryList}
          onInventorySelect={handleInventorySelect}
          onClose={() => setShowModal(false)}
        />
      )}

      <M.FlexDiv $direction="column" $gap="10px">
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

      <M.FlexDiv $direction="column" $gap="20px">
        <M.InputLabel>연관 재고</M.InputLabel>
        <M.OpenButton type="button" onClick={() => setShowModal(true)}>
          재고 추가
        </M.OpenButton>
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
            {selectedInventories.map(inventory => (
              <tr key={inventory.inventoryId}>
                <td>{inventory.inventoryName}</td>
                <td>{inventory.inventoryUsage}</td>
                <td>{inventory.inventoryUnit}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeleteInventory(inventory.inventoryId)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </M.Table>
      </M.FlexDiv>

      <M.FlexDiv $direction="column" $gap="10px">
        <M.InputLabel htmlFor="image">메뉴 사진</M.InputLabel>
        <input type="file" id="image" name="image" onChange={handleChange} />
      </M.FlexDiv>

      <M.FlexDiv $direction="row" $gap="30px" $justify="center">
        <M.SubmitButton
          type="button"
          $border="0.5px solid #7B7A7A"
          onClick={navigateToMenuList}
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

export default MenuAddForm;
