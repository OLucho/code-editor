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
  console.log("");
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
          {activeFiles.map((file) => {
            return <Tab key={file.id} label="foo" />;
          })}
        </Tabs>
      </AppBar>
      {activeFiles.map((file) => {
        return (
          <CustomTabPanel
            key={file.id}
            activeFile={file}
            editorActiveFile={editorActiveFile}
          />
        );
      })}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
  },
  emptyMessage: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: theme.font,
  },
}));
