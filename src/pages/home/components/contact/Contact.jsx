import "./home-contact.css"

import CommentsIcon from "../../../../assets/icons/Comments"
import PhoneIcon from './../../../../assets/icons/PhoneIcon';
import MailIcon from './../../../../assets/icons/MailIcon';

const HomeContact = () => {
  return (
    <section className="home-contact">
      <div className="container home-contact-wrapper">
        <div className="contact-card">
          <CommentsIcon />
          <p className="contact-card-title">Ethical business</p>
          <span className="contact-card-text">Only green beauty products.</span>
        </div>
        <div className="list-card">
          <PhoneIcon />
          <p className="contact-card-title">Shipped free & with love</p>
          <span className="contact-card-text">On orders abouve $50.</span>
        </div>
        <div className="list-card">
          <MailIcon />
          <p className="contact-card-title">Delivered in 1-3 days</p>
          <span className="contact-card-text">And packaged with love.</span>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
