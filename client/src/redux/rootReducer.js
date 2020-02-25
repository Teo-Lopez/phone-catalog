import { UPDATE_PHONES, GET_ONE_PHONE } from "../js/constants/actionTypes";

const initialState = {
  phones: [],
  phone: null,
  message: "",
  ready: false
};

function rootReducer(state = initialState, action) {
  let ready;
  switch (action.type) {
    case UPDATE_PHONES:
      ready = action.payload.length > 0 ? true : false;
      return { ...state, phones: action.payload, ready };
    case GET_ONE_PHONE:
      return { ...state, phone: action.payload && action.payload[0] };
    default:
      return state;
  }
}

export default rootReducer;
