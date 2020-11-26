import React, { Fragment, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Container,
  Box,
  Grid
} from "@material-ui/core";
import { useStyles } from "./styles";
import { logout } from "~/services/auth";
import api from "~/services/api";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import actionsCategories from "~/actions/categories";
import actionsRecipes from "~/actions/recipes";
import actionsLoading from "~/actions/loading";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const { data: categories } = useSelector(state => state.reducerCategories);

  useEffect(() => {
    initCategories();
  }, []);

  const initCategories = async () => {
    try {
      dispatch(actionsLoading.requestLoading(true));
      const { data } = await api.get("/categories.php");
      const { categories } = data;
      dispatch(actionsCategories.requestCategories(categories));
    } catch (e) {
      console.log(JSON.stringify(e));
    } finally {
      dispatch(actionsLoading.requestLoading(false));
    }
  };

  const getRecipes = async strCategory => {
    try {
      history.push("/recipes");
      dispatch(actionsLoading.requestLoading(true));
      const { data } = await api.get(`filter.php?c=${strCategory}`);
      const { meals } = data;
      dispatch(
        actionsRecipes.requestRecipes({
          collection: [...meals],
          categoryName: strCategory
        })
      );
    } catch (e) {
      console.log(JSON.stringify(e));
    } finally {
      dispatch(actionsLoading.requestLoading(false));
    }
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar
            classes={{
              root: classes.toolbar
            }}
          >
            <Typography
              onClick={() => history.push("/")}
              variant="h6"
              className={classes.title}
            >
              OneS Meal
            </Typography>
            <Button onClick={() => logout()} color="inherit">
              Sair
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid justify="center" container>
        {categories?.map(
          ({ idCategory, strCategory, strCategoryDescription }) => (
            <Grid item key={idCategory}>
              <Button
                data-testid="menuButton"
                onClick={() => getRecipes(strCategory)}
              >
                {strCategory}
              </Button>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default Header;
