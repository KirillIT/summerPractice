import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import LotsPage from './pages/LotsPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CustomersPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/lots" element={<LotsPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;