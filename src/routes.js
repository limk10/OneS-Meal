import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "~/services/auth";

import Home from "~/screens/Home";
import RecipeList from "~/screens/Recipe/List";
import RecipeDetails from "~/screens/Recipe/Details";
import NotFound from "~/screens/NotFound";
import SignIn from "~/screens/Auth/SignIn";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      rest={{ ...rest }}
      render={props =>
        isAuthenticated() ? (
          <Component props={{ ...props }} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/recipes" component={RecipeList} />
      <PrivateRoute exact path="/recipes/details" component={RecipeDetails} />
      <Route exact path="/signin" component={SignIn} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
