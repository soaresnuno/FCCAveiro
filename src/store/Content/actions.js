import axios from "axios";
export const GET_DATA = "GET_DATA";
const API_URL = "http://admin.freecodecampaveiro.org/wp-json/acf/v3/pages";
export function getAllData() {
  return async function(dispatch) {
    const res = await axios(`${API_URL}`);
    const data = await res.data[0].acf;
    return dispatch({
      type: "GET_DATA",
      data
    });
  };
}
