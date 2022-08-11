import { useState } from "react";
import "./Shoes.scss";
import Shopping from "../../components/Shopping/Shopping";
import { shoes } from "../../components/ShopData/ShopData";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import ShopComponent from "../../components/ShopComponent";

const colors = shoes[0].shoes1.description.productColor;
const sizes = shoes[0].shoes1.description.productSize;
const shoesItems = shoes[0].shoes1;

const Shoes = () => {
  let firstAbledSize;
  let fistAbledColor;

  for (let i = 0; i < sizes.length; i++) {
    if (!sizes[i].sold) {
      firstAbledSize = sizes[i].size;
      break;
    }
  }
  for (let i = 0; i < colors.length; i++) {
    if (!colors[i].sold) {
      fistAbledColor = colors[i].productColorInfo;
      break;
    }
  }

  const [colorValue, setColorValue] = useState(fistAbledColor);
  const [sizeValue, setSizeValue] = useState(firstAbledSize);
  return (
    <div>
      <Shopping
        items={shoesItems}
        selectColor={setColorValue}
        selectedColor={colorValue}
        selectSize={setSizeValue}
        selectedSize={Number(sizeValue)}
      />

      <div className="liking-products">
        <p className="liking-product-header">You may also like</p>
        <div className="app__shop gap-both">
          <ShopComponent
            image={images.imgView1}
            hoverImg={images.imgHover1}
            info={"Charleton south carolina script large tote bag"}
            price={`$ 16.00`}
          />
          <ShopComponent
            image={images.imgView2}
            hoverImg={images.imgHover2}
            info={"Pamela Star Sneakers"}
            price={`$ 78.00`}
          />
          <ShopComponent
            image={images.imgView3}
            hoverImg={images.imgHover3}
            info={"Charleston South Carolina Pullover"}
            price={`$ 48.00`}
          />
          <ShopComponent
            image={images.imgView4}
            hoverImg={images.imgHover4}
            info={"Serena High Top Star Sneakers"}
            price={`$ 92.00`}
          />
          <ShopComponent
            image={images.imgView5}
            hoverImg={images.imgHover5}
            info={"Promise Star Sneakers"}
            price={`$ 78.00`}
          />
        </div>
      </div>
    </div>
  );
};

export default Shoes;
