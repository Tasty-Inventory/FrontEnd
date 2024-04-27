import React from 'react';
import { useState } from 'react';
import useAllMenuService from '../../apis/AllMenuService';
import instance from '../../apis/axios';
import MenuModal from '../../components/modal/MenuModal';

export default function MenuList() {
  const { menus, loading, error } = useAllMenuService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null); // 선택된 메뉴의 상세 정보를 저장할 상태

  if (loading) return <div>loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const handleMenuClick = async menuId => {
    try {
      const response = await instance.get(`/menu/${menuId}`); // 서버로부터 메뉴 상세 정보 요청
      const data = await response.json();

      if (data.code === 200) {
        setSelectedMenu(data.data); // 상태 업데이트
        setIsModalOpen(true); // 모달 열기
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('메뉴 정보 조회 중 에러가 발생했습니다.', error);
    }
  };

  return (
    <div>
      <div>
        <h1>Menu List</h1>
        <ul>
          <li>
            <input type="radio" name="menubar" id="menu" />
            <label for="menu">메뉴 조회</label>
          </li>
          <li>
            <input type="radio" name="menubar" id="inventory" />
            <label for="inventory">재고 조회</label>
          </li>
        </ul>
      </div>

      <ul>
        {menus.map(menu => (
          <li
            key={menu.inventoryId}
            onClick={() => handleMenuClick(menu.inventoryId)}
          >
            <img src={menu.inventoryImage} alt={menu.inventoryName} />
            <p>{menu.inventoryName}</p>
          </li>
        ))}
      </ul>
      {isModalOpen && selectedMenu && (
        <MenuModal menu={selectedMenu} onClose={() => setIsModalOpen(false)} />
      )}
      {error && <div> Error : {error} </div>}
    </div>
  );
}
