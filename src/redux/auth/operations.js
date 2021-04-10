import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  currentUserRequest,
  currentUserSuccess,
  currentUserError,
} from "./actions";

axios.defaults.baseURL = `https://goit-phonebook-api.herokuapp.com`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("/users/signup", credentials)
    .then(({ data }) => {
      console.log(data);
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(registerError(error));
    });
};

const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch((error) => dispatch(loginError(error)));
};

const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

const currentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(currentUserRequest());
  axios
    .get("/users/current")
    .then(({ data }) => {
      dispatch(currentUserSuccess(data));
    })
    .catch((error) => dispatch(currentUserError(error)));
};

export default { register, login, logout, currentUser };
