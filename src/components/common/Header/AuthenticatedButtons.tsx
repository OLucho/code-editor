import { makeStyles } from "@material-ui/core";
import { SignOut } from "../../../auth/SignOut";

export const AuthenticatedButtons: React.FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Open WorkSpace</div>
      <SignOut />
    </div>
  );
};
