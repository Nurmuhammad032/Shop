import "./CartItems.scss";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../store/cartSlice";
import { setShowCart } from "../../store/cartSlice";
import { selectShowCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = () => {
  const dispatch = useDispatch()
  const showCart = useSelector(selectShowCart)

  const cartItems = useSelector(selectCartItem);

  const hiddenCart = (boolean) => {
    dispatch(setShowCart(boolean))
  }

  return (
    <div className={`app__cart ${showCart ? 'showCart' : ''}`}>
      <div className="app__cart-header">
        <p>Cart</p>
        <p onClick={() => hiddenCart(false)}>
          <i className="bi bi-x-lg"></i>
        </p>
      </div>
      {cartItems.map((cart, i) => (
        <div className="app__cartItems" key={i}>
          <div className="app__cart-photo">
            <img src={cart.imgUrl} alt="cartImg" />
          </div>
          <div className="app__cart-info">
            <div className="cart-details">
              <div>
                <p className="cart-heading">{cart.name}</p>
                <div className="product-variants">
                  <p>
                    Color: <span>{cart.color}</span>
                  </p>
                  <p>
                    Size: <span>{cart.size}</span>
                  </p>
                </div>
              </div>
              <div className="cart-price">
                <p>{`$ ${cart.price}`}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
