import { images } from "../../constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Landing.scss";

const Landing = () => {
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    if (!closeModal) {
      setTimeout(() => {
        document.querySelector("body").classList.add("lock-scroll");
      }, 2000);
    } else {
      document.querySelector("body").classList.remove("lock-scroll");
    }
  });

  return (
    <div className="landing-wrapper">
      <div>
        <Link to="/dresses-collections">
          <img className="landing" src={images.landing} alt="landingImg" />
          <img
            className="landingPhone"
            src={images.landingPhone}
            alt="landingImg"
          />
        </Link>
      </div>
      <motion.div
        onClick={() => setCloseModal(true)}
        whileInView={{ opacity: [0, 1] }}
        transition={{ delay: 2 }}
        className={`items-bg ${closeModal ? "close-bg" : ""}`}
      ></motion.div>
      <motion.div
        whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
        transition={{ delay: 2 }}
        className={`modal ${closeModal ? "closeModal" : ""}`}
      >
        <div className="modal-close" onClick={() => setCloseModal(true)}>
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="modal-body">
          <p>
            <span>Watch Out !!</span> - not all links work!
          </p>
        </div>
      </motion.div>
      <div className="landing-desc">
        <p>
          BUY ONLINE & PICK UP IN STORE -{" "}
          <span>select “store pick up” at checkout + pick up same day!</span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
