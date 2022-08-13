import ProductComponent from "./ProductComponent";
import { images } from "../../constants";
import "./Products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
    <Link to='/shoes'>jgldskf</Link>
      <div className="app__product">
        <ProductComponent
          image={images.s3Img1}
          link={"Shop dresses + rompers"}
        />
        <ProductComponent
          image={images.s3Img2}
          link={"shop summer tops"}
          linkTo="/shoes"
        />
        <ProductComponent
          image={images.s3Img3}
          link={"summer looks"}
          linkTo="/shoes"
        />
        <ProductComponent
          image={images.s3Img4}
          link={"new shoes"}
          linkTo="/shoes-collections"
        />
      </div>
      <div className="app__product-info">
        <a href="#">
          shop new collection 2-3x weekly <span>shop our latest release</span>
        </a>
      </div>
      <div className="app__product">
        <ProductComponent
          image={images.s4Img1}
          link={"shop basics"}
          linkTo="/shoes"
        />
        <ProductComponent
          image={images.s4Img2}
          link={"du exlusives"}
          linkTo="/shoes"
        />
        <ProductComponent
          image={images.s4Img3}
          link={"shop accessories"}
          linkTo="/shoes"
        />
        <ProductComponent
          image={images.s4Img4}
          link={"shop sunglasses"}
          linkTo="/shoes"
        />
      </div>
      <div className="app__product-info">
        <a href="#">
          BUY HER A GIFT CARD <span>shop gift cards</span>
        </a>
      </div>
    </>
  );
};

export default Products;
