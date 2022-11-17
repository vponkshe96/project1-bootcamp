import React from "react";
import "../App.css";
import { Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = (props) => {
  const { contacts, handleTableDelete } = props;
  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Meeting Date</th>
            <th>Meeting Notes</th>
            <th>Post Meeting Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td id="fullName">{contact.fullName}</td>
              <td>{contact.meetingDate}</td>
              <td>{contact.meetingNotes}</td>
              <td>
                <Typography
                  variant="h6"
                  align="center"
                  style={{
                    backgroundColor:
                      (contact.postMeetingAction === "Engage Actively" &&
                        "green") ||
                      (contact.postMeetingAction === "Maintain" && "orange") ||
                      (contact.postMeetingAction === "Drop" && "red"),
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    color: "white",
                    borderRadius: 8,
                    padding: "3px 10px",
                    display: "inline-block",
                  }}
                >
                  {contact.postMeetingAction}
                </Typography>
              </td>
              <td>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleTableDelete(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
