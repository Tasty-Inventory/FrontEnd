import React, { useState } from 'react';
import * as M from '../../styles/Menu';

export default function InventoryList() {
  // 상태 정의
  const [sampleData, setSampleData] = useState([
    {
      date: '2024-03-14',
      soldMenuList: [
        { menuId: 2, menuName: '간장계란볶음밥', soldCount: 40 },
        { menuId: 4, menuName: '계란볶음밥', soldCount: 50 },
      ],
    },
  ]);

  const [selectedOption, setSelectedOption] = useState('sold');
  const [editMode, setEditMode] = useState(false);
  const [editCount, setEditCount] = useState({});

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
    const initialEditCount = {};
    sampleData[0].soldMenuList.forEach(menu => {
      initialEditCount[menu.menuId] = menu.soldCount;
    });
    setEditCount(initialEditCount);
  };

  const handleSaveClick = () => {
    // 예: axios.post('/api/updateSoldCount', { updatedCounts: editCount });

    // 목업 데이터를 업데이트
    const updatedData = sampleData.map(data => ({
      ...data,
      soldMenuList: data.soldMenuList.map(menu => ({
        ...menu,
        soldCount: editCount[menu.menuId],
      })),
    }));

    // 상태 업데이트
    setSampleData(updatedData);
    setEditMode(false);
  };

  const handleInputChange = (menuId, value) => {
    setEditCount({ ...editCount, [menuId]: value });
  };

  return (
    <div>
      <M.MenuContainer>
        <M.MenuWrap>
          <M.MenuTitle>InventoryList</M.MenuTitle>
          <M.MenuLayout>
            {/* 메뉴 조회, 재고 조회 */}
            <M.FlexLayout>
              <li>
                <M.SelectRadio
                  type="radio"
                  name="menubar"
                  id="sold"
                  value="sold"
                  checked={selectedOption === 'sold'}
                  onChange={handleOptionChange}
                />
                <M.MenuName htmlFor="sold">오늘의 메뉴 판매량</M.MenuName>
              </li>
              {/* <li>
                <M.SelectRadio
                  type="radio"
                  name="menubar"
                  id="order"
                  value="order"
                  // checked={selectedOption === 'inventory'}
                  // onChange={handleOptionChange}
                />
                <M.MenuName htmlFor="order">재고 조회</M.MenuName>
              </li>
              <li>
                <M.SelectRadio
                  type="radio"
                  name="menubar"
                  id="graph"
                  value="graph"
                  // checked={selectedOption === 'inventory'}
                  // onChange={handleOptionChange}
                />
                <M.MenuName htmlFor="graph">재고 조회</M.MenuName>
              </li> */}
            </M.FlexLayout>
            {/* 새 메뉴 버튼, 새 재고 버튼 */}
          </M.MenuLayout>
        </M.MenuWrap>
      </M.MenuContainer>

      <M.MenuBodyContainer>
        <M.MenuBodyWrap>
          {selectedOption === 'sold' && (
            <>
              <div>
                <h2>Today 판매량</h2>
                {editMode ? (
                  <button type="button" onClick={handleSaveClick}>
                    저장
                  </button>
                ) : (
                  <button type="button" onClick={handleEditClick}>
                    수정
                  </button>
                )}
              </div>

              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>메뉴</th>
                    <th>판매량</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData[0].soldMenuList.map(menu => (
                    <tr key={menu.menuId}>
                      <td>{menu.menuId}</td>
                      <td>{menu.menuName}</td>
                      <td>
                        {editMode ? (
                          <input
                            type="number"
                            value={editCount[menu.menuId]}
                            onChange={e =>
                              handleInputChange(menu.menuId, e.target.value)
                            }
                          />
                        ) : (
                          menu.soldCount
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </M.MenuBodyWrap>
      </M.MenuBodyContainer>
    </div>
  );
}
