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

import { useSelector } from "react-redux";
import { useStyles } from "./styles";

const List = () => {
  const classes = useStyles();
  const { data: recipes } = useSelector(state => state.reducerRecipes);
  const { requestLoading } = useSelector(state => state.reducerLoading);

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Lista de receitas
      </Typography>
      {requestLoading && (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress fontSize="32" />
        </Box>
      )}
      {!requestLoading && (
        <Grid container>
          {recipes?.collection?.map(({ idMeal, strMeal, strMealThumb }) => (
            <Grid item key={idMeal} xs="12" sm="4">
              <Card className={classes.root}>
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Category: </b>
                      {recipes.categoryName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Abrir Vídeo
                  </Button>
                  <Button size="small" color="primary">
                    Detalhes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default List;
