import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  makeStyles,
  TextField,
  Fab,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import EditIcon from "@material-ui/icons/Edit";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SaveIcon from "@material-ui/icons/Save";
const useStyles = makeStyles((theme) => ({
  text: { padding: "0 10px" },
  name: { fontSize: 48 },
  nameField: { width: "fit-content" },
  subtitle: { fontSize: 24, color: "#8B0000" },
  listIem: { paddingTop: 6, paddingBottom: 6 },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

export default function PersonalInfo({
  personal_info,
  isEdit,
  onEditChange,
  onSave,
}) {
  const [info, setInfo] = useState(personal_info);
  const classes = useStyles();
  const onChange = ({ target }) => {
    setInfo({ ...info, [target.name]: target.value });
  };
  return (
    <Box display="flex" flexDirection="column">
      <Fab
        style={{ margin: "auto", marginRight: 0 }}
        size="small"
        color={isEdit ? "primary" : "secondary"}
        onClick={() => {
          isEdit ? onSave("personal_info", personal_info) : onEditChange();
        }}
      >
        {isEdit ? <SaveIcon /> : <EditIcon />}
      </Fab>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <TextField
            InputProps={{
              readOnly: isEdit ? false : true,
              disableUnderline: isEdit ? false : true,
              classes: {
                input: classes.name,
              },
            }}
            className={classes.nameField}
            value={info.name || ''}
            name="name"
            disabled={isEdit ? false : true}
            placeholder="Add your name"
            onChange={onChange}
          />
          <TextField
            InputProps={{ classes: { input: classes.subtitle } }}
            InputProps={{
              readOnly: isEdit ? false : true,
              disableUnderline: isEdit ? false : true,
            }}
            className={classes.nameField}
            value={info.highest_education}
            name="highest_education"
            placeholder="Add your highest education"
            onChange={onChange}
          />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <List>
            {personal_info.contact_no ? (
              <ListItem className={classes.listIem}>
                <PhoneIcon />
                <TextField
                  name="contact_no"
                  className={classes.text}
                  InputProps={{
                    readOnly: isEdit ? false : true,
                    disableUnderline: isEdit ? false : true,
                  }}
                  value={info.contact_no}
                  placeholder="Add a phone number"
                  onChange={onChange}
                />
              </ListItem>
            ) : (
              ""
            )}
            {personal_info.email ? (
              <ListItem className={classes.listIem}>
                <EmailIcon />
                <TextField
                  InputProps={{
                    readOnly: isEdit ? false : true,
                    disableUnderline: isEdit ? false : true,
                  }}
                  name="email"
                  className={classes.text}
                  value={info.email}
                  placeholder="Add a Email"
                  onChange={onChange}
                />
              </ListItem>
            ) : (
              ""
            )}
            {personal_info.linkedIn ? (
              <ListItem className={classes.listIem}>
                <LinkedInIcon />
                <TextField
                  name="linkedIn"
                  InputProps={{
                    readOnly: isEdit ? false : true,
                    disableUnderline: isEdit ? false : true,
                  }}
                  className={classes.text}
                  value={info.linkedIn}
                  placeholder="Add a LinkedIn"
                  onChange={onChange}
                />
              </ListItem>
            ) : (
              ""
            )}
            {personal_info.twitter ? (
              <ListItem className={classes.listIem}>
                <TwitterIcon />
                <TextField
                  className={classes.text}
                  value={info.twitter}
                  InputProps={{
                    readOnly: isEdit ? false : true,
                    disableUnderline: isEdit ? false : true,
                  }}
                />
              </ListItem>
            ) : (
              ""
            )}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
