import React from 'react';
import './Dial.css'; // This now imports the fixed CSS
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const whatsappNumber = '+91 98679 51140';
const callNumber = '+91 98679 51140';

const Dial = () => ( // Renamed to Dial
  <div className="display">
    {/* WhatsApp Floating Button */}
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <DotLottieReact
        src="/whatsapp.lottie"
        loop
        autoplay
        className="h" // This class is styled in the CSS
      />
    </a>

    {/* Direct Call Button */}
    <a href={`tel:${callNumber}`} className="call_float">
      <DotLottieReact
        src="/call.lottie"
        loop
        autoplay
        className="h1" // This class is styled in the CSS
      />
    </a>
  </div>
);

export default Dial; // Renamed to Dial