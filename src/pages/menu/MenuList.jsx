// MenuList.jsx
import React from 'react';
import { useState } from 'react';
import * as M from '../../styles/Menu';
import useFetchMenus from '../../apis/AllMenuService';
import { useNavigate } from 'react-router-dom';

export default function MenuList() {
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

      <M.MenuBodyContainer>
        <M.MenuBodyWrap>
          {!error &&
            selectedOption === 'menu' &&
            data.map(item => (
              <M.MenuContent key={item.inventoryId}>
                <M.ImgWrap>
                  <M.Img src={item.inventoryImage} alt={item.inventoryName} />
                </M.ImgWrap>
                <M.MenuContentTitle>{item.inventoryName}</M.MenuContentTitle>
                <M.MenuContentCategory>
                  {item.inventoryUnit}
                </M.MenuContentCategory>
              </M.MenuContent>
            ))}

          {selectedOption === 'inventory' &&
            data.map(item => (
              <M.MenuContent key={item.inventoryId}>
                <M.ImgWrap>
                  <M.Img src={item.inventoryImage} alt={item.inventoryName} />
                </M.ImgWrap>
                <M.MenuContentTitle>{item.inventoryName}</M.MenuContentTitle>
                <M.MenuContentCategory>
                  {item.inventoryUnit}
                </M.MenuContentCategory>
              </M.MenuContent>
            ))}
        </M.MenuBodyWrap>
        {error && (
          <M.ErrorMessage> 조회할 재고 또는 메뉴가 없습니다.</M.ErrorMessage>
        )}
      </M.MenuBodyContainer>
    </div>
  );
}
