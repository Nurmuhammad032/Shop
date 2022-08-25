import "./Products.scss";
import ProductComponent from "./ProductComponent"
import { images } from "../../constants";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="app__product">
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s3Img1}
          link={"Shop dresses + rompers"}
        />
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s3Img2}
          link={"shop summer tops"}
          linkTo="/"
        />
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s3Img3}
          link={"summer looks"}
          linkTo="/"
        />
        <ProductComponent
        useless=""
          image={images.s3Img4}
          link={"new shoes"}
          linkTo="/shoes-collections"
        />
      </div>
      <div className="app__product-info">
        <Link to="">
          shop new collection 2-3x weekly <span>shop our latest release</span>
        </Link>
      </div>
      <div className="app__product">
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s4Img1}
          link={"shop basics"}
          linkTo="/"
        />
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s4Img2}
          link={"du exlusives"}
          linkTo="/"
        />
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s4Img3}
          link={"shop accessories"}
          linkTo="/"
        />
        <ProductComponent
        useless="this link doesn't work..."
          image={images.s4Img4}
          link={"shop sunglasses"}
          linkTo="/"
        />
      </div>
      <div className="app__product-info">
        <Link to="">
          BUY HER A GIFT CARD <span>shop gift cards</span>
        </Link>
      </div>
    </>
  );
};

export default Products;
