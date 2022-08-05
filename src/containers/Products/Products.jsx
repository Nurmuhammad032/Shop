import ProductComponent from "./ProductComponent";
import { images } from "../../constants";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <div className="app__product">
        <ProductComponent
          image={images.s3Img1}
          link={"Shop dresses + rompers"}
        />
        <ProductComponent image={images.s3Img2} link={"shop summer tops"} />
        <ProductComponent image={images.s3Img3} link={"summer looks"} />
        <ProductComponent image={images.s3Img4} link={"new shoes"} />
      </div>
      <div className="app__product-info">
        <a href="#">
          shop new collection 2-3x weekly <span>shop our latest release</span>
        </a>
      </div>
      <div className="app__product">
        <ProductComponent image={images.s4Img1} link={"shop basics"} />
        <ProductComponent image={images.s4Img2} link={"du exlusives"} />
        <ProductComponent image={images.s4Img3} link={"shop accessories"} />
        <ProductComponent image={images.s4Img4} link={"shop sunglasses"} />
      </div>
    </>
  );
};

export default Products;
