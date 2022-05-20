import { ADD_TO_CART, GET_PRODUCT_FROM_CART, REMOVE_FROM_CART } from "./action";

const initState = {
  cart: [],
};

export const cartReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_FROM_CART:
      return { ...store, cart: payload };
    case ADD_TO_CART:
      // const itemIndex = store.cart.findIndex((item) => item.product_id.id === payload.id);

      return { ...store};
    case REMOVE_FROM_CART:
      return { ...store };
    default:
      return { ...store };
  }
};
