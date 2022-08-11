import { Link } from "react-router-dom";

const ProductComponent = ({ image, link, linkTo }) => {
  return (
    <div className="app__product-wrap">
      <img className="app__product-img" src={image} alt="productImg" />
      <Link to={`${linkTo}`} className="app__product-link">
        {link}
      </Link>
    </div>
  );
};

export default ProductComponent;
