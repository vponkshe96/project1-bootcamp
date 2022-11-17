import "./App.css";
import { Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Form from "./Components/Form";

function App() {
  return (
    <div className="app-container">
      <Typography
        variant="h4"
        color="primary"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        <PersonAddIcon fontSize="large" /> Rolodex
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Never worry about forgetting who you met and what you spoke about ever
        again
      </Typography>
      <Form />
    </div>
  );
}

export default App;
