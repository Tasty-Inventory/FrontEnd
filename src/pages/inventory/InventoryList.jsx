import React, { useState } from 'react';
import * as M from '../../styles/Menu';
import * as I from '../../styles/Inventory';

export default function InventoryList() {
  // 목업 데이터
  const [sampleData, setSampleData] = useState([
    {
      date: '2024-03-14',
      soldMenuList: [
        { menuId: 2, menuName: '간장계란볶음밥', soldCount: 40 },
        { menuId: 4, menuName: '계란볶음밥', soldCount: 50 },
      ],
    },
  ]);

  const [recordData, setRecordData] = useState([
    {
      inventoryId: 2,
      inventoryName: '양파',
      inventoryUnit: 'G',
      currentVolume: 30,
      updateDate: '2024.03.02',
      orderVolume: 23,
    },
  ]);

  const [selectedOption, setSelectedOption] = useState('sold');
  const [soldEditMode, setSoldEditMode] = useState(false);
  const [orderEditMode, setOrderEditMode] = useState(false);
  const [soldEditCount, setSoldEditCount] = useState({});
  const [orderCurrentCount, setOrderCurrentCount] = useState({});
  const [orderCount, setOrderCount] = useState({});

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleSoldEditClick = () => {
    setSoldEditMode(true);
    const initialEditCount = {};
    sampleData[0].soldMenuList.forEach(menu => {
      initialEditCount[menu.menuId] = menu.soldCount;
    });
    setSoldEditCount(initialEditCount);
  };

  const handleOrderEditClick = () => {
    setOrderEditMode(true);
    const initialEditCurrentCount = {};
    const initialEditOrderCount = {};
    recordData.forEach(inventory => {
      initialEditCurrentCount[inventory.inventoryId] = inventory.currentVolume;
      initialEditOrderCount[inventory.inventoryId] = inventory.orderVolume;
    });
    setOrderCurrentCount(initialEditCurrentCount);
    setOrderCount(initialEditOrderCount);
  };

  const handleSoldSaveClick = () => {
    // 목업 데이터를 업데이트
    const updatedData = sampleData.map(data => ({
      ...data,
      soldMenuList: data.soldMenuList.map(menu => ({
        ...menu,
        soldCount: soldEditCount[menu.menuId],
      })),
    }));

    // 상태 업데이트
    setSampleData(updatedData);
    setSoldEditMode(false);
  };

  const handleOrderSaveClick = () => {
    // 목업 데이터를 업데이트
    const updatedData = recordData.map(data => ({
      ...data,
      currentVolume: orderCurrentCount[data.inventoryId],
      orderVolume: orderCount[data.inventoryId],
    }));

    // 상태 업데이트
    setRecordData(updatedData);
    setOrderEditMode(false);
  };

  const handleSoldInputChange = (menuId, value) => {
    setSoldEditCount({ ...soldEditCount, [menuId]: value });
  };

  const handleCurrentOrderInputChange = (inventoryId, value) => {
    setOrderCurrentCount({ ...orderCurrentCount, [inventoryId]: value });
  };

  const handleOrderInputChange = (inventoryId, value) => {
    setOrderCount({ ...orderCount, [inventoryId]: value });
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
              <li>
                <M.SelectRadio
                  type="radio"
                  name="menubar"
                  id="order"
                  value="order"
                  checked={selectedOption === 'order'}
                  onChange={handleOptionChange}
                />
                <M.MenuName htmlFor="order">발주량</M.MenuName>
              </li>
            </M.FlexLayout>
            {/* 새 메뉴 버튼, 새 재고 버튼 */}
          </M.MenuLayout>
        </M.MenuWrap>
      </M.MenuContainer>

      <M.MenuBodyContainer>
        <I.InventoryBodyWrap>
          {selectedOption === 'sold' && (
            <I.InventoryLayout>
              <I.HeadlineWrap>
                <I.Headline2>Today 판매량</I.Headline2>
                {soldEditMode ? (
                  <I.SaveBtn type="button" onClick={handleSoldSaveClick}>
                    저장
                  </I.SaveBtn>
                ) : (
                  <I.SaveBtn type="button" onClick={handleSoldEditClick}>
                    수정
                  </I.SaveBtn>
                )}
              </I.HeadlineWrap>

              <table>
                <I.TableHead>
                  <tr>
                    <I.TableCell $font="16px">No.</I.TableCell>
                    <I.TableCell $font="16px">메뉴</I.TableCell>
                    <I.TableCell $font="16px">판매량</I.TableCell>
                  </tr>
                </I.TableHead>
                <tbody>
                  {sampleData[0].soldMenuList.map((menu, index) => (
                    <I.TableRow key={menu.menuId} isEven={index % 2 === 0}>
                      <I.TableCell>{menu.menuId}</I.TableCell>
                      <I.TableCell>{menu.menuName}</I.TableCell>
                      <I.TableCell>
                        {soldEditMode ? (
                          <I.TableInput
                            type="number"
                            value={soldEditCount[menu.menuId]}
                            onChange={e =>
                              handleSoldInputChange(menu.menuId, e.target.value)
                            }
                          />
                        ) : (
                          menu.soldCount
                        )}
                      </I.TableCell>
                    </I.TableRow>
                  ))}
                </tbody>
              </table>
            </I.InventoryLayout>
          )}

          {selectedOption === 'order' && (
            <I.InventoryLayout $width="100%">
              <I.HeadlineWrap $justify="center">
                <I.Headline2>발주량과 재고</I.Headline2>
                {orderEditMode ? (
                  <I.SaveBtn type="button" onClick={handleOrderSaveClick}>
                    저장
                  </I.SaveBtn>
                ) : (
                  <I.SaveBtn type="button" onClick={handleOrderEditClick}>
                    수정
                  </I.SaveBtn>
                )}
              </I.HeadlineWrap>

              <table>
                <I.TableHead>
                  <tr>
                    <I.TableCell $font="16px">No.</I.TableCell>
                    <I.TableCell $font="16px">재고명</I.TableCell>
                    <I.TableCell $font="16px">단위</I.TableCell>
                    <I.TableCell $font="16px">현재고</I.TableCell>
                    <I.TableCell $font="16px">최근 업데이트 일자</I.TableCell>
                    <I.TableCell $font="16px">금일 발주량</I.TableCell>
                  </tr>
                </I.TableHead>
                <tbody>
                  {recordData.map((data, index) => (
                    <I.TableRow key={data.inventoryId} isEven={index % 2 === 0}>
                      <I.TableCell>{data.inventoryId}</I.TableCell>
                      <I.TableCell>{data.inventoryName}</I.TableCell>
                      <I.TableCell>{data.inventoryUnit}</I.TableCell>
                      <I.TableCell>
                        {orderEditMode ? (
                          <I.TableInput
                            type="number"
                            value={orderCurrentCount[data.inventoryId]}
                            onChange={e =>
                              handleCurrentOrderInputChange(
                                data.inventoryId,
                                e.target.value,
                              )
                            }
                          />
                        ) : (
                          data.currentVolume
                        )}
                      </I.TableCell>
                      <I.TableCell>{data.updateDate}</I.TableCell>
                      <I.TableCell>
                        {orderEditMode ? (
                          <I.TableInput
                            type="number"
                            value={orderCount[data.inventoryId]}
                            onChange={e =>
                              handleOrderInputChange(
                                data.inventoryId,
                                e.target.value,
                              )
                            }
                          />
                        ) : (
                          data.orderVolume
                        )}
                      </I.TableCell>
                    </I.TableRow>
                  ))}
                </tbody>
              </table>
            </I.InventoryLayout>
          )}
        </I.InventoryBodyWrap>
      </M.MenuBodyContainer>
    </div>
  );
}
