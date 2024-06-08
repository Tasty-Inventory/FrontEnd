import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../apis/axios';

const InventoryDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(`/inventory/${id}`)
      .then(response => {
        setInventory(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Inventory Detail for ID: {inventory.inventoryName}</h1>
      <img src={inventory.inventoryImage} alt={inventory.inventoryName} />
      <p>{inventory.inventoryUnit}</p>
    </div>
  );
};

export default InventoryDetail;
