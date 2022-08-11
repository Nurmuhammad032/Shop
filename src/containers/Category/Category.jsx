import "./Category.scss";
import CategoryComponent from "./CategoryComponent";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="gap-both app__category">
      <Link to={'shoes-2'}>hglfsdhgfjlds</Link>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img1} text={'Tops'} />
      </div>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img2} text={'Bottoms'} />
      </div>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img3} text={'Dresses'} />
      </div>
      <div className="category-wrap">
        <CategoryComponent image={images.s2Img4} text={'New arrivals'} />
      </div>
    </div>
  );
};

export default Category;
