import {
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_SINGLE_PRODUCTS,
  PATCH_PRODUCTS,
  POST_PRODUCTS,
} from "./action";

const initState = {
  products: [],
  loading: false,
  error: false,
};

export const productReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...store, products: payload, loading: false, error: false  };
    // case GET_SINGLE_PRODUCTS:
    //   return { ...store, products: payload, loading: false, error: false };
    // case POST_PRODUCTS:
    // case PATCH_PRODUCTS:
    // case DELETE_PRODUCTS:
    case GET_PRODUCTS_LOADING:
      return { ...store, loading: true };
    case GET_PRODUCTS_ERROR:
      return { ...store, error: true };
    default:
      return { ...store };
  }
};



