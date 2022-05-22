import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const GET_PRODUCT_FROM_CART = "GET_PRODUCT_FROM_CART";

export const addToCart = () => ({ type: ADD_TO_CART });
export const removeFromCart = () => ({ type: REMOVE_FROM_CART });

export const adjustQty = (productID, value) => ({
  type: ADJUST_QTY,
  payload: { id: productID, qty: value },
});
export const getProductFromCart = (product) => ({
  type: GET_PRODUCT_FROM_CART,
  payload: product,
});

export const addDataToCart = (id) =>  (dispatch) => {
  axios
    .post("https://secret-castle-10519.herokuapp.com/cart", {
      product_id: id,
    })
    .then(() => {
      dispatch(addToCart());
      dispatch(getDataFromCart());
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updateToCart = (id,qty) =>  (dispatch) => {
  axios
    .patch(`https://secret-castle-10519.herokuapp.com/cart/${id}`, {
      qty,
    })
    .then(() => {
      dispatch(addToCart());
      dispatch(getDataFromCart());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteDataToCart = (id) => (dispatch) => {
  axios
    .delete(`https://secret-castle-10519.herokuapp.com/cart/${id}`)
    .then((res) => {
      dispatch(removeFromCart());
      dispatch(getDataFromCart());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDataFromCart = () => async (dispatch) => {
  try {
    // dispatch(getProductsLoading());
    const { data } = await axios.get("https://secret-castle-10519.herokuapp.com/cart");
    dispatch(getProductFromCart(data));
  } catch (error) {
    console.log(error);
  }
};
