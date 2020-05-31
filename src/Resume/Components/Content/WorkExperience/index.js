import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Paper,
  ListItem,
  Box,
  TextField,
  List,
  Fab,
  Collapse,
  CardContent,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import ButtonGrp from "../../Common/ButtonGrp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: "5px 10px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#4db6ac",
    color: "white",
    marginTop: 10,
  },
  nameField: { width: "fit-content" },
  name: { fontSize: 32, color: "#006064" },
  listItem: { margin: "10px 0" },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));
export default function WorkExperience({
  initialWorkExperience,
  isEdit,
  onEditChange,
  onSave,
}) {
  const classes = useStyles();
  const [workExperience, setWorkExperience] = useState(initialWorkExperience);
  const [newExperience, setNewExperience] = useState({
    organisation_name: "",
    position: "",
    duration: "",
  });
  const [expanded, setExpanded] = useState(false);
  const saveNewExperience = () => {
    setWorkExperience([
      ...workExperience,
      { ...newExperience, id: workExperience.length + 1 },
    ]);
    setNewExperience({ organisation_name: "", position: "", duration: "" });
    setExpanded(false);
  };

  const onChange = (ind, e) => {
    const { target } = e;
    setWorkExperience(
      workExperience.map((workObj) =>
        workObj.id === ind
          ? { ...workObj, [target.name]: target.value }
          : workObj
      )
    );
  };
  const onNewExperienceChange = ({ target }) => {
    setNewExperience({ ...newExperience, [target.name]: target.value });
  };
  return (
    <>
      <Paper className={classes.heading}>
        <Typography variant="h5">Work Experience</Typography>
        <Box>
          {isEdit ? (
            <Fab
              size="small"
              style={{ marginRight: 10 }}
              color={!expanded ? "primary" : "secondary"}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <RemoveIcon /> : <AddIcon />}
            </Fab>
          ) : (
            ""
          )}
          <Fab
            size="small"
            color={isEdit ? "primary" : "secondary"}
            onClick={() => {
              isEdit
                ? onSave("work_experience", workExperience)
                : onEditChange();
            }}
          >
            {isEdit ? <SaveIcon /> : <EditIcon />}
          </Fab>
        </Box>
      </Paper>
      <Collapse in={expanded}>
        <CardContent>
          <TextField
            name="organisation_name"
            label="Organisation Name"
            fullWidth={true}
            value={newExperience.organisation_name}
            InputProps={{
              classes: { input: classes.name },
            }}
            onChange={onNewExperienceChange}
          />
          <TextField
            name="position"
            label="Position"
            value={newExperience.position}
            onChange={onNewExperienceChange}
          />
          <TextField
            name="duration"
            label="Duration"
            value={newExperience.duration}
            onChange={onNewExperienceChange}
          />
          <ButtonGrp
            save={saveNewExperience}
            cancel={() => setExpanded(false)}
          />
        </CardContent>
      </Collapse>
      <List>
        {workExperience.map((experience) => (
          <ListItem
            key={experience.id}
            divider={true}
            style={{ position: "relative" }}
            className={classes.listItem}
          >
            <Box display="flex" flexDirection="column">
              <TextField
                name="organisation_name"
                value={experience.organisation_name}
                label="Organisation Name"
                display="block"
                onChange={(e) => onChange(experience.id, e)}
                className={classes.nameField}
                InputProps={{
                  classes: { input: classes.name },
                  readOnly: isEdit ? false : true,
                  disableUnderline: isEdit ? false : true,
                }}
              />
              <TextField
                name="position"
                value={experience.position}
                label="Position"
                onChange={(e) => onChange(experience.id, e)}
                InputProps={{
                  readOnly: isEdit ? false : true,
                  disableUnderline: isEdit ? false : true,
                }}
              />
            </Box>
            <TextField
              style={{ position: "absolute", right: 0 }}
              value={experience.duration}
              onChange={(e) => onChange(experience.id, e)}
              InputProps={{
                readOnly: isEdit ? false : true,
                disableUnderline: isEdit ? false : true,
              }}
              name="duration"
              label="Duration"
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
