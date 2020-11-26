import React from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";

import { useStyles } from "./styles";

import CardInstructions from "./components/CardInstructions";
import CardIngredient from "./components/CardIngredient";
import CardImage from "./components/CardImage";

const Details = () => {
  const classes = useStyles();

  const recipe = useSelector(state => state.reducerRecipes.recipe);
  const requestLoading = useSelector(
    state => state.reducerLoading.requestLoading
  );

  return (
    <Box data-testid="boxRecipeDetails" pt={5}>
      <Typography variant="h4" gutterBottom>
        Detalhes
      </Typography>
      {requestLoading && (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress fontSize="32" />
        </Box>
      )}
      {!requestLoading && (
        <>
          <CardImage recipe={recipe} />
          <CardIngredient recipe={recipe} />
          <CardInstructions recipe={recipe} />
        </>
      )}
    </Box>
  );
};

export default Details;
