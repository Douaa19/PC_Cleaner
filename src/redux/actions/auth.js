import { LOGIN, SETID } from "./types";

export const loginAction = () => {
  return {
    type: LOGIN,
  };
};

export const setIdAction = (id) => {
  return {
    type: SETID,
    payload: id,
  };
};
