import "./list.css";
import ChemicalIcon from "./../../../../assets/icons/chemical";
import ShippingIcon from "./../../../../assets/icons/Shipping";
import HeartsIcon from "./../../../../assets/icons/Hearts";
import CommentsIcon from "./../../../../assets/icons/Comments";
const List = () => {
  return (
    <section className="list">
      <div className="container list-wrapper">
        <div className="list-card">
          <ChemicalIcon />
          <p className="list-card-title">Ethical business</p>
          <span className="list-card-text">Only green beauty products.</span>
        </div>
        <div className="list-card">
          <ShippingIcon />
          <p className="list-card-title">Shipped free & with love</p>
          <span className="list-card-text">On orders abouve $50.</span>
        </div>
        <div className="list-card">
          <HeartsIcon />
          <p className="list-card-title">Delivered in 1-3 days</p>
          <span className="list-card-text">And packaged with love.</span>
        </div>
        <div className="list-card">
          <CommentsIcon />
          <p className="list-card-title">Personalized experience</p>
          <span className="list-card-text">Free consultations via email.</span>
        </div>
      </div>
    </section>
  );
};

export default List;
