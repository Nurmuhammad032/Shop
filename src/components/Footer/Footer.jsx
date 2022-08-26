import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import FooterAccordion from "./FooterAccordion";

const quickLinks = [
  "shipping + returns",
  "FAQs",
  "contact us",
  "gift cards",
  "privacy policy",
  "terms of service",
  "refund policy",
];
const aboutUs = [
  "our story + mission",
  "locations",
  "collaborations",
  "carreers",
  "interns",
  "blog",
];

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleKey = (e) => {
    if (e.target.value !== "") {
      setShow(true);
    }
  };
  return (
    <footer className="app__footer">
      <div className="app__footer-logo">
        <img
          src="//cdn.shopify.com/s/files/1/0339/0901/files/DU-White-Logo_x46@2x.png?v=1631291423"
          alt="Dress Up"
        />
      </div>
      <div className="app__footer-items">
        <div className="app__footer-item">
          <p className="footer__links-header">Quick links</p>
          {quickLinks.map((link, i) => (
            <Link key={i} to="">
              {link}
            </Link>
          ))}
        </div>
        <div className="app__footer-item">
          <p className="footer__links-header">about us</p>
          {aboutUs.map((aboutLink, i) => (
            <Link key={i} to="">
              {aboutLink}
            </Link>
          ))}
        </div>
        <div className="app__footer-item">
          <p className="footer__links-header">sign up and save</p>
          <div>
            <p className="sign-info">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals
            </p>

            <div className="sign-input">
              <input
                onKeyUp={handleKey}
                type="text"
                placeholder="Enter your email"
              />
              {show && <span className="input-submit">subscribe</span>}
              {!show && <AiOutlineMail className="emailIcon" fill="#fff" />}
            </div>
            <div className="app__footer-social">
              <FaInstagram />
              <FaFacebook />
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>

      <FooterAccordion />
      <div className="copyright">
        <p>&copy; 2022 dress up</p>
      </div>
    </footer>
  );
};

export default Footer;
