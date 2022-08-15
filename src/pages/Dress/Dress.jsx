import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shopping from "../../components/Shopping/Shopping";
import { images } from "../../constants";
import ShopComponent from "../../components/ShopComponent/ShopComponent";

const Dress = ({ data }) => {
  const { id } = useParams();
  let colors;
  let sizes;
  const findUrl = data.filter((dress) => {
    if (dress.id === id) {
      colors = dress.description.productColor;
      sizes = dress.description.productSize;
      return true;
    }
  });

  let firstAbledSize;
  let firstAbledColor;

  for (let i = 0; i < sizes.length; i++) {
    if (!sizes[i].sold) {
      firstAbledSize = sizes[i].size;
      break;
    }
  }
  for (let i = 0; i < colors.length; i++) {
    if (!colors[i].sold) {
      firstAbledColor = colors[i].productColorInfo;
      break;
    }
  }

  console.log(firstAbledSize);

  const [colorValue, setColorValue] = useState(null);
  const [sizeValue, setSizeValue] = useState(null);

  useEffect(() => {
    setColorValue(firstAbledColor);
    setSizeValue(firstAbledSize);
  }, [firstAbledColor, firstAbledSize]);

  return (
    <>
      {findUrl &&
        findUrl.map((dress, i) => (
          <div key={i}>
            <Shopping
              items={dress}
              selectColor={setColorValue}
              selectedColor={colorValue}
              selectSize={setSizeValue}
              selectedSize={sizeValue}
            />
            <div className="liking-products">
              <p className="liking-product-header">You may also like</p>
              <div className="app__shop gap-both">
                <ShopComponent
                  image={dress.suggestionImg.view_1}
                  hoverImg={dress.suggestionImg.hoverImg_1}
                  info={dress.suggestionInfo.first}
                  price={`$ ${dress.suggestionPrice.first}.00`}
                  link={`/dresses-collections/${dress.suggestionLink.first}`}
                />
                <ShopComponent
                  image={dress.suggestionImg.view_2}
                  hoverImg={dress.suggestionImg.hoverImg_2}
                  info={dress.suggestionInfo.second}
                  price={`$ ${dress.suggestionPrice.second}.00`}
                  link={`/dresses-collections/${dress.suggestionLink.second}`}
                />
                <ShopComponent
                  image={dress.suggestionImg.view_3}
                  hoverImg={dress.suggestionImg.hoverImg_3}
                  info={dress.suggestionInfo.third}
                  price={`$ ${dress.suggestionPrice.third}.00`}
                  link={`/dresses-collections/${dress.suggestionLink.third}`}
                />
                <ShopComponent
                  image={dress.suggestionImg.view_4}
                  hoverImg={dress.suggestionImg.hoverImg_4}
                  info={dress.suggestionInfo.fourth}
                  price={`$ ${dress.suggestionPrice.fourth}.00`}
                  link={`/dresses-collections/${dress.suggestionLink.fourth}`}
                />
                <ShopComponent
                  image={dress.suggestionImg.view_5}
                  hoverImg={dress.suggestionImg.hoverImg_5}
                  info={dress.suggestionInfo.fifth}
                  price={`$ ${dress.suggestionPrice.fifth}.00`}
                  link={`/dresses-collections/${dress.suggestionLink.fifth}`}
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

export default Dress;
