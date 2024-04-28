// MenuList.jsx
import React from 'react';
import { useState } from 'react';
import * as M from '../../styles/Menu';
import { Link } from 'react-router-dom';
import { MenuForm } from '../../components/menu/MenuForm';
import useFetchMenus from '../../apis/AllMenuService';
import { useNavigate } from 'react-router-dom';

export default function MenuList() {
  // 선택된 옵션을 관리하는 상태
  const [selectedOption, setSelectedOption] = useState('menu');
  const { data, loading, error } = useFetchMenus(selectedOption);
  const navigate = useNavigate();
  // 라디오 버튼 변경 시 호출될 핸들러
  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const navigateToAddMenu = () => {
    navigate('/addmenu');
  };

  const navigateToAddInventory = () => {
    navigate('/addinventory');
  };

  return (
    <div>
      <M.MenuContainer>
        <M.MenuWrap>
          <M.MenuTitle>Menu List</M.MenuTitle>
          <M.MenuLayout>
            {/* 메뉴 조회, 재고 조회 */}
            <M.FlexLayout>
              <li>
                <M.SelectRadio
                  type="radio"
                  name="menubar"
                  id="menu"
                  value="menu"
                  checked={selectedOption === 'menu'}
                  onChange={handleOptionChange}
                />
                <M.MenuName htmlFor="menu">메뉴 조회</M.MenuName>
              </li>
              <li>
                <M.SelectRadio
                  type="radio"
                  name="menubar"
                  id="inventory"
                  value="inventory"
                  checked={selectedOption === 'inventory'}
                  onChange={handleOptionChange}
                />
                <M.MenuName htmlFor="inventory">재고 조회</M.MenuName>
              </li>
            </M.FlexLayout>
            {/* 새 메뉴 버튼, 새 재고 버튼 */}
            <M.FlexLayout>
              <M.AddButton type="button" onClick={navigateToAddMenu}>
                새 메뉴 추가
              </M.AddButton>
              <M.AddButton type="button" onClick={navigateToAddInventory}>
                새 재고 추가
              </M.AddButton>
            </M.FlexLayout>
          </M.MenuLayout>
        </M.MenuWrap>
      </M.MenuContainer>

      {selectedOption === 'menu' && (
        <M.MenuBodyContainer>
          <M.MenuBodyWrap>
            <MenuForm name="간장계란볶음밥" />
          </M.MenuBodyWrap>
        </M.MenuBodyContainer>
      )}

      {selectedOption === 'inventory' && (
        <M.MenuBodyContainer>
          <M.MenuBodyWrap>
            <MenuForm name="채소" />
          </M.MenuBodyWrap>
        </M.MenuBodyContainer>
      )}

      {/* <M.MenuBodyContainer>
        <M.MenuBodyWrap>
          {data.map(item => (
            <MenuForm key={item.id} name={item.name} image={item.image} />
          ))}
        </M.MenuBodyWrap>
      </M.MenuBodyContainer> */}

      {error && <div> Error : {error} </div>}
    </div>
  );
}
