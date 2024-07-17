import React, { useState } from 'react';
import LotList from '../components/LotList';
import LotForm from '../components/LotForm';

const LotsPage = () => {
  const [selectedLot, setSelectedLot] = useState(null);

  const handleEdit = (lot) => {
    setSelectedLot(lot);
  };

  const handleSave = () => {
    setSelectedLot(null);
  };

  return (
    <div>
      <LotList onEdit={handleEdit} />
      <LotForm lot={selectedLot} onSave={handleSave} />
    </div>
  );
};

export default LotsPage;