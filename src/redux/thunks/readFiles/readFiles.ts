import { CustomFile } from "../../../types/customFile";
import { UserFile } from "../../../types/userFile";
import { v4 as uuid } from "uuid";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setFiles } from "../../reducers/files/reducer";

export const readSingleFile = (file: CustomFile): Promise<UserFile> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const { webkitRelativePath = "", name } = file;
      const id = uuid();
      const code = typeof reader.result === "string" ? reader.result : "";
      const splittedName = name.split(".");
      const extension = splittedName[splittedName.length - 1];
      resolve({
        id,
        code,
        extension,
        name,
        relativePath: webkitRelativePath,
      });
    };
  });
};

export const readFiles = createAsyncThunk(
  "files/readFiles",
  async (files: FileList, { dispatch }) => {
    const numberOfFiles = files.length;
    const promises = Array.from({ length: numberOfFiles }, (_, i) => {
      const file = files[i];
      return readSingleFile(file);
    });
    const userFiles = await Promise.all(promises);
    dispatch(setFiles(userFiles));
  }
);
