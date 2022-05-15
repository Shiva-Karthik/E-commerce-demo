import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/reducer";
import { productReducer } from "./products/reducer";
import { userReducer } from "./users/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
  cart: cartReducer
});

export const store = createStore( rootReducer,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));




