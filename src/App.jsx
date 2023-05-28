import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';
import AddressForm from './AddressForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeGenerator />} />
        <Route path="/address" element={<AddressForm />} />
      </Routes>
    </Router>
  );
}

export default App;
