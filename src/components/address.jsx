import React from 'react'
import { Link } from 'react-router-dom';
import WhatsApp from "../assets/brand/WhatsApp.svg";
import '../pages/brand/brand.css'
function Address() {
  return (
    <div className="brand-tel-layout">
      <h5>Adresse:</h5>
      <p>
        <Link to="#">Kaiser-Friedrich-Strasse 19, 10585 Berlin</Link>
      </p>
      <h5>Termine nach Vereinbarung</h5>
      <p>RU / DE / UA</p>
      <div className="section-tel">
        <img src={WhatsApp} alt="" />
        <span>+49 176 436 036 89</span>
      </div>

      <p>ENG / RU</p>
      <div className="section-tel">
        <img src={WhatsApp} alt="" />
        <span>+49 157 381 811 78</span>
      </div>
    </div>
  );
}

export default Address