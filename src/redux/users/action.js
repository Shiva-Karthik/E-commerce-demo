import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });
export const loginUserLoading = () => ({ type: LOGIN_USER });
export const loginUserError = () => ({ type: LOGIN_USER });

export const loginUserData = (details) => (dispatch) => {
  axios.post("https://secret-castle-10519.herokuapp.com/login", details).then((res) => {
    localStorage.setItem("user", JSON.stringify(res.data.user))
    dispatch(loginUser(res.data.user))
    alert("Login Successfull");
  }).catch((err) => {
      alert("Incorrect Email or Password")
  });
};

// axios
//       .post("http://localhost:5000/cart", e)
//       .then(() => {
//         dispatch(addToCart());
//         dispatch(getDataFromCart());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
