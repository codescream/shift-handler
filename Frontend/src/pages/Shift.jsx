import {
  Button,
  Collapse,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
import { GoBack } from "../components";
import MyTextField from "../components/MyTextField";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(4n+3)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(4n+1)": {
    backgroundColor: "#dbeafe",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



const Row = (props) => {
  const [open, setOpen] = useState(false);
  const { row } = props;

  Row.propTypes = {
    row: PropTypes.object
  }
  
  return (
    <>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell align="right" component="th" scope="row">
          {row.date_time}
        </StyledTableCell>
        <StyledTableCell align="right">
          <p className="w-14 md:w-32 truncate">{row.case_type}</p>
        </StyledTableCell>
        <StyledTableCell align="right">
          <p className="w-20 md:w-32 truncate">{row.notes}</p>
        </StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="bg-gray-400 text-left flex flex-col gap-2 p-2">
              <p>Date: {row.date_time}</p>
              <p>Case: {row.case_type}</p>
              <Divider textAlign="left">Notes</Divider>
              <p className="overflow-y-auto max-h-24">{row.notes}</p>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Shift = () => {
  const location = useLocation();
  const { currentPath, owned } = location.state || {};

  console.log(currentPath);
  console.log(owned);

  function createData(date_time, case_type, notes) {
    return { date_time, case_type, notes };
  }

  const rows = [
    createData(
      "17/05/2024 2pm",
      "Violence",
      "The client grew restless and lunged at me."
    ),
    createData(
      "17/05/2024 2pm",
      "Accident",
      "The client grew restless and lunged at me."
    ),
    createData(
      "17/05/2024 2pm",
      "Test",
      `The client grew restless and lunged at me Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa consectetur, quo, quidem tempore eveniet fugiat velit, voluptas reiciendis a voluptatem cumque architecto accusantium corporis! Cum consectetur non vel qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      \n\n\n
      Voluptatum laboriosam incidunt eveniet molestiae natus corporis expedita. Enim, ex soluta et tenetur perspiciatis repudiandae cum inventore deleniti similique, minima, harum cupiditate.`
    ),
  ];

  return (
    <div className="w-full p-1 sm:p-0 flex flex-col flex-1 gap-5 items-center">
      <div className="w-full sm:w-3/4 flex-1 flex flex-col items-center gap-4">
        <div className="w-full">
          <GoBack path={currentPath} />
        </div>
        <div className="flex flex-col lg:flex-row h-fit w-full gap-4">
          <div className="w-full lg:w-1/2 bg-blue-300 p-4 rounded-md flex-1 h-fit">
            <p>ID:</p>
            <p>Location:</p>
            <p>Date and Time:</p>
            <p>Type:</p>
            <p>Duration:</p>
            <p>Client:</p>
            <p>Status:</p>
            <p>Notes:</p>
            {owned ? (
              <div className="flex items-center gap-2">
                Distance covered:
                <TextField
                  name="mileage"
                  type="number"
                  size="small"
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
            ) : (
              <div className="w-full text-right">
                <Button variant="contained">Bid</Button>
              </div>
            )}
          </div>

          {owned && (
            <form onSubmit={() => {}} className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col lg:flex-row justify-between gap-2">
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell />
                        <StyledTableCell align="center">
                          Date/Time
                        </StyledTableCell>
                        <StyledTableCell align="center">Case</StyledTableCell>
                        <StyledTableCell align="center">Notes</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <Row key={index} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              {/* <div>
                <p>No case notes added</p>
              </div> */}
              <div className="flex gap-2 w-full justify-between">
                <div className="">
                  <MyTextField label="Case #" name="case_no" />
                </div>
                <div>
                  <p>Add Case Notes +</p>
                </div>
              </div>
              <div>
                <MyTextField
                  name="notes"
                  label="Notes"
                  multiline
                  minRows={5}
                  fullWidth
                />
              </div>
              <div className="w-full text-right">
                <Button variant="contained" className="w-full sm:w-fit">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="w-full h-20 bg-gray-400 flex items-center justify-between px-2">
        <Button variant="contained" color="error">
          Report
        </Button>
        {owned && (
          <div className="flex gap-3">
            <Button variant="contained" color="success">
              Clock In
            </Button>
            <Button variant="contained" color="warning">
              Clock Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shift;
