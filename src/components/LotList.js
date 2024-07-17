import React, { useEffect, useState } from 'react';
import { getAllLots, deleteLot } from '../api/lotApi';
import { Button, Table } from '@consta/uikit';

const LotList = ({ onEdit }) => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    loadLots();
  }, []);

  const loadLots = async () => {
    const response = await getAllLots();
    setLots(response.data);
  };

  const handleDelete = async (id) => {
    await deleteLot(id);
    loadLots();
  };

  return (
    <Table
      columns={[
        { title: 'Наименование', accessor: 'lotName' },
        { title: 'Код контрагента', accessor: 'customerCode' },
        { title: 'Начальная стоимость', accessor: 'price' },
        { title: 'Валюта', accessor: 'currencyCode' },
        { title: 'Код НДС', accessor: 'ndsRate' },
        { title: 'Грузополучатель', accessor: 'placeDelivery' },
        { title: 'Дата доставки', accessor: 'dateDelivery' },
        {
          title: 'Действия',
          render: ({ row }) => (
            <>
              <Button onClick={() => onEdit(row)}>Редактировать</Button>
              <Button onClick={() => handleDelete(row.lotName)}>Удалить</Button>
            </>
          ),
        },
      ]}
      rows={lots}
    />
  );
};

export default LotList;