import "./Navbar.scss";
import { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { setShowCart } from "../../store/cartSlice";
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

  useEffect(() => {
    const body = document.querySelector("body");
    if (openBar || open) {
      body.classList.add("lock-scroll");
    } else {
      body.classList.remove("lock-scroll");
    }
  }, [openBar, open]);

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
            <Link to="">
              <FaInstagram />
            </Link>
            <Link to="">
              <FaFacebook />
            </Link>
            <Link to="">
              <FaPinterest />
            </Link>
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
                <Link to="/">
                  <img
                    src="//cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136"
                    srcSet="//cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136 1x, //cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x@2x.png?v=1631144136 2x"
                    alt="Dress Up"
                    itemProp="logo"
                  />
                </Link>
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
                <Link to="" className="links-wrapp">
                  du exclusive
                </Link>
                <LinkComponent links={exclusive} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  New arrivals
                </Link>
                <LinkComponent links={newArrivals} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  clothing
                </Link>
                <LinkComponent links={clothing} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  dresses
                </Link>
                <LinkComponent links={dresses} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  shoes
                </Link>
                <LinkComponent links={shoes} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  accessories
                </Link>
                <LinkComponent links={accessories} />
              </li>
              <li>
                <Link to="" className="links-wrapp">
                  sale
                </Link>
                <LinkComponent links={sale} />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* {open && ( */}
      <>
        {open && (
          <span className="items-bg" onClick={() => setOpen(false)}></span>
        )}
        <section className={`app__menu-wrapper ${open ? "open__menu" : ""}`}>
          <div className="close__btn-wrapper">
            <div className="close-btn" onClick={() => setOpen(false)}>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <motion.ul
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li className="collapse-header">
                <MenuAccordion />
              </li>
              <li className="login-link">
                <Link to="">Login</Link>
              </li>
              <li className="menu-social">
                <Link to="">
                  <FaInstagram />
                </Link>
                <Link to="">
                  <FaFacebook />
                </Link>
                <Link to="">
                  <FaPinterest />
                </Link>
              </li>
            </motion.ul>
          </div>
        </section>
      </>
    </>
  );
};

export default Navbar;
