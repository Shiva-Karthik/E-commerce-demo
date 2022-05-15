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

export const addDataToCart = (e) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/cart/${e.id}`);
    await axios.patch(`http://localhost:5000/cart/${e.id}`, {
      qty: data.qty + 1,
    });
  } catch (error) {
    e.qty = 1;
    axios
      .post("http://localhost:5000/cart", e)
      .then(() => {
        dispatch(addToCart());
        dispatch(getDataFromCart());
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return;
};
export const handleQty = (count, qty, id) => async (dispatch) => {
  if (qty === count) {
    return;
  }
  try {
    await axios.patch(`http://localhost:5000/cart/${id}`, {
      qty: count,
    });
    dispatch(getDataFromCart());
  } catch (error) {}
};
export const deleteDataToCart = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/cart/${id}`)
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
    const { data } = await axios.get("http://localhost:5000/cart");
    // console.log('data:', data)
    dispatch(getProductFromCart(data));
  } catch (error) {
    console.log(error);
  }
};
