import { SETANALYSE } from "./types";

export const setAnalyseAction = (result) => {
  return {
    type: SETANALYSE,
    payload: result,
  };
};
