import {
  SET_USER_NAME,
  SET_TOKEN,
  SET_LAST_LOGIN
} from "./actionTypes";

const initialState = {
  user_name: null,
  token: null,
  lastLogin: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        user_name: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_LAST_LOGIN:
      return {
        ...state,
        lastLogin: action.payload,
      };
    default:
      return state;
  }
};
