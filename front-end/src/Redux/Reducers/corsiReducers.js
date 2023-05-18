import {
  ADD_CORSO,
  CORSI_ALL,
  FIND_CORSO_BY_ID,
} from "../ActionTypes/corsiAction";

const initialState = {
  AllCorsi: [],
  findCorsoById: {},
  addCorso: {},
};

const corsiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORSI_ALL:
      return {
        ...state,
        AllCorsi: action.payload,
      };

    case FIND_CORSO_BY_ID:
      return {
        ...state,
        findCorsoById: action.payload,
      };

    case ADD_CORSO:
      return {
        ...state,
        addCorso: action.payload,
      };

    default:
      return state;
  }
};

export default corsiReducer;
