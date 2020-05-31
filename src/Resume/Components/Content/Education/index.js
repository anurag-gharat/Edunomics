import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  List,
  ListItem,
  Paper,
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
  },
  para: { padding: "15px 10px", fontSize: 16 },
  objective: { lineHeight: "1.6em" },
  box: { margin: "10px 0" },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  title: { fontSize: 32 },
}));
export default function Education({
  initialEducations,
  isEdit,
  onEditChange,
  onSave,
}) {
  const [educations, setEducations] = useState(initialEducations);
  const [expanded, setExpanded] = useState(false);
  const [newEducation, setNewEducation] = useState({
    title: "",
    board: "",
    year: "",
    score: "",
    school_name: "",
  });
  const classes = useStyles();
  const onChange = (id, e) => {
    const { target } = e;
    setEducations(
      educations.map((education) =>
        education.id === id
          ? { ...education, [target.name]: target.value }
          : education
      )
    );
  };
  const onNewEducationChange = ({ target }) => {
    setNewEducation({ ...newEducation, [target.name]: target.value });
  };
  const saveNewEducation = () => {
    setEducations([
      ...educations,
      { ...newEducation, id: educations.length + 1 },
    ]);
    setNewEducation({
      title: "",
      board: "",
      year: "",
      school_name: "",
      score: "",
      school_name: "",
    });
    setExpanded(false);
  };
  return (
    <>
      <Paper className={classes.heading}>
        <Typography variant="h5">Education</Typography>
        <Box
          style={{ margin: "auto", marginRight: 0 }}
          display="flex"
          justifyContent="space-between"
        >
          {isEdit ? (
            <Fab
              style={{ marginRight: "10px" }}
              size="small"
              color={expanded ? "secondary" : "primary"}
              onClick={() => {
                setExpanded(!expanded);
              }}
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
              isEdit ? onSave("education", educations) : onEditChange();
            }}
          >
            {isEdit ? <SaveIcon /> : <EditIcon />}
          </Fab>
        </Box>
      </Paper>
      <Collapse in={expanded}>
        <CardContent>
          <TextField
            name="title"
            label="Title"
            fullWidth={true}
            value={newEducation.title}
            InputProps={{
              classes: { input: classes.title },
            }}
            onChange={onNewEducationChange}
          />
          <TextField
            onChange={onNewEducationChange}
            name="school_name"
            label="School Name"
            value={newEducation.school_name}
          />
          <TextField
            onChange={onNewEducationChange}
            name="score"
            label="CGPA/Percentage"
            value={newEducation.score}
          />
          <TextField
            onChange={onNewEducationChange}
            name="board"
            label="Board"
            value={newEducation.board}
          />
          <TextField
            name="year"
            label="Year"
            value={newEducation.year}
            onChange={onNewEducationChange}
          />
          <ButtonGrp
            save={saveNewEducation}
            cancel={() => setExpanded(false)}
          />
        </CardContent>
      </Collapse>
      <List>
        {educations.map((education) => (
          <ListItem
            key={education.id}
            divider={true}
            style={{ position: "relative" }}
          >
            <Box display="flex" flexDirection="column" className={classes.box}>
              <TextField
                value={education.title}
                onChange={(e) => onChange(education.id, e)}
                name="title"
                label="Title"
                InputProps={{
                  classes: { input: classes.title },
                  readOnly: isEdit ? false : true,
                  disableUnderline: isEdit ? false : true,
                }}
              />
              <Box style={{ marginTop: "10px" }}>
                {education.school_name || isEdit ? (
                  <TextField
                    onChange={(e) => onChange(education.id, e)}
                    name="school_name"
                    label="School Name"
                    value={education.school_name}
                    InputProps={{
                      readOnly: isEdit ? false : true,
                      disableUnderline: isEdit ? false : true,
                    }}
                  />
                ) : (
                  ""
                )}
                {education.board || isEdit ? (
                  <TextField
                    onChange={(e) => onChange(education.id, e)}
                    name="board"
                    label="board"
                    value={education.board}
                    display="block"
                    InputProps={{
                      readOnly: isEdit ? false : true,
                      disableUnderline: isEdit ? false : true,
                    }}
                  />
                ) : (
                  ""
                )}
                <TextField
                  onChange={(e) => onChange(education.id, e)}
                  name="score"
                  label="CGPA/Percentage"
                  value={education.score}
                  InputProps={{
                    readOnly: isEdit ? false : true,
                    disableUnderline: isEdit ? false : true,
                  }}
                />
              </Box>
            </Box>
            <TextField
              style={{ position: "absolute", right: 0 }}
              value={education.year}
              onChange={(e) => onChange(education.id, e)}
              InputProps={{
                readOnly: isEdit ? false : true,
                disableUnderline: isEdit ? false : true,
              }}
              name="year"
              label="Year"
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
