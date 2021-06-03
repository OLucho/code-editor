import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, Button } from "@material-ui/core";
import { commonColors } from "../theme/colors";

export const SignUp: React.FC = () => {
  const useStyles = makeStyles(() => ({
    button: {
      color: commonColors.white,
    },
  }));
  const classes = useStyles();

  const { logout } = useAuth0();
  const onLogOut = () => logout({ returnTo: window.location.origin });

  return (
    <Button className={classes.button} onClick={onLogOut}>
      Sign Out
    </Button>
  );
};
