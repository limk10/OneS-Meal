import actionsTypes from "./actionsTypes";

export default {
  requestRecipes: value => {
    return {
      type: actionsTypes.MEALS,
      payload: value
    };
  }
};
