import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./product-cart.css";
import img2 from "../../../assets/product-img/Rectangle1.png";


import { data } from "../../../data/data";

export const ProductCart = () => {
  const { id } = useParams();
  console.log(id);

  const product = data.find((product) => product.id === parseInt(id));

  const [number, setNumber] = useState(1);

  const [price, setPrice] = useState(product.prices);
  console.log(product.prices);
  const plus = () => {
    setNumber(number + 1);
    setPrice(price + product.prices);
    
  };

  const minus = () => {
   if(number <= 0 || price <= 0) return 0
   else{
     setNumber(number - 1);
     setPrice(price - product.prices);
   }
  };
  return (
    <div className="product-cart">
      <div className="product_card-container">
        <div className="product_cart-block">
          {product ? (
            <>
              <div className="product-cart-grid">
                <img className="grid-item1" src={product.url} alt="" />
                <img className="grid-item2" src={product.url} alt="" />
                <img className="grid-item3" src={product.url} alt="" />
                <img className="grid-item4" src={product.url} alt="" />
              </div>
              <div className="product-cart-info">
                {/* <h3 className="product-cart-info_title">Eye Cream</h3>
                <span className="cart_info-price">$ 25.00</span>
                <span className="cart_info-newprice">$19.00</span> */}

                <h3 className="product-cart-info_title">{product.title}</h3>
                {/* <span className="cart_info-price">$ 25.00</span> */}
                <span className="cart_info-newprice">{product.price}</span>

                <p className="cart_info-text">
                  A potent anti-oxidant blend formulated with generous doses of
                  Vitamins C and E to gently nourish and protect the delicate
                  skin surrounding the eyes.
                </p>
                <div className="cart_info-vess">
                  <span className="cart-info-ves1">200 ml</span>
                  <span className="cart-info-ves1">500 ml</span>
                </div>
                <div className="product-cart_info-buttons">
                  <div className="cart_info-buttons">
                    <button className="decrement" onClick={minus}>
                      -
                    </button>
                    <p className="cart_info-number">{number}</p>
                    <button className="increment" onClick={plus}>
                      +
                    </button>
                  </div>
                  <button className="cart_info-add">Add to cart</button>
                </div>
                <small>${price}</small>
                <p className="cart_info-text">Tags:fragrance, skincare</p>
                <h4>Description</h4>
                <p className="cart_info-text">
                  Our beauty box is a set of best full-size products that are
                  top sellers in out online shop. We want you to be able to try
                  everything at once and make sure that our selection of
                  products is about quality, our product just do their job, no
                  compromises. You can subscribe and get our beauty box every
                  month or just buy it once.
                </p>
              </div>
            </>
          ) : (
            <p>Product not found ...</p>
          )}
        </div>
      </div>
    </div>
  );
};
