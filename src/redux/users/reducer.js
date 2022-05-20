import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  REGISTER_USER,
} from "./action";
let users = JSON.parse(localStorage.getItem("user")) || {users:{}};
const initState = {
  users,
  loading: false,
  error: false,
};

export const userReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...store, users: payload };
    case REGISTER_USER:
    case LOGIN_USER_LOADING:
    case LOGIN_USER_ERROR:
      return { ...store, loading: true };
    default:
      return { ...store };
  }
};
