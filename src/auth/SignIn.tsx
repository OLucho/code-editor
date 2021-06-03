import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, Button } from "@material-ui/core";
import { commonColors } from "../theme/colors";

export const SignIn: React.FC = ({}) => {
  const useStyles = makeStyles(() => ({
    button: {
      color: commonColors.white,
    },
  }));
  const classes = useStyles();

  const { loginWithRedirect } = useAuth0();
  return (
    <Button className={classes.button} onClick={loginWithRedirect}>
      Sign In
    </Button>
  );
};
