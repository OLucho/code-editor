import React from "react";
import { makeStyles } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import selectFileViewerData from "../../../redux/selectors/selectFileViewerData/selectFileViewerData";
import { FileViewerStructure } from "../../../types/fileViewerStructure";
import { TreeItem } from "@material-ui/lab";
import { ExtensionIcon } from "../ExtensionIcon/ExtensionIcon";
import { TreeView } from "@material-ui/lab";
import { FolderOpenOutlined, FolderSpecialOutlined } from "@material-ui/icons";

export const FileViewer: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "0px 10px 10px",
      height: "100%",
      width: "100%",
    },
    treeItem: {
      padding: "2px",
      color: theme.font,
    },
    emptyMessage: {
      color: theme.font,
    },
  }));
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const fileViewerData = useAppSelector(selectFileViewerData);
  const onSelectNode = (node: FileViewerStructure) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: FileViewerStructure) => {
    <TreeItem
      className={classes.treeItem}
      key={node.id}
      nodeId={node.id}
      label={node.name}
      endIcon={<ExtensionIcon extension={node.extension} />}
      onDoubleClick={() => onSelectNode(node)}
    >
      {Array.isArray(node.children) &&
        node.children.map((node) => renderTree(node))}
    </TreeItem>;
  };

  if (!Object.keys(fileViewerData).length) {
    return <p className={classes.emptyMessage}>No files</p>;
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<FolderOpenOutlined />}
      defaultExpandedIcon={<FolderSpecialOutlined />}
    >
      {
        //@ts-ignore
        renderTree(fileViewerData)
      }
    </TreeView>
  );
};
