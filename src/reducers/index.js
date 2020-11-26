import { combineReducers } from "redux";

import reducerLoading from "~/reducers/loading";
import reducerCategories from "~/reducers/categories";
import reducerRecipes from "~/reducers/recipes";

const reducers = combineReducers({
  reducerLoading,
  reducerCategories,
  reducerRecipes
});

export default reducers;
