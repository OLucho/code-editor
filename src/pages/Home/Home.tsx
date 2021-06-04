import { makeStyles } from "@material-ui/core";
import React from "react";
import { ProgrammingLanguagesList } from "../../components/Home/ProgrammingLanguages";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Home: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    welcomeMessage: {
      padding: "15px",
      fontSize: "30px",
      color: theme.font,
    },
    madeByMe: {
      position: "absolute",
      bottom: "30px",
    },
    link: {
      color: "cornflowerblue",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.welcomeMessage}>Welcome to Code Editor</div>
      <ProgrammingLanguagesList />
      <div className={classes.madeByMe}>
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/OLucho/code-editor"}
        >
          Made by Lucho <GitHubIcon />
        </a>
      </div>
    </div>
  );
};
