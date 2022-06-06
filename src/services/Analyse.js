import axios from "axios";
const URL = "http://localhost:8080/cleaner/analyse";

// Analyse function
export const Analyse = async () => {
  return await axios.post(`${URL}`).then((result) => {
    if (result) return result;
  });
};
