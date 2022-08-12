import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Shoes.scss";
import Shopping from "../../components/Shopping/Shopping";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import ShopComponent from "../../components/ShopComponent";

const Shoes = ({ data }) => {
  // console.log(data);
  const { id } = useParams();
  let colors;
  let sizes;
  const findUrl = data.filter((shoes, index) => {
    if (shoes.id == id) {
      colors = shoes.description.productColor;
      sizes = shoes.description.productSize;
      return true;
    }
  });
  // const shoesItems = shoes[0];

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

  console.log(`${images.imgView_1_1}_${1}_1`);

  const [colorValue, setColorValue] = useState(fistAbledColor);
  const [sizeValue, setSizeValue] = useState(firstAbledSize);
  return (
    <>
      {findUrl &&
        findUrl.map((shoes, i) => (
          <div key={i}>
            <Shopping
              items={shoes}
              selectColor={setColorValue}
              selectedColor={colorValue}
              selectSize={setSizeValue}
              selectedSize={Number(sizeValue)}
            />
            <div className="liking-products">
              <p className="liking-product-header">You may also like</p>
              <div className="app__shop gap-both">
                <ShopComponent
                  image={shoes.suggestionImg.view_1}
                  hoverImg={shoes.suggestionImg.hoverImg_1}
                  info={shoes.suggestionInfo.first}
                  price={`$ ${shoes.suggestionPrice.first}.00`}
                />
                <ShopComponent
                  image={shoes.suggestionImg.view_2}
                  hoverImg={shoes.suggestionImg.hoverImg_2}
                  info={shoes.suggestionInfo.second}
                  price={`$ ${shoes.suggestionPrice.second}.00`}
                />
                <ShopComponent
                  image={shoes.suggestionImg.view_3}
                  hoverImg={shoes.suggestionImg.hoverImg_3}
                  info={shoes.suggestionInfo.third}
                  price={`$ ${shoes.suggestionPrice.third}.00`}
                />
                <ShopComponent
                  image={shoes.suggestionImg.view_4}
                  hoverImg={shoes.suggestionImg.hoverImg_4}
                  info={shoes.suggestionInfo.fourth}
                  price={`$ ${shoes.suggestionPrice.fourth}.00`}
                />
                <ShopComponent
                  image={shoes.suggestionImg.view_5}
                  hoverImg={shoes.suggestionImg.hoverImg_5}
                  info={shoes.suggestionInfo.fifth}
                  price={`$ ${shoes.suggestionPrice.fifth}.00`}
                />
              </div>
            </div>
            <div className="service-container">
              <div>
                <img src={images.location} alt="ServiceImg" />
              </div>
              <div>
                <img src={images.shipping} alt="ServiceImg" />
              </div>
              <div>
                <img src={images.pickUp} alt="ServiceImg" />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Shoes;
