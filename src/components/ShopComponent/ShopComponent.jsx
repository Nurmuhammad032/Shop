import { useState } from "react";
import { Link } from "react-router-dom";
import './ShopComponent.scss'

const ShopComponent = ({ image, hoverImg, info, price, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="app__shop-wrap">
      <div
        className="app__shop-img"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
          <img
            src={hover ? hoverImg : image}
            alt="shopImg"
          />
        <Link to={link} className="app__shop-link">View</Link>
      </div>
      <div className="app__shop-price">
        <p>{info}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ShopComponent;
