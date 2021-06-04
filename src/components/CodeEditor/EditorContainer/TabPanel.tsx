import React from "react";
import { makeStyles } from "@material-ui/styles";
import { UserFile } from "../../../types/userFile";
import { MonacoEditor } from "./MonacoEditor";

interface TabPanelProps {
  activeFile: UserFile;
  editorActiveFile: string | null;
}

export const CustomTabPanel: React.FC<TabPanelProps> = (props) => {
  const classes = useStyles();
  const {
    activeFile: { id: activeFileId },
    editorActiveFile,
  } = props;
  return (
    <div
      className={classes.root}
      role="tabpanel"
      hidden={editorActiveFile !== activeFileId}
    >
      <MonacoEditor activeFile={props.activeFile} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));
