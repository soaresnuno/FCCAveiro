import { GET_DATA } from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_DATA:
      console.log(action);
      return {
        ...state,
        content: action.data
      };
    default:
      return state;
  }
}
