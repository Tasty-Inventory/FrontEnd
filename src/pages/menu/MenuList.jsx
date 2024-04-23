import React from 'react';
import useAllMenuService from '../../apis/AllMenuService';

export default function MenuList() {
  const { menus, loading, error } = useAllMenuService();

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Menu List</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.inventoryId}>
            <img src={menu.inventoryImage} alt={menu.inventoryName} />
            <p>{menu.inventoryName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
