import "./Shopping.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useStickyBox } from "react-sticky-box";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { setShowCart } from "../../store/cartSlice";
import { selectCartItem } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { useMediaPredicate } from "react-media-hook";

const Shopping = ({
  items,
  selectColor,
  selectedColor,
  selectedSize,
  selectSize,
}) => {
  const list = useSelector(selectCartItem)

  const dispatch = useDispatch();

  const addToCart = (cart) => {
    dispatch(setShowCart(cart));
    dispatch(
      cartActions.addToCart({
        name: items.description.productName,
        id: items.id,
        price: items.description.productPrice,
        imgUrl: items.images[0].original,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };
  // Product description sticky
  const stickyRef = useStickyBox({ offsetTop: 50, offsetBottom: 20 });

  // User check size and color
  const handleColor = (e) => {
    selectColor(e.currentTarget.value);
  };

  const handleSize = (e) => {
    selectSize(e.currentTarget.value);
  };

  const responsiveMax768 = useMediaPredicate("(max-width: 768px)");

  return (
    <div className="app__shopping">
      <div>
        <div
          className="app__shopping-items"
          style={{ alignItems: "flex-start" }}
        >
          <div className="app__shopping-images">
            <ImageGallery
              items={items.images}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              showThumbnails={responsiveMax768 ? false : true}
              showBullets={responsiveMax768 ? true : false}
              thumbnailPosition="bottom"
            />
          </div>
          <div className="app__shopping-description" ref={stickyRef}>
            <div className="desc-heading">
              <h1>{items.description.productName}</h1>
              <p>{`$ ${items.description.productPrice}`}</p>
            </div>
            <div className="app__shopping-colors">
              <p>{`Color - ${selectedColor}`}</p>
              <ul className="color">
                {Array.from(
                  { length: items.description.productColor.length },
                  (_, i) => (
                    <li
                      // onClick={getValue}
                      className={
                        items.description.productColor[i].sold ? "disabled" : ""
                      }
                      key={`color${i + 1}`}
                      style={{
                        backgroundColor: `${items.description.productColor[i].color}`,
                      }}
                    >
                      <input
                        // onClick={getValue}
                        className="color-input"
                        disabled={
                          items.description.productColor[i].sold ? true : false
                        }
                        type="radio"
                        id={`color-${i + 1}`}
                        name="color"
                        value={
                          items.description.productColor[i].productColorInfo
                        }
                        onChange={handleColor}
                        checked={
                          selectedColor ===
                          items.description.productColor[i].productColorInfo
                        }
                      />
                      <label htmlFor={`color-${i + 1}`}>{""}</label>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="app__shopping-sizes">
              <p>size</p>
              <ul className="size">
                {Array.from(
                  { length: items.description.productSize.length },
                  (_, i) => (
                    <li
                      key={i}
                      className={
                        items.description.productSize[i].sold ? "disabled" : ""
                      }
                    >
                      {items.description.productSize[i].size}
                      <input
                        disabled={
                          items.description.productSize[i].sold ? true : false
                        }
                        className="size-input"
                        type="radio"
                        id={`size${i + 1}`}
                        name="size"
                        value={items.description.productSize[i].size}
                        onChange={handleSize}
                        checked={
                          selectedSize === items.description.productSize[i].size
                        }
                      />
                      <label htmlFor={`size${i + 1}`}></label>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="app__shopping-ready">
              <div
                className="ready-sign"
                style={{
                  backgroundColor: items.description.productReady[1],
                }}
              ></div>
              <p>{items.description.productReady[0]}</p>
            </div>
            <div className="app__shopping-addBtn">
              <button onClick={() => addToCart(true)}>add to cart</button>
            </div>
            <div className="app__shopping-info">
              <p>{items.description.productInfo}</p>
              <ul>
                {items.description.productInfo2.map((info, i) => (
                  <li key={i}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
