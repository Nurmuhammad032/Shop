import { Link } from "react-router-dom";

const ProductComponent = ({ image, link, linkTo, useless }) => {
  return (
    <div className="app__product-wrap">
      <p className="useless-link">{useless}</p>
      <img className="app__product-img" src={image} alt="productImg" />
      <Link to={`${linkTo}`} className="app__product-link">
        {link}
      </Link>
    </div>
  );
};

export default ProductComponent;
