import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
    marginRight: 10,
    minHeight: 280,
    marginBottom: 15
  },
  media: {
    height: 140
  },
  strMeal: {
    maxWidth: `20ch`,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`
  }
}));

export { useStyles };
