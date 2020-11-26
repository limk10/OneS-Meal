import actionsTypes from "./actionsTypes";

export default {
  requestRecipes: value => {
    return {
      type: actionsTypes.RECPIES,
      payload: value
    };
  },
  requestRecipeById: value => {
    return {
      type: actionsTypes.RECPIE_BY_ID,
      payload: value
    };
  }
};
