import {
  ADD_CORSO_TO_CLIENTE,
  ALL_USER,
  CLIENTE,
  FETCH_CLIENTE,
} from "../ActionTypes/clienteAction";

const initialState = {
  clienteFetch: {},
  allUsers: [],
  cliente: {},
  iscrizioneCorso: {},
};

const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTE:
      return {
        ...state,
        clienteFetch: action.payload,
      };
    case CLIENTE:
      return {
        ...state,
        cliente: action.payload,
      };

    case ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };

    case ADD_CORSO_TO_CLIENTE:
      return {
        ...state,
        iscrizioneCorso: action.payload,
      };

    default:
      return state;
  }
};

export default clienteReducer;
