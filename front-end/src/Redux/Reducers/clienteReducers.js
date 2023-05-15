import { FETCH_CLIENTE } from "../ActionTypes/clienteAction";

const initialState = {
  clienteFetch: [],
};

const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTE:
      console.log(action.payload + "ciao");
      return {
        ...state,
        clienteFetch: action.payload,
      };

    default:
      return state;
  }
};

export default clienteReducer;
