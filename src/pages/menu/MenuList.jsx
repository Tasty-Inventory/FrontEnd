import React from 'react';
import { useState } from 'react';
import useAllMenuService from '../../apis/AllMenuService';
import instance from '../../apis/axios';
import * as M from '../../styles/Menu';
import { Link } from 'react-router-dom';

export default function MenuList() {
  const { menus, loading, error } = useAllMenuService();

  if (loading) return <div>loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const handleMenuClick = async menuId => {
    try {
      const response = await instance.get(`/menu/${menuId}`); // 서버로부터 메뉴 상세 정보 요청
      const data = await response.json();

      if (data.code === 200) {
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('메뉴 정보 조회 중 에러가 발생했습니다.', error);
    }
  };

  return (
    <M.MenuContainer>
      <M.MenuWrap>
        <M.MenuTitle>Menu List</M.MenuTitle>
        <M.MenuLayout>
          {/* 메뉴 조회, 재고 조회 */}
          <M.FlexLayout>
            <li>
              <M.SelectRadio type="radio" name="menubar" id="menu" checked />
              <M.MenuName for="menu">메뉴 조회</M.MenuName>
            </li>
            <li>
              <M.SelectRadio type="radio" name="menubar" id="inventory" />
              <M.MenuName for="inventory">재고 조회</M.MenuName>
            </li>
          </M.FlexLayout>
          {/* 새 메뉴 버튼, 새 재고 버튼 */}
          <M.FlexLayout>
            <M.AddButton type="button">새 메뉴 추가</M.AddButton>
            <M.AddButton type="button">새 재고 추가</M.AddButton>
          </M.FlexLayout>
        </M.MenuLayout>
      </M.MenuWrap>

      {/* 메뉴/재고 컴포넌트 */}

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
      {error && <div> Error : {error} </div>}
    </M.MenuContainer>
  );
}
