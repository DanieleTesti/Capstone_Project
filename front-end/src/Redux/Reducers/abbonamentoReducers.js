import {
  ALL_ABBONAMENTI,
  FIND_ABB_BY_ID,
} from "../ActionTypes/abbonamentoAction";

const initialState = {
  abbonamenti: [],
  clienteAbb: [],
};

const abbonamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ABBONAMENTI:
      return {
        ...state,
        abbonamenti: action.payload,
      };
    case FIND_ABB_BY_ID:
      return {
        ...state,
        clienteAbb: action.payload,
      };
    default:
      return state;
  }
};

export default abbonamentoReducer;
