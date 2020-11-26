import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.RECPIES:
      return { ...state, recipes: action.payload };

    case actionsTypes.RECPIE_BY_ID:
      return { ...state, recipe: action.payload };

    default:
      return state;
  }
};

export default reducers;
