import React, { useEffect, useState } from 'react';
import instance from '../../apis/axios';

function InventoryModal({ inventoryList, onInventorySelect, onClose }) {
  return (
    <div onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <div>
          <h2>재고 선택</h2>
          <button onClick={onClose}>닫기</button>
        </div>
        <table>
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
                  <button onClick={() => onInventorySelect(inventory)}>
                    선택
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryModal;
