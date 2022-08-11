import "./Navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import {
  exclusive,
  newArrivals,
  clothing,
  dresses,
  shoes,
  accessories,
  sale,
} from "./LinkData";
import { useDispatch, useSelector } from "react-redux";
import LinkComponent from "./LinkComponent";
import { setShowCart } from "../../store/cartSlice";
import { selectCartItem } from "../../store/cartSlice";
import { selectTotalProduct } from "../../store/cartSlice";
import MenuAccordion from "./MenuAccordion";

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const [fixed, setFixed] = useState(false);
  const totalProduct = useSelector(selectTotalProduct);

  const showCart = (cart) => {
    dispatch(setShowCart(cart));
  };

  function lockScroll() {
    const body = document.querySelector("body");
    if (openBar || open) {
      body.classList.add("lock-scroll");
    } else {
      body.classList.remove("lock-scroll");
    }
  }
  lockScroll()
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="app__navbar">
        <div className="app__navbar-header">
          <p>
            BUY ONLINE + PICK UP IN STORE -
            <span> select “store pick up” at checkout + pick up same day!</span>
          </p>
          <div className="app__navbar-social">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaPinterest />
            </a>
          </div>
        </div>

        <div className="forHeight">
          <nav
            className={`gap-both app__navbar-wrapper ${
              fixed ? "fixed" : "static"
            }`}
            style={{
              backgroundColor: "#fff",
            }}
          >
            <ul className="app__navbar-links-header">
              {openBar && (
                <>
                  <span
                    className="items-bg"
                    onClick={() => setOpenBar(false)}
                  ></span>
                  <li className="app__search-bar">
                    <div className="app__search-items">
                      <FaSearch className="app__search-barIcon" />
                      <input type="text" placeholder="Search our store" />
                      <div
                        className="close-searchBar"
                        onClick={() => setOpenBar(false)}
                      >
                        <i className="bi bi-x"></i>
                      </div>
                    </div>
                  </li>
                </>
              )}
              <li>
                <FaSearch
                  className="search-icon"
                  onClick={() => setOpenBar(true)}
                />
                <div className="hamburger" onClick={() => setOpen(true)}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </li>
              <li>
                <img
                  src="//cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136"
                  srcSet="//cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136 1x, //cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x@2x.png?v=1631144136 2x"
                  alt="Dress Up"
                  itemProp="logo"
                />
              </li>
              <li>
                <div>
                  <FaUserAlt
                    style={{ marginRight: "1.5rem" }}
                    className="user__icon-menu"
                  />
                  <FaSearch
                    className="search-icon-menu"
                    style={{ marginRight: "1.5rem" }}
                    onClick={() => setOpenBar(true)}
                  />
                  <div
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    <FaShoppingCart onClick={() => showCart(true)} />
                    <p className="totalProduct">{totalProduct}</p>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="app__navbar-links">
              <li>
                <a href="">du exclusive</a>
                <LinkComponent links={exclusive} />
              </li>
              <li>
                <a href="">New arrivals</a>
                <LinkComponent links={newArrivals} />
              </li>
              <li>
                <a href="">clothing</a>
                <LinkComponent links={clothing} />
              </li>
              <li>
                <a href="">dresses</a>
                <LinkComponent links={dresses} />
              </li>
              <li>
                <a href="">shoes</a>
                <LinkComponent links={shoes} />
              </li>
              <li>
                <a href="">accessories</a>
                <LinkComponent links={accessories} />
              </li>
              <li>
                <a href="">sale</a>
                <LinkComponent links={sale} />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {open && (
        <>
          <span className="items-bg" onClick={() => setOpen(false)}></span>
          <motion.div
            whileInView={{ x: [-100, 0] }}
            className="app__menu-wrapper"
          >
            <div className="close__btn-wrapper">
              <div className="close-btn" onClick={() => setOpen(false)}>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <ul>
                <motion.li
                  whileInView={{ y: [10, 0] }}
                  className="collapse-header"
                >
                  <MenuAccordion />
                </motion.li>
                <li className="login-link">
                  <a href="#">Login</a>
                </li>
                <li className="menu-social">
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaFacebook />
                  </a>
                  <a href="">
                    <FaPinterest />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
