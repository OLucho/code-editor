import { makeStyles } from "@material-ui/core";
import React, { MouseEvent } from "react";
import { UserFile } from "../../../types/userFile";
import { ExtensionIcon } from "../ExtensionIcon/ExtensionIcon";
import CloseIcon from "@material-ui/icons/Close";
import { useAppDispatch } from "../../../redux/hooks";
import { closeFile } from "../../../redux/thunks/closeFile/closeFile";

interface TabLabelProps {
  activeFile: UserFile;
}

export const TabLabel: React.FC<TabLabelProps> = (props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    activeFile: { id, name: fileName, extension },
  } = props;

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(id));
  };

  return (
    <div className={classes.root}>
      <ExtensionIcon extension={extension} />
      <div className={classes.fileName}>{fileName}</div>
      <CloseIcon className={classes.closeIcon} onClick={handleClose} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "none",
  },
  fileName: {
    padding: "0px 5px",
    color: theme.font,
    fontSize: "smaller",
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    color: theme.font,
  },
}));
