import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Switch,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleDarkMode } from "../../../redux/reducers/darkMode/reducer";
import DarkModeIcon from "@material-ui/icons/Brightness2";
import { UnauthenticatedButtons } from "./UnauthenticatedButtons";
import { AuthenticatedButtons } from "./AuthenticatedButtons";

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const handleDarkMode = () => dispatch(toggleDarkMode());

  const useStyles = makeStyles({
    title: {
      flex: 1,
    },
  });
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor
        </Typography>
        <DarkModeIcon />
        <Switch onChange={handleDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? (
          <AuthenticatedButtons />
        ) : (
          <UnauthenticatedButtons />
        )}
      </Toolbar>
    </AppBar>
  );
};
