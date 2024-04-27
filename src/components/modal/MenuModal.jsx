// Modal.js
import React from 'react';

function MenuModal({ menu, onClose }) {
  if (!menu) return null; // 메뉴 정보가 없으면 아무것도 표시하지 않음

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {' '}
        {/* 모달 바깥쪽 클릭 시 모달 닫기를 방지 */}
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{menu.menuName}</h2>
        <img src={menu.image} alt={menu.menuName} />
        <ul>
          {menu.relatedInventory.map(item => (
            <li key={item.inventoryId}>
              {item.inventoryName} - {item.inventoryUsage} {item.inventoryUnit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuModal;
