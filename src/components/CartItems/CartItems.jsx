import "./CartItems.scss";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../store/cartSlice";
import { setShowCart } from "../../store/cartSlice";
import { selectShowCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { selectTotalQuantityPrice } from "../../store/cartSlice";
import { incrementProduct } from "../../store/cartSlice";
import { removeFromCart } from "../../store/cartSlice";

const CartItems = ({ items, selectedSize, selectedColor }) => {
  const dispatch = useDispatch();
  const showCart = useSelector(selectShowCart);
  const allPrice = useSelector(selectTotalQuantityPrice);

  function lockScroll() {
    const body = document.querySelector("body");
    if (showCart) {
      body.classList.add("lock-scroll");
    } else {
      body.classList.remove("lock-scroll");
    }
  }
  lockScroll();

  const cartItems = useSelector(selectCartItem);

  const hiddenCart = (boolean) => {
    dispatch(setShowCart(boolean));
  };

  const increase = (index) => {
    dispatch(incrementProduct(index));
  };
  const decrease = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <>
      {showCart && (
        <div className="items-bg" onClick={() => hiddenCart(false)}></div>
      )}
      <div className={`app__cart ${showCart ? "showCart" : ""}`}>
        <div className="app__cart-header">
          <p>Cart</p>
          <p onClick={() => hiddenCart(false)}>
            <i className="bi bi-x-lg"></i>
          </p>
        </div>
        <div className="app__cart-container">
          {cartItems.length > 0 ? (
            <>
              <div className="cart-products">
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
                        <div className="cart-price-wrapper">
                          <div className="cart-addBtn">
                            <button onClick={() => decrease(i)}>
                              <i className="bi bi-dash"></i>
                            </button>
                            <span>{cart.quantity}</span>
                            <button onClick={() => increase(i)}>
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                          <div className="prices-wrap">
                            <p>{`$ ${cart.price}`}</p>
                            <p>{`Total: $ ${cart.totalPrice}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="app__cart-footer">
                <div className="total-price">
                  <p>subtotal</p>
                  <p>$ {allPrice}</p>
                </div>
                <div>
                  <p className="checkout-info">
                    Shipping, taxes, and discount codes calculated at checkout.
                  </p>
                </div>
                <div>
                  <a href="" className="link-toCart">
                    cart
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div>
              <p className="empty-cart">Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItems;
