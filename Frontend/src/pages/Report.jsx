import { useLocation } from "react-router-dom";
import { GoBack, MyTextField } from "../components";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
const Report = () => {
  const location = useLocation();
  const { currentPath } = location.state || {};
  const [other, setOther] = useState(false);

  const color = {
    ".MuiInputBase-input": {
      color: "black",
    },
  };

  const slots = {
    textField: (params) => (
      <TextField
        {...params}
        size="small" // This makes the DatePicker's input field small
        focused
        sx={color}
      />
    ),
  };

  const typeOfIncident = (e) => {
    const incidentType = e.target.value;
    if (incidentType === "Other") {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  return (
    <div className="flex justify-center w-screen text-black">
      <div className="px-2 w-3/4">
        <div className="w-full flex justify-between items-end text-white">
          <GoBack path={currentPath} />
          <p>Report Incident</p>
        </div>
        <form
          onSubmit={() => {}}
          className="bg-slate-100 px-3 py-4 h-fit flex flex-col rounded-sm mt-1 gap-2"
        >
          <div className="flex gap-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date of Incident" slots={slots} />
              <TimePicker
                label="Time of Incident"
                slots={slots}
                slotProps={{
                  actionBar: {
                    actions: ["cancel", "accept"],
                    // OK button is the 'accept' action
                    sx: {
                      "& .MuiButtonBase-root:nth-child(even)": {
                        backgroundColor: "#007BFF", // Default background color for OK button
                        color: "#fff", // Default text color
                        "&:hover": {
                          backgroundColor: "#0056b3", // Hover background color
                          color: "#f0f0f0", // Hover text color
                        },
                      },
                      "& .MuiButtonBase-root:nth-child(odd)": {
                        backgroundColor: "red", // Default background color for OK button
                        color: "#fff", // Default text color
                        "&:hover": {
                          backgroundColor: "#cc0e0ef3", // Hover background color
                          color: "#f0f0f0", // Hover text color
                        },
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
            <MyTextField
              label="Location(e.g, Kitchen, Lounge etc)"
              sx={color}
            />
          </div>
          <div className="flex gap-2">
            <MyTextField label="Address" sx={color} />
            <MyTextField label="Client" sx={color} />
          </div>
          <div>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Were there witnesses to this incident?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </div>
          <div>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Type of Incident?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={typeOfIncident}
            >
              <FormControlLabel
                value="Act of Violence"
                control={<Radio />}
                label="Act of Violence"
              />
              <FormControlLabel
                value="Property Damage"
                control={<Radio />}
                label="Property Damage"
              />
              <FormControlLabel
                value="Accident"
                control={<Radio />}
                label="Accident"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            {other && <MyTextField label="Other" sx={color} />}
          </div>
          <div>
            <MyTextField
              label="Details of Incident"
              multiline
              className="w-full md:w-4/6"
              rows={4}
              sx={color}
            />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date of Report" slots={slots} />
            </LocalizationProvider>
          </div>
          <div className="w-full text-right">
            <Button variant="contained">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
