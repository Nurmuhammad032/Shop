import { useEffect, useState } from "react";
import "./Shoes.scss";
import Shopping from "../../components/Shopping/Shopping";
import { shoes } from "../../components/ShopData/ShopData";


const colors = shoes[0].shoes1.description.productColor;
const sizes = shoes[0].shoes1.description.productSize;
const shoesItems = shoes[0].shoes1

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
    </div>
  );
};

export default Shoes;
