import { CORSI_ALL } from "../ActionTypes/corsiAction";

const initialState = {
  AllCorsi: [],
};

const corsiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORSI_ALL:
      return {
        ...state,
        AllCorsi: action.payload,
      };

    default:
      return state;
  }
};

export default corsiReducer;
