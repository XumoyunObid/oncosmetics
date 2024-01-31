import React from 'react'
import BuyLogo from '../../assets/buy/buy-logo.svg'
import dot from '../../assets/buy/dot.svg'
import phone from '../../assets/buy/phone.svg'
import BuyMap from '../../assets/contact/contact-map.png'
import BuyWhatsApp from '../../assets/brand/WhatsApp.svg'
import './buy.css'
function Buy() {
  return (
    <div>
      <div className="buy-flex mt-1">
        <div className="buy-flex-div-1 ">
          <div className="container ">
            <h2 className="">Where to Buy</h2>
          </div>
          <div className="contact-flex align-items container gap">
            <img className="mt-1" src={BuyLogo} alt="" />
            <div className="mt-1">
              <h3>Berlin</h3>
              <small>ONmacabim Deutschland</small>
            </div>
          </div>
          <div className="container space-between ">
            <div className="mx-5">
              <h4>Kaiser-Friedrich-Strasse 19, 10585 Berlin</h4>
              <div className="gap">
                <img src={dot} alt="" />
                <span>На карте</span>
              </div>
            </div>
            <div className="align-items flex-diraction gap">
              <div className="align-items">
                <img src={phone} alt="" />
                <small>+49 176 436 036 89</small>
              </div>
              <div className="align-items">
                <img src={phone} alt="" />
                <small>+49 157 381 811 78</small>
              </div>
            </div>
          </div>
          <div className="contact-flex align-items container gap">
            <img className="mt-1" src={BuyLogo} alt="" />
            <div className="mt-1">
              <h3>Berlin</h3>
              <small>ONmacabim Deutschland</small>
            </div>
          </div>
          <div className="container space-between ">
            <div className="mx-5">
              <h4>Kaiser-Friedrich-Strasse 19, 10585 Berlin</h4>
              <div className="gap">
                <img src={dot} alt="" />
                <span>На карте</span>
              </div>
            </div>
            <div className="align-items flex-diraction gap">
              <div className="align-items">
                <img src={phone} alt="" />
                <small>+49 176 436 036 89</small>
              </div>
              <div className="align-items">
                <img src={phone} alt="" />
                <small>+49 157 381 811 78</small>
              </div>
            </div>
          </div>
          <div className="contact-flex align-items container gap">
            <img className="mt-1" src={BuyLogo} alt="" />
            <div className="mt-1">
              <h3>Berlin</h3>
              <small>ONmacabim Deutschland</small>
            </div>
          </div>
          <div className="container space-between gap-3">
            <div className="mx-5">
              <h4>Kaiser-Friedrich-Strasse 19, 10585 Berlin</h4>
              <div className="gap">
                <img src={dot} alt="" />
                <span>На карте</span>
              </div>
            </div>
            <div className="align-items flex-diraction gap">
              <div className="align-items">
                <img src={phone} alt="" />
                <small>+49 176 436 036 89</small>
              </div>
              <div className="align-items">
                <img src={phone} alt="" />
                <small>+49 157 381 811 78</small>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="gap-3">
            <div>
              <h4>RU / DE / UA</h4>
              <img src={BuyWhatsApp} alt="" />
              <span>+49 176 436 036 89</span>
            </div>
            <div>
              <h4>ENG / RU</h4>
              <div>
                <img src={BuyWhatsApp} alt="" />
                <span>+49 157 381 811 78</span>
              </div>
            </div>
          </div>
          <img className='buy-map mt-1' src={BuyMap} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Buy