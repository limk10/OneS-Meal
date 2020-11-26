import React, { Fragment, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Container,
  Box,
  Tooltip
} from "@material-ui/core";
import { useStyles } from "./styles";
import { logout } from "~/services/auth";
import api from "~/services/api";
import { useDispatch, useSelector } from "react-redux";
import actionsCategories from "~/actions/categories";
import actionsRecipes from "~/actions/recipes";
import actionsLoading from "~/actions/loading";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

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
            <Typography variant="h6" className={classes.title}>
              OneS Meal
            </Typography>
            <Button onClick={() => logout()} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box display="flex" justifyContent="center">
        {categories?.map(
          ({ idCategory, strCategory, strCategoryDescription }) => (
            <Fragment key={idCategory}>
              <Button onClick={() => getRecipes(strCategory)}>
                {strCategory}
              </Button>
            </Fragment>
          )
        )}
      </Box>
    </>
  );
};

export default Header;
