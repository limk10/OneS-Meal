import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "~/services/auth";

import NotFound from "~/screens/NotFound";
import SignIn from "~/screens/Auth/SignIn";
import RecipeList from "~/screens/Recipe/List";

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
      <PrivateRoute exact path="/" component={RecipeList} />
      <Route exact path="/signin" component={SignIn} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
