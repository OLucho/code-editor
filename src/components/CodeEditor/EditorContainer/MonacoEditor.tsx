/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import supportedExtensions from "../../../constants/supportedExtensions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateFileCode } from "../../../redux/reducers/files/reducer";
import { UserFile } from "../../../types/userFile";
import Loading from "../../common/Loading/Loading";

interface MonacoEditorProps {
  activeFile: UserFile;
}

export const MonacoEditor: React.FC<MonacoEditorProps> = (props) => {
  const {
    activeFile: { code: originalCode, extension },
  } = props;
  const darkMode = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const [code, setCode] = useState(originalCode);
  const language = supportedExtensions[extension];

  const debouncedSave = useCallback(
    debounce((fileId: string, newCode: string) => {
      dispatch(updateFileCode({ fileId, newCode }));
    }, 1000),
    []
  );
  const onChange = (newCode = "") => {
    setCode(newCode);
    debouncedSave(props.activeFile.id, newCode);
  };

  return (
    <Editor
      width="100%"
      height="100%"
      language={language}
      theme={darkMode ? "vs-dark" : "vs-light"}
      value={code}
      loading={<Loading />}
      onChange={onChange}
    ></Editor>
  );
};
