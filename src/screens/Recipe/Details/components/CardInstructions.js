import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

import { useStyles } from "../styles";

import preparationImage from "~/assets/images/preparation.svg";

const CardInstructions = props => {
  const { recipe } = props;

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.strMeal}
          gutterBottom
          variant="h5"
          component="h2"
        >
          <img style={{ marginRight: 10 }} width={50} src={preparationImage} />
          Modo de Preparo
        </Typography>
      </CardContent>
      <CardContent>
        <Grid classes={{ root: classes.containerIngredients }} container>
          <Grid item xs={12}>
            <Typography
              className={classes.strInstruction}
              variant="overline"
              display="block"
              gutterBottom
            >
              {recipe?.strInstructions}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardInstructions;
