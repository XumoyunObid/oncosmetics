import "./bestsellers.css";
import LeftIcon from "./../../../../assets/icons/left-icon";
import RightIcon from "./../../../../assets/icons/right-icon";
import Cards from "../../../about/components/cards/cards";

import { data } from "./../../../../data/data";
import { Link } from "react-router-dom";
let num = 0;
const Bestsellers = () => {
  return (
    <section className="bestsellers">
      <div className="bestsellers-wrapper">
        <h1 className="bestsellers-title">Our bestsellers</h1>
        <div className="bestsellers-cards">
          <LeftIcon />
          {data.slice(0, 4).map((item) => {
            if (num <= 4) {
              return (
                <Link key={item.id} to={`/products/${item.id}`}>
                  {" "}
                  <Cards
                    key={item.id}
                    img={item.url}
                    title={item.title}
                    price={item.price}
                  />{" "}
                </Link>
              );
            }
          })}
          <RightIcon />
        </div>
        <Link to="/products" className="shopBtn">Shop All</Link>
      </div>
    </section>
  );
};

export default Bestsellers;
