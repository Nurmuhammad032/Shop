import { Link } from "react-router-dom"

const CategoryComponent = ({ image, text, link }) => {

  return (
    <Link to={link} className="category-comp">
        <img className="category-img" src={image} alt="categoryImg" />
        <p className="category-text">{text}</p>
    </Link>
  );
};

export default CategoryComponent;
