import "./home-contact.css"

import CommentsIcon from "../../../../assets/icons/Comments"
import PhoneIcon from './../../../../assets/icons/PhoneIcon';
import MailIcon from './../../../../assets/icons/MailIcon';
import RightIcon from "../../../../assets/icons/right-icon";
import { Link } from 'react-router-dom';

const HomeContact = () => {
  return (
    <section className="home-contact">
      <div className="container home-contact-wrapper">
        <div className="contact-card">
          <div className="icon-wrapper">
          <CommentsIcon />
          </div>
          <p className="contact-card-title">Frequently asked questions</p>
          <span className="contact-card-text">If you have questions about products, orders or <br /> account info, you may find answer in our FAQ.</span>
          <Link  className="contact-links" to="">View FAQ </Link>
        </div>
        <div className="contact-card">
          <div className="icon-wrapper">
          <PhoneIcon />
          </div>
          <p className="contact-card-title">Give us a call</p>
          <span className="contact-card-text">You can always give us a call: Mon <br /> to Fri from 9 am till 7 pm EST.</span>
          <strong className="contact-links">+44 678 94830</strong>
        </div>
        <div className="contact-card">
          <div className="icon-wrapper">
          <MailIcon />
          </div>
          <p className="contact-card-title">Drop us a line</p>
          <span className="contact-card-text">Drop us a line and we will get back to <br /> you as soon as possible.</span>
          <strong className="contact-links">hello@example.com</strong>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
