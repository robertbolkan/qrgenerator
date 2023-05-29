import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';
import AddressForm from './AddressForm';
// import QRCodeReceiver from './Receiver/QRCodeReceiver'; // make sure this path points to the correct file
import QRCodeReceiver from './Receiver/QRCodeReceiver';

function App() {
  console.log('Rendering App component');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeGenerator />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/receiver" element={<QRCodeReceiver />} /> {/* new route for the QRCodeReceiver */}
      </Routes>
    </Router>
  );
}

export default App;
