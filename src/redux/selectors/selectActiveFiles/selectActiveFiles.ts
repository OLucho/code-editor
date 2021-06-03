import { createSelector } from "@reduxjs/toolkit";
import { FilesState } from "../../reducers/files/reducer";
import { RootState } from "../../store";

export const selectActiveFiles = (files: FilesState) => {
  const { activeFiles, userFiles } = files;

  return userFiles.filter((file) => activeFiles.includes(file.id));
};

export default createSelector(
  (state: RootState) => state.files,
  selectActiveFiles
);
