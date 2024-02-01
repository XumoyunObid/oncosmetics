import React, { useState } from "react";
import "./product-item.css";
import img1 from "../../../assets/product-img/up-icon.svg";
import Cards from "../../about/components/cards/cards";
import { Link } from "react-router-dom";
import { data } from "../../../data/data";
import FaqMailIcon from "../../../assets/icons/FaqMailIcon";

export const Productitem = () => {
  let [button, setButton] = useState(false);
  return (
    <div className="product_items">
      <div className="containerlg">
        <div className="product_item">
          <div className="product_item-home">
            <h4 className="product_item-title">Home</h4>
            <h4 className="product_item-title">/Shop All</h4>
          </div>
          <div className="product_item2">
            <button
              onClick={() => setButton(!button)}
              className="product_item2-button"
            >
              Defoult sorting <img src={img1} alt="" />
            </button>
            {button ? (
              <div className="product_item2-block">
                <ul className="product_item2-list">
                  <li>Defoult sorting</li>
                  <li>Sort by popularity</li>
                  <li>Sort by average rating</li>
                  <li>Sort by latest</li>
                  <li>Sort by price: low to high</li>
                  <li>Sort by price: high to low</li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="product_info">
          <div className="product_info_block1">
            <div>
              <h3 className="product_info_block1-title">Filter by color</h3>
              <input type="checkbox" name="" id="" />
              <span>Black (1)</span>
              <br />
              <input type="checkbox" name="" id="" />
              <span>Blue (5)</span>
              <br />
              <input type="checkbox" name="" id="" />
              <span>Green (8)</span>
              <br />
              <input type="checkbox" name="" id="" />
              <span>Red (6)</span>
            </div>
            <div>
              <h3 className="product_info_block1-title">Filter by category</h3>
              <input type="checkbox" />
              <span>Uncategorized</span>
              <br />
              <input type="checkbox" />
              <span>Bestsellers</span>
              <br />
              <input type="checkbox" />
              <span>Body</span>
              <br />
              <input type="checkbox" />
              <span>Fragrance</span>
              <br />
              <input type="checkbox" />
              <span>Jo Malone</span>
              <br />
              <input type="checkbox" />
              <span>Masks</span>
              <br />
              <input type="checkbox" />
              <span>Organic Body</span>
              <br />
              <input type="checkbox" />
              <span>Organic Hair</span>
              <br />
              <input type="checkbox" />
              <span>Organic Skincare</span>
              <br />
              <input type="checkbox" />
              <span>Organic Wellbeing</span>
              <br />
              <input type="checkbox" />
              <span>Parfume</span>
              <br />
              <input type="checkbox" />
              <span>Sunscreens</span>
              <br />
            </div>
          </div>
          <div className="product_info_block2">
            {data.slice(0, 12).map((item) => {
              return (
                <Link key={item.id} to={`/products/${item.id}`}>
                  {" "}
                  <Cards
                    id={item.id}
                    img={item.url}
                    title={item.title}
                    price={item.price}
                  />{" "}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="faq-form">
            <div className="faq-form-wrapper">
              <FaqMailIcon />
              <h1 className="faq-form-title">
                Keep up to date with our advices
              </h1>
              <p className="faq-form-text">Subscribe now and thank us later</p>
              <div className="faq-form-input">
                <input type="text" name="" id="" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
