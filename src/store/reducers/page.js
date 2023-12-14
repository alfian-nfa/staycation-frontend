import { FETCH_PAGE } from "../types";

const initialState = {};

// Provide a name (pageReducer) to the function
export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
