import { CHECKOUT_BOOKING } from "../types";

const initialState = null;

// Mendefinisikan fungsi reducer dengan nama (checkoutReducer)
function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}

export default checkoutReducer; // Melakukan default export dari fungsi yang diberi nama
