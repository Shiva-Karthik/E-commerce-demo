export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const loginUser = (user) => ({type: LOGIN_USER, payload: user});
export const loginUserLoading = () => ({type: LOGIN_USER});
export const loginUserError = () => ({type: LOGIN_USER});
