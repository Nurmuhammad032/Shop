import "./Category.scss";
import CategoryComponent from "./CategoryComponent";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { shoes } from "../../components/ShopData/ShopData";

const Category = () => {
  console.log(shoes);
  return (
    <div className="gap-both app__category">
      <Link to={`/shoes/${shoes[0].id}`}>one go</Link>
      <Link to={`/shoes/${shoes[1].id}`}>two go</Link>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img1} text={"Tops"} />
      </div>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img2} text={"Bottoms"} />
      </div>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img3} text={"Dresses"} />
      </div>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img4} text={"New arrivals"} />
      </div>
    </div>
  );
};

export default Category;
