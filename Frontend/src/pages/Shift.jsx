import { Button, Chip, InputAdornment, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Shift = () => {
  return (
    <div className="w-full flex flex-col flex-1 gap-5 items-center">
      <div className="sm:w-full md:w-10/12 flex-1 px-2 flex flex-col items-center gap-4">
        <div className="w-full">
          <Link to={"/staff/shifts"}>
            <Chip
              icon={<ArrowBackIcon />}
              label="Back"
              color="primary"
              variant="outlined"
              sx={{
                "&: hover": {
                  color: "white"
                }
              }}
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row h-fit w-full px-10 gap-4">
          <div className="bg-blue-300 p-4 rounded-md flex-1 h-fit">
            <p>ID:</p>
            <p>Location:</p>
            <p>Date and Time:</p>
            <p>Type:</p>
            <p>Duration:</p>
            <p>Client:</p>
            <p>Status:</p>
            <p>Notes:</p>
            <div className="flex items-center gap-2">
              Distance covered:
              <TextField
                type="number"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">KM</InputAdornment>
                    ),
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "black",
                }}
              >
                Update
              </Button>
            </div>
          </div>
          <form onSubmit={() => {}} className="flex flex-col gap-2 flex-1 p-4">
            <div className="flex justify-between">
              <p>Date/Time</p>
              <p>Case</p>
              <p>Notes</p>
            </div>
            <div><p>No case notes added</p></div>
            <div className="flex gap-2 w-full justify-between">
              <div className="">
                <p>Case #</p>
                <TextField variant="outlined" />
              </div>
              <div>
                <p>Add Case Notes +</p>
              </div>
            </div>
            <div>
              <p>Notes:</p>
              <TextField 
                multiline
                minRows={5}
                variant="outlined"
                fullWidth
              />
            </div>
            <Button variant="outlined" fullWidth>Submit</Button>
          </form>
        </div>
      </div>
      <div className="w-full h-20 bg-gray-400 flex items-center justify-between px-2">
        <Button
          sx={{
            backgroundColor: "red",
            color: "black",
          }}
        >
          Report
        </Button>
        <div className="flex gap-3">
          <Button
            sx={{
              backgroundColor: "green",
              color: "black",
            }}
          >
            Clock In
          </Button>
          <Button
            sx={{
              backgroundColor: "#9b9b12",
              color: "black",
            }}
          >
            Clock Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shift;
