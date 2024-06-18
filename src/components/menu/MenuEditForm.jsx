// MenuEditForm.jsx
import React, { useEffect, useState } from 'react';
import * as M from '../../styles/Menu';
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/axios';
import InventoryModal from './InventoryModal';

function MenuEditForm({ onSubmit, onDelete, initialData, menuId }) {
  const [showModal, setShowModal] = useState(false);
  const [menuData, setMenuData] = useState({
    name: initialData?.menuName || '',
    image: initialData?.menuImage || null,
  });
  const [inventoryList, setInventoryList] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setMenuData({ name: initialData.menuName, image: initialData.menuImage });
      setSelectedInventories(initialData.relatedInventories || []);
    }
  }, [initialData]);

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
      setSelectedInventories(prevState => [
        ...prevState,
        { ...inventory, inventoryUsage: '' },
      ]);
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

  const handleUsageChange = (inventoryId, value) => {
    setSelectedInventories(prevState =>
      prevState.map(inventory =>
        inventory.inventoryId === inventoryId
          ? { ...inventory, inventoryUsage: value }
          : inventory,
      ),
    );
  };

  const handleDelete = async () => {
    try {
      await onDelete(menuId);
      navigate('/menulist');
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', menuData.image);

    const data = {
      name: menuData.name,
      relatedInventories: selectedInventories.map(inv => ({
        inventoryId: inv.inventoryId,
        inventoryUsage: inv.inventoryUsage,
      })),
    };

    formData.append(
      'data',
      new Blob([JSON.stringify(data)], {
        type: 'application/json',
      }),
    );
    onSubmit(formData);
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
                <td>
                  <M.UsageInput
                    type="number"
                    value={inventory.inventoryUsage}
                    onChange={e =>
                      handleUsageChange(inventory.inventoryId, e.target.value)
                    }
                  />
                </td>
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
        <M.SubmitButton
          type="button"
          $back="#fea7a7"
          $cl="#fff"
          onClick={handleDelete}
        >
          삭제
        </M.SubmitButton>
        <M.SubmitButton type="submit" $back="#fea7a7" $cl="#fff">
          수정
        </M.SubmitButton>
      </M.FlexDiv>
    </M.AddForm>
  );
}

export default MenuEditForm;
