import React from "react";

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
  Button,
  Hidden
} from "@material-ui/core";

import { useStyles } from "../styles";

import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";

const CardImage = props => {
  const { recipe } = props;

  const classes = useStyles();

  const openVideo = strYoutube => {
    window.open(strYoutube, "_blank");
  };

  return (
    <Grid container className={classes.containerImage}>
      <Grid item xs={12} sm={9} md={6}>
        <Card className={classes.rootCardImage}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe?.strMeal}
            </Typography>
            <div className={classes.borderPrimaryBottom}></div>
          </CardContent>
          <CardMedia
            component="img"
            className={classes.media}
            image={recipe?.strMealThumb}
            title={recipe?.strMeal}
          />
          <CardContent>
            <Grid container>
              <Grid className={classes.borderRight} item xs={12} sm={4}>
                <Typography variant="h5" gutterBottom>
                  Categoria
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  {recipe?.strCategory || "-"}
                </Typography>
              </Grid>
              <Grid className={classes.borderRight} item xs={12} sm={4}>
                <Typography variant="h5" gutterBottom>
                  Local
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  {recipe?.strArea || "-"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h5" gutterBottom>
                  Tag
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  {recipe?.strTags || "-"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions className={classes.cardActions}>
            <Button
              onClick={() => openVideo(recipe?.strYoutube)}
              size="small"
              color="primary"
            >
              <VideoLibraryOutlinedIcon style={{ marginRight: 5 }} /> Ver Vídeo
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardImage;
