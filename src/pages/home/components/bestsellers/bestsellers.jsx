import "./bestsellers.css";
import LeftIcon from "./../../../../assets/icons/left-icon";
import RightIcon from "./../../../../assets/icons/right-icon";
import Cards from "../../../about/components/cards/cards";

const Bestsellers = () => {
  return (
    <section className="bestsellers">
      <div className="bestsellers-wrapper">
        <h1 className="bestsellers-title">Our bestsellers</h1>
        <div className="bestsellers-cards">
          <LeftIcon />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <RightIcon />
        </div>
        <button className="shopBtn">Shop All</button>
      </div>
    </section>
  );
};

export default Bestsellers;
