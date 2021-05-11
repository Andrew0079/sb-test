import { SET_USER_NAME, SET_TOKEN, SET_LAST_LOGIN} from "./actionTypes";

export const set_Username = (username) => {
  return { type: SET_USER_NAME, payload: username };
};

export const setToken = (token) => {
  return { type: SET_TOKEN, payload: token };
};

export const setLastLogin = (lastLogin) => {
  return { type: SET_LAST_LOGIN, payload: lastLogin };
};
