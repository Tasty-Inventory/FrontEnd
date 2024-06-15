import React from 'react';
import * as M from '../../styles/Menu';

function InventoryModal({ inventoryList, onInventorySelect, onClose }) {
  return (
    <M.ModalContainer>
      <M.ModalDiv onClick={e => e.stopPropagation()}>
        <M.ModalTitle>재고 선택</M.ModalTitle>
        <M.Table>
          <thead>
            <tr>
              <th>재고명</th>
              <th>사용량</th>
              <th>단위</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            {inventoryList.map(inventory => (
              <tr key={inventory.inventoryId}>
                <td>{inventory.inventoryName}</td>
                <td>{inventory.inventoryUsage}</td>
                <td>{inventory.inventoryUnit}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onInventorySelect(inventory)}
                  >
                    선택
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </M.Table>
        <div>
          <M.SubmitButton border="0.5px solid #7B7A7A" onClick={onClose}>
            닫기
          </M.SubmitButton>
        </div>
      </M.ModalDiv>
    </M.ModalContainer>
  );
}

export default InventoryModal;
