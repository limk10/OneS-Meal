import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.MEALS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default reducers;
