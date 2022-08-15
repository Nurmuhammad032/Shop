import "./Category.scss";
import CategoryComponent from "./CategoryComponent";
import { images } from "../../constants";

const Category = () => {
  return (
    <div className="gap-both app__category">
      <div className="category-wrap">
        <p className="useless-link">this link doesn't work...</p>
        <CategoryComponent image={images.s2Img1} text={"Tops"} link='' />
      </div>
      <div className="category-wrap">
      <p className="useless-link">this link doesn't work...</p>
        <CategoryComponent image={images.s2Img2} text={"Bottoms"} link='' />
      </div>
      <div className="category-wrap">
        <CategoryComponent
          image={images.s2Img3}
          text={"Dresses"}
          link="/dresses-collections"
        />
      </div>
      <div className="category-wrap">
      <p className="useless-link">this link doesn't work...</p>
        <CategoryComponent image={images.s2Img4} text={"New arrivals"} link='' />
      </div>
    </div>
  );
};

export default Category;
