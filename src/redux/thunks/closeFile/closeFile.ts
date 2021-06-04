import { Dispatch } from "redux";
import {
  removeActiveFile,
  setEditorActiveFile,
} from "../../reducers/files/reducer";
import { RootState } from "../../store";

const getNewActiveFileId = (
  activeFilesIds: string[],
  activeFilesLength: number,
  fileId: string
) => {
  const fileToRemoveIndex = activeFilesIds.indexOf(fileId);
  if (fileToRemoveIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToRemoveIndex - 1];
  }

  return activeFilesIds[fileToRemoveIndex + 1];
};

export const closeFile =
  (fileId: string) => (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();

    const { activeFiles, editorActiveFile } = state.files;

    const activeFilesLength = activeFiles.length; // Array ofs IDS
    if (activeFilesLength >= 2) {
      const newActiveFileId = getNewActiveFileId(
        activeFiles,
        activeFilesLength,
        fileId
      );

      if (editorActiveFile === fileId || editorActiveFile === newActiveFileId) {
        dispatch(setEditorActiveFile(newActiveFileId));
      }
    } else {
      dispatch(setEditorActiveFile(null));
    }

    dispatch(removeActiveFile(fileId));
  };
