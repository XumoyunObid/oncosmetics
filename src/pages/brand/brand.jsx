import React from 'react'
// import "./main.css";
import HeaderImg from '../../assets/brand/brand-header.png'

function Brand() {
  return (
    <div>
      <img className="header-img" src={HeaderImg} alt="" />
      <div className="container ">
        <div className='d-flex'>
          <h1 >About Brand ONmacabim</h1>
          <p className='header-p'>
            Place where our crazy-talented master stylists will not only do a
            haircut or makeup.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brand