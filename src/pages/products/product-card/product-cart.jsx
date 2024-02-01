import React from 'react'
import { useParams } from 'react-router-dom';
import "./product-cart.css"
import img2 from "../../../assets/product-img/Rectangle1.png"

export const ProductCart = () => {
    const { id } = useParams();
    console.log(id);
  return (
    <div className="product-cart">
      <div className="product_card-container">
        <div className="product_cart-block">
          <div className="product-cart-grid">
            <img className="grid-item1" src={img2} alt="" />
            <img className="grid-item2" src={img2} alt="" />
            <img className="grid-item3" src={img2} alt="" />
            <img className="grid-item4" src={img2} alt="" />
          </div>
          <div className="product-cart-info">
            <h3 className="product-cart-info_title">Eye Cream</h3>
            <span className="cart_info-price">$ 25.00</span>
            <span className="cart_info-newprice">$19.00</span>
            <p className="cart_info-text">
              A potent anti-oxidant blend formulated with generous doses of
              Vitamins C and E to gently nourish and protect the delicate skin
              surrounding the eyes.
            </p>
            <div className="cart_info-vess">
              <span className="cart-info-ves1">200 ml</span>
              <span className="cart-info-ves1">500 ml</span>
            </div>
            <div className="product-cart_info-buttons">
              <div className="cart_info-buttons">
                <button className="decrement">-</button>
                <p className="cart_info-number">2</p>
                <button className="increment">+</button>
              </div>
              <button className="cart_info-add">Add to cart</button>
            </div>
            <p className="cart_info-text">Tags:fragrance, skincare</p>
            <h4>Description</h4>
            <p className="cart_info-text">
              Our beauty box is a set of best full-size products that are top
              sellers in out online shop. We want you to be able to try
              everything at once and make sure that our selection of products is
              about quality, our product just do their job, no compromises. You
              can subscribe and get our beauty box every month or just buy it
              once.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
