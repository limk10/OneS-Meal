import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
  CircularProgress
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import api from "~/services/api";

import actionsRecipes from "~/actions/recipes";
import actionsLoading from "~/actions/loading";

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { recipes } = useSelector(state => state.reducerRecipes);
  const { requestLoading } = useSelector(state => state.reducerLoading);

  const getMealsById = async (e, idMeal) => {
    e.preventDefault();
    try {
      dispatch(actionsLoading.requestLoading(true));
      const { data } = await api.get(`lookup.php?i=${idMeal}`);
      const { meals } = data;

      let [meal] = meals;

      const arrIngredients = await formatIngredients(meal);

      dispatch(
        actionsRecipes.requestRecipeById({
          ...meal,
          ingredients: arrIngredients
        })
      );

      history.push("/recipes/details");
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(actionsLoading.requestLoading(false));
    }
  };

  const formatIngredients = meal => {
    let ingredientsMeasure = [];

    Object.keys(meal).length &&
      Object.keys(meal).map(item => {
        if (item.includes("strIngredient") && meal[item]) {
          const indexIngredient = item.split("strIngredient")[1];
          const strMeasure = `strMeasure${indexIngredient}`;
          ingredientsMeasure.push({
            ingredient: meal[item],
            measure: meal[strMeasure]
          });
        }
      });

    return ingredientsMeasure;
  };

  return (
    <Box pt={5}>
      <Typography variant="h4" gutterBottom>
        Receitas
      </Typography>
      {requestLoading && (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress fontSize="32" />
        </Box>
      )}
      {!requestLoading && (
        <Grid container>
          {recipes?.collection?.map(({ idMeal, strMeal, strMealThumb }) => (
            <Grid item key={idMeal} xs={12} sm={4}>
              <Card
                data-testid="listCardRecipes"
                onClick={e => getMealsById(e, idMeal)}
                className={classes.root}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={strMealThumb}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      className={classes.strMeal}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {strMeal}
                    </Typography>
                    <div className={classes.borderPrimaryBottom}></div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Categoria: </b>
                      {recipes.categoryName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default List;
