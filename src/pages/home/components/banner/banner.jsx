import { Link } from "react-router-dom";
import "./banner.css"

export const Banner = () => {
  return <section className="showcase">
    <div className="banner">
      <h1 className="banner-title">Discover summer promotions</h1>
      <p className="banner-text">Free sample and free shipping when you spend $50</p>
      <div className="banner-btns">
        <button className="skincareBtn">Skincare</button>
        <Link to="/products" className="shopBtn">Shop All</Link>
      </div>
    </div>
  </section>;
};
