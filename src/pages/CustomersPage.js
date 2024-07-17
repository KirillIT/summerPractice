import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerForm from '../components/CustomerForm';

const CustomersPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleSave = () => {
    setSelectedCustomer(null);
  };

  return (
    <div>
      <CustomerList onEdit={handleEdit} />
      <CustomerForm customer={selectedCustomer} onSave={handleSave} />
    </div>
  );
};

export default CustomersPage;