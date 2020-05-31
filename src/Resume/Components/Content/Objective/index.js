import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Paper,
  Fab,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: "5px 10px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#4db6ac",
    color: "white",
  },
  para: { padding: "15px 10px", fontSize: 16 },
  objective: { lineHeight: "1.6em" },
}));
export default function Objective({ objective, isEdit, onEditChange, onSave }) {
  const [obj, setObj] = useState(objective);
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.heading}>
        <Typography variant="h5">Objective</Typography>
        <Fab
          style={{ margin: "auto", marginRight: 0 }}
          size="small"
          color={isEdit ? "primary" : "secondary"}
          onClick={() => {
            isEdit ? onSave("objective", obj) : onEditChange();
          }}
        >
          {isEdit ? <SaveIcon /> : <EditIcon />}
        </Fab>
      </Paper>
      <Box className={classes.para}>
        <TextField
          value={obj}
          fullWidth={true}
          multiline={true}
          InputProps={{
            readOnly: isEdit ? false : true,
            disableUnderline: isEdit ? false : true,
            classes: { input: classes.objective },
          }}
          onChange={({ target }) => setObj(target.value)}
          placeholder="Add Objective"
        />
      </Box>
    </>
  );
}
