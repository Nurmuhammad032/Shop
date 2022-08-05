const ProductComponent = ({ image, link }) => {
  return (
    <div className="app__product-wrap">
      <img className="app__product-img" src={image} alt="productImg" />
      <a className="app__product-link" href="#">
        {link}
      </a>
    </div>
  );
};

export default ProductComponent;
