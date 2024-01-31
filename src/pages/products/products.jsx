import React from "react";
import { Productitem } from "./product-item/product-item";
import './product.css'

export const Products = () => {
  return (
    <div className="products">
      <div className="hero">
        <div className="hero-titles">
          <h2 className="hero-title">Carefully selected beauty products</h2>
          <p className="hero-text">
            Our team carefully selects only the best products that have
            toxic-free formulas and are not tested on animals.
          </p>
        </div>
      </div>
      <Productitem/>
    </div>
  );
};
