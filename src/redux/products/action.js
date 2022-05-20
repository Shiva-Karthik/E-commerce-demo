import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SINGLE_PRODUCTS = "GET_SINGLE_PRODUCTS";
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const getProducts = (products) => ({ type: GET_PRODUCTS, payload: products });
export const getSingleProducts = (products) => ({ type: GET_SINGLE_PRODUCTS, payload: products });
export const getProductsLoading = () => ({ type: GET_PRODUCTS_LOADING });
export const getProductsError = () => ({ type: GET_PRODUCTS_ERROR });


export const getProductsData = () => async (dispatch) => {
  try {
    dispatch(getProductsLoading());
    const { data } = await axios.get(
      "https://secret-castle-10519.herokuapp.com/products"
    );
    // console.log('data:', data)
    dispatch(getProducts(data));
  } catch (error) {
    dispatch(getProductsError(error));
  }
};
export const getSingleProductsData = (id) => async (dispatch) => {
  try {
    dispatch(getProductsLoading());
    const { data } = await axios.get(
      `https://secret-castle-10519.herokuapp.com/products/${id}`
    );
    // console.log('data:', data)
    dispatch(getSingleProducts(data));
  } catch (error) {
    dispatch(getProductsError(error));
  }
};
