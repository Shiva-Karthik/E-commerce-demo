// import { axios } from "axios";

// export const GET_PRODUCTS = "GET_PRODUCTS";
// export const GET_SINGLE_PRODUCTS = "GET_SINGLE_PRODUCTS";
// export const POST_PRODUCTS = "POST_PRODUCTS";
// export const PATCH_PRODUCTS = "PATCH_PRODUCTS";
// export const DELETE_PRODUCTS = "DELETE_PRODUCTS";

// export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
// export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

// export const getProducts = (products) => ({
//   type: GET_PRODUCTS,
//   payload: products,
// });
// export const getSingleProducts = (products) => ({
//   type: GET_SINGLE_PRODUCTS,
//   payload: products,
// });
// export const getProductsLoading = () => ({ type: GET_PRODUCTS_LOADING });
// export const getProductsError = () => ({ type: GET_PRODUCTS_ERROR });

// export const getProductsData = () => async (dispatch) => {
//   try {
//     dispatch(getProductsLoading());
//     const { data } = await axios.get("http://localhost:5000/electronics");
//     dispatch(getProducts(data));
//     console.log("act",data);
//   } catch (error) {
//     dispatch(getProductsError(error));
//   }
// };

import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const getProducts = (products) => ({ type: GET_PRODUCTS, payload: products });
export const getProductsLoading = () => ({ type: GET_PRODUCTS_LOADING });
export const getProductsError = () => ({ type: GET_PRODUCTS_ERROR });

export const getProductsData = () => async (dispatch) => {
  try {
    dispatch(getProductsLoading());
    const { data } = await axios.get(
      "http://localhost:5000/electronics"
    );
    // console.log('data:', data)
    dispatch(getProducts(data));
  } catch (error) {
    dispatch(getProductsError(error));
  }
};

// export const getProductsData = () => async (dispatch) => {
//   try {
//     dispatch(getProductsLoading());
//     const { data } = await axios.get("http://localhost:5000/electronics");
//     dispatch(getProducts(data));
//     console.log("act",data);
//   } catch (error) {
//     dispatch(getProductsError(error));
//   }
// };
