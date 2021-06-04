import { makeStyles, Tabs } from "@material-ui/core";
import { AppBar, Tab } from "@material-ui/core";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setEditorActiveFile } from "../../../redux/reducers/files/reducer";
import selectActiveFiles from "../../../redux/selectors/selectActiveFiles/selectActiveFiles";
import { CustomTabPanel } from "./TabPanel";

export const EditorContainer = () => {
  const classes = useStyles();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector(
    (state) => state.files.editorActiveFile
  );
  const activeFilesIds = useAppSelector((state) => state.files.activeFiles);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<{}>, tabPosition: number) => {
    const activeFileId = activeFilesIds[tabPosition];
    if (activeFileId !== editorActiveFile) {
      dispatch(setEditorActiveFile(activeFileId));
    }
  };

  if (activeFiles.length < 0) {
    return <div className={classes.emptyMessage}>Select a file</div>;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={
            editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0
          }
          onChange={handleChange}
        >
          {activeFiles.map((activeFile) => {
            return <Tab key={activeFile.id} label="foo" />;
          })}
        </Tabs>
      </AppBar>
      {activeFiles.map((activeFile) => {
        return (
          <CustomTabPanel
            key={activeFile.id}
            activeFile={activeFile}
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
    paddingTop: "60px",
  },
  emptyMessage: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: theme.font,
  },
}));
