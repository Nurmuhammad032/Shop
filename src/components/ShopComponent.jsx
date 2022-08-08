import { useState } from "react";

const ShopComponent = ({ image, hoverImg, info, price }) => {
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
        <a href="#">Quick View</a>
      </div>
      <div className="app__shop-price">
        <p>{info}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ShopComponent;
