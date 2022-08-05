import { motion } from "framer-motion";

const CategoryComponent = ({ image, text }) => {
  return (
    <a href="#" className="category-comp">
        <img className="category-img" src={image} alt="categoryImg" />
        <p className="category-text">{text}</p>
    </a>
  );
};

export default CategoryComponent;
