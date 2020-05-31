import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
const useStyles = makeStyles((theme) => ({}));
export default function ButtonGrp({ save, cancel }) {
  const classes = useStyles();
  return (
    <Box style={{ margin: "auto", marginRight: "0", width: "fit-content" }}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={save}
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        onClick={cancel}
        startIcon={<CancelIcon />}
      >
        Cancel
      </Button>
    </Box>
  );
}
