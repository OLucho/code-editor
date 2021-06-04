import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import Loading from "../components/common/Loading/Loading";
import { routes } from "./routesList";
import { Header } from "../components/common/Header/Header";
import { Home } from "../pages/Home/Home";
import { CodeEditor } from "../pages/CodeEditor/CodeEditor";

const Routes: React.FC = () => {
  const useStyles = makeStyles(() => ({
    main: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    page: {
      height: "100%",
    },
  }));

  const classes = useStyles();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routes.codeEditor}>
            {CodeEditor}
          </ProtectedRoute>
          <Route exact path={routes.home}>
            {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <Home />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
