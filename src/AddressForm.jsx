import React, { useState } from 'react';

const AddressField = ({ label, value, onChange }) => (
  <div>
    <label htmlFor={label}>{label}: </label>
    <input
      id={label}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

const AddressForm = () => {
  const [recipientName, setRecipientName] = useState('');
  const [recipientStreet, setRecipientStreet] = useState('');
  const [recipientCity, setRecipientCity] = useState('');
  const [recipientState, setRecipientState] = useState('');
  const [recipientZip, setRecipientZip] = useState('');
  
  const [returnName, setReturnName] = useState('');
  const [returnStreet, setReturnStreet] = useState('');
  const [returnCity, setReturnCity] = useState('');
  const [returnState, setReturnState] = useState('');
  const [returnZip, setReturnZip] = useState('');

  return (
    <div>
      <h2>Recipient Address</h2>
      <AddressField
        label="Name"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
      />
      <AddressField
        label="Street"
        value={recipientStreet}
        onChange={(e) => setRecipientStreet(e.target.value)}
      />
      <AddressField
        label="City"
        value={recipientCity}
        onChange={(e) => setRecipientCity(e.target.value)}
      />
      <AddressField
        label="State"
        value={recipientState}
        onChange={(e) => setRecipientState(e.target.value)}
      />
      <AddressField
        label="ZIP"
        value={recipientZip}
        onChange={(e) => setRecipientZip(e.target.value)}
      />
      
      <h2>Return Address</h2>
      <AddressField
        label="Name"
        value={returnName}
        onChange={(e) => setReturnName(e.target.value)}
      />
      <AddressField
        label="Street"
        value={returnStreet}
        onChange={(e) => setReturnStreet(e.target.value)}
      />
      <AddressField
        label="City"
        value={returnCity}
        onChange={(e) => setReturnCity(e.target.value)}
      />
      <AddressField
        label="State"
        value={returnState}
        onChange={(e) => setReturnState(e.target.value)}
      />
      <AddressField
        label="ZIP"
        value={returnZip}
        onChange={(e) => setReturnZip(e.target.value)}
      />
    </div>
  );
};

export default AddressForm;
