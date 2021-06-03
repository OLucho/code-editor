import { makeStyles } from "@material-ui/core";
import { SignOut } from "../../../auth/SignOut";
import { OpenWorkspace } from "../../CodeEditor/OpenWorkspace/OpenWorkspace";

export const AuthenticatedButtons: React.FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OpenWorkspace />
      <SignOut />
    </div>
  );
};
