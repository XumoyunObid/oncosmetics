import React from "react";
import headerImg from "../../assets/contact/contact-header.png";
import SectionImg1 from "../../assets/contact/contact-section-1.png";
import { useNavigate } from "react-router-dom";
import "../contact/contact.css";
import Address from "../../components/address";
import Map from "../../assets/contact/contact-map.png";

function Contact() {
  const navigate = useNavigate();
  const buttonFAQ = () => {
    navigate("/FAQ");
  };
  return (
    <div>
      <img className="header-img" src={headerImg} alt="" />
      <div className="container space-between align-items">
        <img src={SectionImg1} alt="" />
        <div className="flex-diraction gap-1">
          <h3>Get in touch</h3>

          <p>Send us a note anytime — we welcome feedback and requests.</p>

          <p>Give us a call</p>
          <ul>
            <li>Mon – Fri, 9am – 7pm EST:</li>
            <li>+44 583 837390</li>
          </ul>

          <div>
            <p>Write us an email</p>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>

          <button className="contact-btn" onClick={buttonFAQ}>
            Visit FAQ
          </button>
        </div>
      </div>
      <div className="container space-between">
        <div className="mt-5 ">
          <Address />
        </div>
        <div className="mt-5">
          <img src={Map} alt="" />
        </div>
      </div>
      <div>
        <h3 className="justify-content-center mt-5">Drop us a line</h3>
        <p className="justify-content-center text-center">
          We are here to help. Please complete the short form below and <br />{" "}
          we’ll respond as soon as possible.
        </p>
      </div>

      <form className="container contact-form ">
        <div className="contact-flex space-between gap-3 flex-direction mt-1">
          <input
            className="contact-input-1 p-1 "
            type="text"
            placeholder="Default"
          />
          <input
            className="contact-input-1  p-1"
            type="email"
            placeholder="E-mail"
          />
          <input
            className="contact-input-1 p-1"
            type="tel"
            placeholder="Phone"
          />
        </div>
        <div className=" flex-diraction space-center gap-1 mt-1">
          <input
            className="contact-input p-1"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="p-1 contact-area"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="justify-content-end">
          <button className="contact-btn mt-1 mb-3 ">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
