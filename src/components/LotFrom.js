import React, { useState, useEffect } from 'react';
import { createLot, updateLot } from '../api/lotApi';
import { TextField, Button, Form } from '@consta/uikit';

const LotForm = ({ lot, onSave }) => {
  const [form, setForm] = useState(lot || {});

  useEffect(() => {
    setForm(lot || {});
  }, [lot]);

  const handleChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.lotName) {
      await updateLot(form.lotName, form);
    } else {
      await createLot(form);
    }
    onSave();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Наименование лота"
        value={form.lotName || ''}
        onChange={(e) => handleChange('lotName', e.target.value)}
      />
      <TextField
        label="Код контрагента"
        value={form.customerCode || ''}
        onChange={(e) => handleChange('customerCode', e.target.value)}
      />
      <TextField
        label="Начальная стоимость"
        value={form.price || ''}
        onChange={(e) => handleChange('price', e.target.value)}
      />
      <TextField
        label="Валюта"
        value={form.currencyCode || ''}
        onChange={(e) => handleChange('currencyCode', e.target.value)}
      />
      <TextField
        label="Код НДС"
        value={form.ndsRate || ''}
        onChange={(e) => handleChange('ndsRate', e.target.value)}
      />
      <TextField
        label="Грузополучатель"
        value={form.placeDelivery || ''}
        onChange={(e) => handleChange('placeDelivery', e.target.value)}
      />
      <TextField
        label="Дата доставки"
        value={form.dateDelivery || ''}
        onChange={(e) => handleChange('dateDelivery', e.target.value)}
      />
      <Button type="submit">Сохранить</Button>
    </Form>
  );
};

export default LotForm;