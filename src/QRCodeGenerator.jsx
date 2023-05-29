import React, { useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import QRCode from 'qrcode.react';
import ReactToPrint from 'react-to-print';
import { useNavigate } from 'react-router-dom';  // Change useHistory to useNavigate




const QRCodeGenerator = () => {
  const navigate = useNavigate();  // Change history to navigate
  const [bgColor, setBgColor] = useState('FFC0CB');
  const [greeting, setGreeting] = useState('Butt Valentines Day!');
  const [message, setMessage] = useState('I love you!');
  const [image, setImage] = useState('https://example.com/heart.png');
  const [externalUrl, setExternalUrl] = useState('');
  const [useExternalUrl, setUseExternalUrl] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [toField, setToField] = useState(''); // Add this line
  const [fromField, setFromField] = useState(''); // Add this line
  const [wrapPaper, setWrapPaper] = useState('');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [externalURL, setExternalURL] = useState(false);

  const qrCodeRef = useRef();
  const [showNextForm, setShowNextForm] = useState(false);

  const handleMailQRCodeClick = () => {
    navigate('/address');  // Change history.push to navigate
  };

  const handleGenerateClick = () => {
    const baseURL = 'https://qrbies.com/receiver'; // Change this to your live site's URL
    const queryParams = new URLSearchParams({
      bgColor,
      greeting,
      message,
      image,
      url: externalUrl, // Add the externalUrl parameter whether or not the checkbox is checked
      to: toField,
      from: fromField,
      wrapPaper,
      includeGiftWrap,
      useExternalUrl: useExternalUrl ? 'true' : 'false' // explicitly convert to string
    });
  
    setQrValue(`${baseURL}?${queryParams.toString()}`);
  };

  return (
    <div>
      <h1>QRBIES</h1>
      <div>
        <label htmlFor="bgColor">Background Color: </label>
        <SketchPicker
          color={`#${bgColor}`}
          onChangeComplete={(color) => setBgColor(color.hex.replace('#', ''))}
        />
      </div>
      <div>
        <label htmlFor="toField">To: </label>
        <input
          id="toField"
          type="text"
          value={toField}
          onChange={(e) => setToField(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fromField">From: </label>
        <input
          id="fromField"
          type="text"
          value={fromField}
          onChange={(e) => setFromField(e.target.value)}
        />
      </div>

      <div>
  <label htmlFor="wrappingPaper">Wrapping Paper: </label>
  <select id="wrappingPaper" value={wrapPaper} onChange={(e) => setWrapPaper(e.target.value)}>
  <option value='../wrapping_paper1.jpg'>Wrapping Paper 1</option>
    <option value='../wrapping_paper2.png'>Wrapping Paper 2</option>
    <option value='../wrapping_paper3.jpg'>Wrapping Paper 3</option>
    <option value='../wrapping_paper4.avif'>Wrapping Paper 4</option>
    <option value='../wrapping_paper5.jpg'>Wrapping Paper 5</option>
  </select>
  <input
    id="includeGiftWrap"
    type="checkbox"
    checked={includeGiftWrap}
    onChange={(e) => setIncludeGiftWrap(e.target.checked)}
  />
  <label htmlFor="includeGiftWrap">Include Gift Wrap: </label>

</div>
      <div>
        <label htmlFor="greeting">Greeting: </label>
        <input
          id="greeting"
          type="text"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="externalUrl">External URL: </label>
        <input
          id="externalUrl"
          type="text"
          value={externalUrl}
          onChange={(e) => setExternalUrl(e.target.value)}
        />
        <input
          type="checkbox"
          checked={useExternalUrl}
          onChange={(e) => setUseExternalUrl(e.target.checked)}
        />
        <label htmlFor="externalUrl"> Auto Redirect</label>
      </div>
      <div>
        <label htmlFor="image">Image URL: </label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button onClick={handleGenerateClick}>Generate QR Code</button>
      {/* {qrValue && (
        <div ref={qrCodeRef}>
          <QRCode value={qrValue} />
        </div>
      )} */}
      {qrValue && 
        <ReactToPrint
          trigger={() => <button>Print QR Code</button>}
          content={() => qrCodeRef.current}
        />
      }

{/* <button onClick={handleGenerateClick}>Generate QR Code</button> */}


<button onClick={handleMailQRCodeClick}>Mail QR Code</button>



{showNextForm && (
  <div>
    <div>
      <label htmlFor="recipient">Recipient: </label>
      <input
        id="recipient"
        type="text"
        value={toField} // You might want to use a different state variable for this
        onChange={(e) => setToField(e.target.value)} // and here
      />
    </div>
    <div>
      <label htmlFor="returnAddress">Return Address: </label>
      <input
        id="returnAddress"
        type="text"
        value={fromField} // You might want to use a different state variable for this
        onChange={(e) => setFromField(e.target.value)} // and here
      />
    </div>
  </div>
)}

{qrValue && (
  <div ref={qrCodeRef}>
    <QRCode value={qrValue} />
  </div>
)}
<p>
Webpage URL: 
<a href={qrValue} target="_blank" rel="noopener noreferrer">{qrValue}</a>
</p>
  </div>
);
};

export default QRCodeGenerator;
