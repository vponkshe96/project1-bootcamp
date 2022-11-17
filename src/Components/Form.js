import React, { useState, useEffect } from "react";
import "../App.css";
import Table from "./Table";
import data from "../mockData.json";

import {
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Form() {
  const initialContacts = () =>
    JSON.parse(window.localStorage.getItem("contacts")) || [...data];
  const [contacts, setContacts] = useState(initialContacts);
  //useState Hook
  //contacts is an array of objects that will initially be populated by mock data
  //right ds as we can map over it when generating the table

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  //localStorage implementation via useEffect hook

  const [contact, setFormData] = useState({
    fullName: "",
    meetingDate: "",
    meetingNotes: "",
    postMeetingAction: " ",
  });
  //contact is an object that will will be updated via form

  //Form Event Handlers
  const handleAddFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData({ ...contact, [fieldName]: fieldValue });
    //copy value of contact and override a particular key's value
  };

  const handleAddFormSubmit = (e) => {
    const newContact = {
      fullName: contact.fullName,
      meetingDate: contact.meetingDate,
      meetingNotes: contact.meetingNotes,
      postMeetingAction: contact.postMeetingAction,
    };
    setContacts([...contacts, newContact]);
    //same as 22 except now it's for an array
    //slight difference, not overriding but adding
    e.preventDefault();
  };

  //Delete Table Functionality in Table passed down to component as props
  const handleTableDelete = (index) => {
    //never update state outside setState
    //use spread operator to create shallow copy
    //never create deep copy
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <Typography
        variant="h6"
        color="primary"
        align="left"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Add Meeting
      </Typography>
      <form className="form-container" onSubmit={handleAddFormSubmit}>
        <TextField
          label="Full Name"
          variant="outlined"
          type="text"
          name="fullName"
          required={true}
          placeholder="Enter full name..."
          onChange={handleAddFormChange}
        ></TextField>
        <TextField
          label="Meeting Date"
          variant="outlined"
          type="text"
          name="meetingDate"
          required={true}
          placeholder="Enter meeting date..."
          onChange={handleAddFormChange}
        ></TextField>
        <TextField
          label="Meeting Notes"
          variant="filled"
          multiline //dynamic
          type="text"
          name="meetingNotes"
          required={true}
          placeholder="Enter meeting notes..."
          onChange={handleAddFormChange}
        ></TextField>
        <FormControl>
          <FormLabel required={true}>Post Meeting Action</FormLabel>
          <RadioGroup name="postMeetingAction" onChange={handleAddFormChange}>
            <FormControlLabel
              control={<Radio size="small" required={true} />}
              label="Engage Actively"
              value="Engage Actively"
            />
            <FormControlLabel
              control={<Radio size="small" required={true} />}
              label="Maintain"
              value="Maintain"
            />
            <FormControlLabel
              control={<Radio size="small" required={true} />}
              label="Drop"
              value="Drop"
            />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          submit
        </Button>
      </form>
      <Typography
        variant="h6"
        color="primary"
        align="left"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Meeting Log
      </Typography>
      <Table contacts={contacts} handleTableDelete={handleTableDelete} />
    </div>
  );
}
