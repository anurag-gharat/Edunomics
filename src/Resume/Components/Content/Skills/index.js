import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Chip,
  Paper,
  Fab,
  Collapse,
  TextField,
  CardContent,
  
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
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
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: "10px 0",
  },
  chip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1.5),
    fontSize: 16,
  },
  textfield: {
    margin: theme.spacing(1),
  },
}));
export default function Skills({
  initialSkills,
  isEdit,
  onEditChange,
  onSave,
}) {
  const classes = useStyles();
  const [skills, setSkills] = useState(initialSkills);
  const [expanded, setExpanded] = useState(false);
  const [newSkill, setNewSkill] = useState({
    skill_name: "",
    skill_proficiency: 0,
  });
  const handleDelete = (id) => () => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };
  const saveNewSkill = () => {
    setSkills([...skills, { ...newSkill, id: skills.length + 1 }]);
    setNewSkill({
      skill_name: "",
      skill_proficiency: 0,
    });
    setExpanded(false);
  };
  const onChangeNewSkill = ({ target }) => {
    setNewSkill({ ...newSkill, [target.name]: target.value });
  };
  return (
    <>
      <Paper className={classes.heading}>
        <Typography variant="h5">Skills</Typography>
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
              const func = () => {
                setExpanded(false);
                onSave("skill", skills);
              };
              isEdit ? func() : onEditChange();
            }}
          >
            {isEdit ? <SaveIcon /> : <EditIcon />}
          </Fab>
        </Box>
      </Paper>
      <Collapse in={expanded}>
        <CardContent>
          <TextField
            fullWidth
            className={classes.textfield}
            value={newSkill.skill_name}
            name="skill_name"
            required={true}
            label="Enter a new field"
            onChange={onChangeNewSkill}
          />
          <TextField
            required={true}
            className={classes.textfield}
            value={newSkill.skill_proficiency}
            name="skill_proficiency"
            label="Enter proficiency"
            type="number"
            onChange={onChangeNewSkill}
          />
          <ButtonGrp save={saveNewSkill} cancel={() => setExpanded(false)} />
        </CardContent>
      </Collapse>
      <Box component="ul" className={classes.root}>
        {skills.map((data) => (
          <li key={data.skill_name}>
            <Chip
              color="primary"
              label={data.skill_name}
              onDelete={isEdit ? handleDelete(data.id) : undefined}
              className={classes.chip}
            />
          </li>
        ))}
      </Box>
    </>
  );
}
