import actionsTypes from "./actionsTypes";

export default {
  requestCategories: value => {
    return {
      type: actionsTypes.CATEGORIES,
      payload: value
    };
  }
};
