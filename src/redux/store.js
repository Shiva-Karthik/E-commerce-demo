import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";
import { userReducer } from "./users/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());



