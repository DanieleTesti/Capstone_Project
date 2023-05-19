import { CORSI_ALL } from "../ActionTypes/corsiAction";

const initialState = {
  findCorsoById: {},
  addCorso: {},
  AllCorsi: [], // Inizialmente vuoto
};

const corsiReducers = (state = initialState, action) => {
  switch (action.type) {
    case CORSI_ALL:
      return {
        ...state,
        AllCorsi: action.payload, // Assegna i dati dei corsi a AllCorsi
      };
    // Altri casi di gestione delle azioni
    default:
      return state;
  }
};

export default corsiReducers;
