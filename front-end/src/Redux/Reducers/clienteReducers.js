import { ALL_USER, FETCH_CLIENTE } from "../ActionTypes/clienteAction";

const initialState = {
  clienteFetch: {},
  allUsers: [],
};

const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTE:
      return {
        ...state,
        clienteFetch: action.payload,
      };

    case ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return state;
  }
};

export default clienteReducer;
