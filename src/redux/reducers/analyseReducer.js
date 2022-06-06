import { SETANALYSE } from "../actions/types";

const analyseReducer = (state = "", action) => {
  switch (action.type) {
    case SETANALYSE:
      return action.payload;

    default:
      return state;
  }
};

export default analyseReducer;
