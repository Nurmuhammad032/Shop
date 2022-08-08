import { Accordion } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

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

const FooterAccordion = () => {
  const [show, setShow] = useState(false);
  const handleKey = (e) => {
    if (e.target.value !== "") {
      setShow(true);
    }
  };
  return (
    <>
      <Accordion className="footer-responsive">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p
            className="footer__links-header"
            style={{
              textAlign: "center",
              display: "block",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "#fff",
              fontWeight: "200",
              textTransform: "uppercase",
            }}
          >
            Quick links
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {quickLinks.map((link, i) => (
            <a key={i} href="#" className="app__footer-accordionLinks">
              {link}
            </a>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion className="footer-responsive">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p
            className="footer__links-header"
            style={{
              textAlign: "center",
              display: "block",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "#fff",
              fontWeight: "200",
              textTransform: "uppercase",
            }}
          >
            about us
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {aboutUs.map((link, i) => (
            <a key={i} href="#" className="app__footer-accordionLinks">
              {link}
            </a>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion className="footer-responsive">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p
            className="footer__links-header"
            style={{
              textAlign: "center",
              display: "block",
              margin: "0 auto",
              fontSize: "1.2rem",
              color: "#fff",
              fontWeight: "200",
              textTransform: "uppercase",
            }}
          >
            sign up and save
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="res-phone">
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
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FooterAccordion;
