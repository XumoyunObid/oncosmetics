import "./faqform.css";
import FaqMailIcon from "./../../../assets/icons/FaqMailIcon";
const FaqFrom = () => {
  return (
    <section className="faq-form">
      <div className="faq-form-wrapper">
        <FaqMailIcon />
        <h1 className="faq-form-title">Keep up to date with our advices</h1>
        <p className="faq-form-text">Subscribe now and thank us later</p>
        <div className="faq-form-input">
          <input type="text" name="" id="" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default FaqFrom;
