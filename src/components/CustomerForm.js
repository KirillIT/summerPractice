import React, { useState, useEffect } from 'react';
import { createCustomer, updateCustomer } from '../api/customerApi';
import { TextField, Button, Form } from '@consta/uikit';

const CustomerForm = ({ customer, onSave }) => {
  const [form, setForm] = useState(customer || {});

  useEffect(() => {
    setForm(customer || {});
  }, [customer]);

  const handleChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.customerCode) {
      await updateCustomer(form.customerCode, form);
    } else {
      await createCustomer(form);
    }
    onSave();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Код контрагента"
        value={form.customerCode || ''}
        onChange={(e) => handleChange('customerCode', e.target.value)}
      />
      <TextField
        label="Наименование"
        value={form.customerName || ''}
        onChange={(e) => handleChange('customerName', e.target.value)}
      />
      <TextField
        label="ИНН"
        value={form.customerInn || ''}
        onChange={(e) => handleChange('customerInn', e.target.value)}
      />
      <TextField
        label="КПП"
        value={form.customerKpp || ''}
        onChange={(e) => handleChange('customerKpp', e.target.value)}
      />
      <TextField
        label="Юр. адрес"
        value={form.customerLegalAddress || ''}
        onChange={(e) => handleChange('customerLegalAddress', e.target.value)}
      />
      <TextField
        label="Почтовый адрес"
        value={form.customerPostalAddress || ''}
        onChange={(e) => handleChange('customerPostalAddress', e.target.value)}
      />
      <TextField
        label="Электронная почта"
        value={form.customerEmail || ''}
        onChange={(e) => handleChange('customerEmail', e.target.value)}
      />
      <TextField
        label="Вышестоящий контрагент"
        value={form.customerCodeMain || ''}
        onChange={(e) => handleChange('customerCodeMain', e.target.value)}
      />
      <TextField
        label="Юр. лицо"
        type="checkbox"
        checked={form.isOrganization || false}
        onChange={(e) => handleChange('isOrganization', e.target.checked)}
      />
      <TextField
        label="Физ. лицо"
        type="checkbox"
        checked={form.isPerson || false}
        onChange={(e) => handleChange('isPerson', e.target.checked)}
      />
      <Button type="submit">Сохранить</Button>
    </Form>
  );
};

export default CustomerForm;