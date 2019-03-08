import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// return data upon correct creds
export const login = creds => dispatch => {
  dispatch({ type: LOGIN });
  return axios.post("http://localhost:5000/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};