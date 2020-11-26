import React from "react";

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

import { useStyles } from "../styles";

import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";

import ingredientsImage from "~/assets/images/ingredients.svg";

const CardIngredient = props => {
  const { recipe } = props;

  const classes = useStyles();

  return (
    <Card className={classes.rootCardImage}>
      <CardContent>
        <Typography
          className={classes.strMeal}
          gutterBottom
          variant="h5"
          component="h2"
        >
          <img style={{ marginRight: 10 }} width={50} src={ingredientsImage} />
          Ingredientes
        </Typography>
      </CardContent>
      <CardContent>
        <Grid classes={{ root: classes.containerIngredients }} container>
          <Grid item xs={12}>
            <List>
              {recipe?.ingredients?.map((ingredient, key) => (
                <ListItem key={key}>
                  <ListItemAvatar>
                    <Avatar>
                      <ArrowRightOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={ingredient?.ingredient}
                    secondary={ingredient?.measure}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardIngredient;
