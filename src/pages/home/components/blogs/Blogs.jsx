import LeftIcon from "../../../../assets/icons/left-icon";
import "./blogs.css";
import RightIcon from './../../../../assets/icons/right-icon';
const Blogs = () => {
  return (
    <section className="blogs">
      <div className="blogs-wrapper">
        <h1 className="blogs-title">Blogs</h1>
        <div className="blogs-cards-wrapper">
        <LeftIcon/>
          <div className="blogs-card-wrapper">
            <div className="blogs-card">

            </div>
            <p className="blogs-card-date">Beauty May2, 2021</p>
            <p className="blogs-card-title">Some beaty secrets from <br /> our editor in chief</p>
          </div>
          {/* /////////////////////////////// */}
          <div className="blogs-card-wrapper">
            <div className="blogs-card">

            </div>
            <p className="blogs-card-date">Beauty May2, 2021</p>
            <p className="blogs-card-title">Morning beauty routine: <br /> our main rules</p>
          </div>
          {/* /////////////////////////////// */}
          <div className="blogs-card-wrapper">
            <div className="blogs-card">

            </div>
            <p className="blogs-card-date">Beauty May2, 2021</p>
            <p className="blogs-card-title">Organic ingredients: do <br /> they even work?</p>
          </div>
          {/* /////////////////////////////// */}
          <div className="blogs-card-wrapper">
            <div className="blogs-card">

            </div>
            <p className="blogs-card-date">Beauty May2, 2021</p>
            <p className="blogs-card-title">The best cosmetic <br /> products</p>
          </div>
          {/* /////////////////////////////// */}
        <RightIcon/>
        </div>
        <button className="shopBtn">View All Posts</button>
      </div>
    </section>
  );
};

export default Blogs;
