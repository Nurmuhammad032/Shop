import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  imgUrl: null,
  totalQuantity: 0,
  totalQuantityPrice: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      // to check if item already available
      const exisitProduct = state.itemList.find((item) => {
        if (
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
        ) {
          return true;
        }
      });

      if (exisitProduct) {
        exisitProduct.quantity++;
        exisitProduct.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          imgUrl: newItem.imgUrl,
          totalPrice: newItem.price,
          name: newItem.name,
          size: newItem.size,
          color: newItem.color,
        });
      }
      // const allPrice = exisitProduct.totalPrice += newItem.price;
      state.totalQuantity++;
      state.totalQuantityPrice += newItem.price;
    },
    removeFromCart() {},
    setShowCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export const { setShowCart } = cartSlice.actions;

export const selectCartItem = (state) => state.cart.itemList;
export const selectShowCart = (state) => state.cart.showCart;
export const selectTotalProduct = (state) => state.cart.totalQuantity;
export const selectTotalQuantityPrice = (state) =>
  state.cart.totalQuantityPrice;

export default cartSlice;
