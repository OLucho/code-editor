import { UserFile } from "../../../types/userFile";
import { RootState } from "../../store";
import selectActiveFiles from "./selectActiveFiles";

test("should return only the active files", () => {
  const userFiles = [
    {
      id: "1",
      name: "index.js",
      relativePath: "test/index1.js",
      code: "console.log",
      extension: "js",
    },
    {
      id: "2",
      name: "index.js",
      relativePath: "test/index2.js",
      code: "console.log",
      extension: "js",
    },
    {
      id: "3",
      name: "index.js",
      relativePath: "test/index3.js",
      code: "console.log",
      extension: "js",
    },
  ];
  const activeFiles = ["1", "3"];

  const state = {
    files: {
      userFiles,
      activeFiles,
    },
  } as RootState;

  const expected = [
    {
      id: "1",
      name: "index.js",
      relativePath: "test/index1.js",
      code: "console.log",
      extension: "js",
    },
    {
      id: "3",
      name: "index.js",
      relativePath: "test/index3.js",
      code: "console.log",
      extension: "js",
    },
  ];

  expect(selectActiveFiles(state)).toEqual(expected);
});
