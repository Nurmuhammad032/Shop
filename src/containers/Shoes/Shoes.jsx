import { useEffect, useState } from "react";
import "./Shoes.scss";
import Shopping from "../../components/Shopping/Shopping";
import { shoes } from "../../components/ShopData/ShopData";

const Shoes = () => {
  const [colorValue, setColorValue] = useState(10);
  return (
    <div>
      <Shopping
        shoesImg={shoes[0].images}
        heading={shoes[1].description.productName}
        price={shoes[1].description.productPrice}
        colorInfo={shoes[1].description.productColorInfo}
        colorLength={shoes[1].description.productColor.length}
        color={shoes[1].description.productColor}
        select={setColorValue}
        selected={colorValue}
        sizesLength={shoes[1].description.productSize.length}
        size={shoes[1].description.productSize}
      />
    </div>
  );
};

export default Shoes;
