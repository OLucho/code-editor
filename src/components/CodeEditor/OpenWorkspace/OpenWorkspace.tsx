import { Button, makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import { commonColors } from "../../../theme/colors";

export const OpenWorkspace: React.FC = () => {
  const useStyles = makeStyles(() => ({
    button: {
      color: commonColors.white,
    },
    input: {
      display: "none",
    },
  }));
  const classes = useStyles();

  const directoryInputRef = useRef<HTMLInputElement>(null);

  //@ts-ignore
  const handleClick = () => directoryInputRef.current.click();
  const onFilesUploaded = () => console.log("click");

  return (
    <div>
      <Button className={classes.button} onClick={handleClick}>
        Open Workspace
      </Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUploaded}
      />
    </div>
  );
};

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}
