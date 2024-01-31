import React from "react";
import { Logo } from "../../assets/logo";
import { Link } from "react-router-dom";
import { Twittericon } from "../../assets/icons/twitter-icon";
import { Facebookicon } from "../../assets/icons/facebook-icon";
import { Youtubeicon } from "../../assets/icons/youtube-icon";
import { Telegramicon } from "../../assets/icons/telegram-icon";
import { Instaicon } from "../../assets/icons/insta-icon";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer">
        <div>
          <Link className="Logo" to="/">
            <Logo />
          </Link>
          <div className="footer-icons">
            <Twittericon />
            <Facebookicon />
            <Youtubeicon />
            <Telegramicon />
            <Instaicon />
          </div>
        </div>
        <div>
          <h3 className="footer-title">ABOUT</h3>
          <ul className="footer-lists">
            <li>
              <Link className="link" to="/Finde">
                Finde
              </Link>
            </li>
            <li>
              <Link className="link" to="/Brand">
                Brand
              </Link>
            </li>
            <li>
              <Link className="link" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/Wheretobuy">
                Where to buy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">HELP</h3>
          <ul className="footer-lists">
            <li>
              <Link className="link" to="/ShippingTrack Order">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link className="link" to="/TrackoFAQrder">
                Track Order
              </Link>
            </li>
            <li>
              <Link className="link" to="/FAQ">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="link" to="/Terms">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="link" to="/Privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">SUBSCRIBE</h3>
          <p className="footer-subs_text">Subscribe now and thank us later</p>
          <div className="footer-subs">
            <input type="text" name="" id="" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
