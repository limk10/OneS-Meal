import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
    marginRight: 10,
    minHeight: 280,
    marginBottom: 15
  },
  rootCardImage: {
    minHeight: 280,
    marginBottom: 15
  },
  media: {
    height: 300
  },
  strMeal: {
    maxWidth: `20ch`,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
    color: theme.palette.primary.main
  },
  containerImage: {
    textAlign: "center"
  },
  containerIngredients: {
    paddingBottom: 0
  },
  strInstruction: {
    whiteSpace: "break-spaces"
  },
  cardActions: {
    float: "right"
  },
  borderRight: {
    [theme.breakpoints.up("sm")]: {
      borderRight: "1px solid #cccccc"
    }
  },
  borderPrimaryBottom: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    width: `50%`,
    margin: `0 auto`
  }
}));

export { useStyles };
