import { makeStyles, Tabs } from "@material-ui/core";
import { AppBar, Tab } from "@material-ui/core";
import { ChangeEvent } from "react";
import { useAppSelector } from "../../../redux/hooks";
import selectActiveFiles from "../../../redux/selectors/selectActiveFiles/selectActiveFiles";
import { CustomTabPanel } from "./TabPanel";

export const EditorContainer = () => {
  const classes = useStyles();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector(
    (state) => state.files.editorActiveFile
  );
  const activeFilesId = useAppSelector((state) => state.files.activeFiles);

  if (activeFiles.length < 0) {
    return <div className={classes.emptyMessage}>Select a file</div>;
  }

  const handleChange = (e: ChangeEvent<{}>, tabPosition: number) => {
    console.log("");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={editorActiveFile ? activeFilesId.indexOf(editorActiveFile) : 0}
          onChange={handleChange}
        >
          {activeFiles.map((file) => (
            <Tab key={file.id} label="foo" />
          ))}
        </Tabs>
      </AppBar>
      {activeFiles.map((file) => (
        <CustomTabPanel
          key={file.id}
          activeFile={file}
          editorActiveFile={editorActiveFile}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    flex: 1,
    overflow: "hidden",
  },
  emptyMessage: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: theme.font,
  },
}));
