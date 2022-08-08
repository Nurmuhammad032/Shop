import "./Shopping.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect } from "react";

const Shopping = ({
  shoesImg,
  heading,
  price,
  colorInfo,
  colorLength,
  select,
  selected,
  color,
  sizesLength,
  size,
}) => {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };

  return (
    <div className="app__shopping">
      <div className="app__shopping-items">
        <div className="app__shopping-images">
          <ImageGallery
            items={shoesImg}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            thumbnailPosition="bottom"
          />
        </div>
        <div className="app__shopping-description">
          <div className="desc-heading">
            <h1>{heading}</h1>
            <p>{price}</p>
          </div>
          <div className="app__shopping-colors">
            <p>{colorInfo}</p>
            <ul className="color">
              {Array.from({ length: colorLength }, (_, i) => (
                <li key={i} style={{ backgroundColor: `${color[i]}` }}>
                  <input
                    type="radio"
                    id={`num${i + 1}`}
                    name="color"
                    value={i + 1}
                    onChange={handleChange}
                    checked={selected === i + 1}
                  />
                  <label htmlFor={`num${i + 1}`}>{""}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="app__shopping-sizes">
            <p>size</p>
            <ul className="size">
              {Array.from({ length: sizesLength }, (_, i) => (
                <li key={i}>
                  {size[i]}
                  <input
                    type="radio"
                    id={`num${i + 1}`}
                    name="color"
                    value={i + 1}
                    onChange={handleChange}
                    checked={selected === i + 1}
                  />
                  <label htmlFor={`num${i + 1}`}></label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
