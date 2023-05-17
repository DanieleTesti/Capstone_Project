import {
  ADD_INSEGNANTE,
  ALL_INSEGNANTI,
  FIND_INSEGNANTE,
} from "../ActionTypes/insegnantiAction";

const initialState = {
  insegnanti: [],
  findInsegnanteById: {},
  allInsegnanti: [],
};

const insegnantiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INSEGNANTE:
      return {
        ...state,
        insegnanti: action.payload,
      };
    case FIND_INSEGNANTE:
      return {
        ...state,
        insegnanti: action.payload,
      };
    case ALL_INSEGNANTI:
      return {
        ...state,
        allInsegnanti: action.payload,
      };

    default:
      return state;
  }
};

export default insegnantiReducer;
