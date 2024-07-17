import React, { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../api/customerApi';
import { Button, Table } from '@consta/uikit';

const CustomerList = ({ onEdit }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const response = await getAllCustomers();
    setCustomers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  return (
    <Table
      columns={[
        { title: 'Код', accessor: 'customerCode' },
        { title: 'Наименование', accessor: 'customerName' },
        { title: 'ИНН', accessor: 'customerInn' },
        { title: 'КПП', accessor: 'customerKpp' },
        { title: 'Юр. адрес', accessor: 'customerLegalAddress' },
        { title: 'Почтовый адрес', accessor: 'customerPostalAddress' },
        { title: 'Электронная почта', accessor: 'customerEmail' },
        {
          title: 'Действия',
          render: ({ row }) => (
            <>
              <Button onClick={() => onEdit(row)}>Редактировать</Button>
              <Button onClick={() => handleDelete(row.customerCode)}>Удалить</Button>
            </>
          ),
        },
      ]}
      rows={customers}
    />
  );
};

export default CustomerList;