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
  CardContent,
  Collapse,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGrp from "../../Common/ButtonGrp";
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
  name: { fontSize: 32, color: "#006064", textTransform: "capitalize" },
  listItem: { margin: "10px 0" },
}));
export default function Project({
  initialProjects,
  onSave,
  isEdit,
  onEditChange,
}) {
  const [projects, setProjects] = useState(initialProjects);
  const [expanded, setExpanded] = useState(false);
  const [newProject, setNewProject] = useState({
    project_name: "",
    duration: "",
    description: "",
  });
  const classes = useStyles();
  const saveNewProject = () => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    setExpanded(false);
    setNewProject({ project_name: "", duration: "", description: "" });
  };
  const onNewProjectChange = ({ target }) => {
    setNewProject({ ...newProject, [target.name]: target.value });
  };
  const onChange = (ind, e) => {
    const { target } = e;
    setProjects(
      projects.map((projectObj) =>
        projectObj.id === ind
          ? { ...projectObj, [target.name]: target.value }
          : projectObj
      )
    );
  };
  return (
    <>
      <Paper className={classes.heading}>
        <Typography variant="h5">Projects</Typography>
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
              isEdit ? onSave("project", projects) : onEditChange();
            }}
          >
            {isEdit ? <SaveIcon /> : <EditIcon />}
          </Fab>
        </Box>
      </Paper>
      <Collapse in={expanded}>
        <CardContent>
          <TextField
            name="project_name"
            value={newProject.project_name}
            label="Project Name"
            display="block"
            className={classes.nameField}
            onChange={onNewProjectChange}
            InputProps={{
              classes: { input: classes.name },
            }}
          />

          <TextField
            name="description"
            value={newProject.description}
            label="Add Description"
            multiline={true}
            fullWidth={true}
            onChange={onNewProjectChange}
          />
          {/* <TextField
            value={newProject.duration}
            onChange={(e) => onChange(val, e)}
            name="duration"
            label="Duration"
            onChange={onNewProjectChange}
          /> */}
          <ButtonGrp save={saveNewProject} cancel={() => setExpanded(false)} />
        </CardContent>
      </Collapse>
      <List>
        {projects.map((project) => (
          <ListItem
            key={project.id}
            divider={true}
            style={{ position: "relative" }}
            className={classes.listItem}
          >
            <Box display="flex" width="100%" flexDirection="column">
              <TextField
                name="project_name"
                value={project.project_name}
                label="Project Name"
                display="block"
                className={classes.nameField}
                onChange={(e) => onChange(project.id, e)}
                InputProps={{
                  classes: { input: classes.name },
                  readOnly: isEdit ? false : true,
                  disableUnderline: isEdit ? false : true,
                }}
              />
              <TextField
                name="description"
                value={project.description}
                label="Add Description"
                multiline={true}
                onChange={(e) => onChange(project.id, e)}
                fullWidth={true}
                InputProps={{
                  readOnly: isEdit ? false : true,
                  disableUnderline: isEdit ? false : true,
                }}
              />
            </Box>
            <TextField
              style={{ position: "absolute", right: 0 }}
              value={project.duration}
              name="duration"
              label="Duration"
              onChange={(e) => onChange(project.id, e)}
              InputProps={{
                readOnly: isEdit ? false : true,
                disableUnderline: isEdit ? false : true,
              }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
