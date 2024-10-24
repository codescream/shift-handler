import { DataGrid, GridFooter, GridRow, GridToolbar } from "@mui/x-data-grid";
import { PropTypes } from "prop-types";
import { shifts, staffs } from "./index";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { clients } from "./index";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MyTextField } from "../../components";

const NewShift = (props) => {
  const { open, onClose } = props;
  const [client, setClient] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [staff, setStaff] = useState("");
  const [time, setTime] = useState(null);

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

  const createShift = (e) => {
    e.preventDefault();
    alert("Create Shift");
  };

  const sx = {
    "& .MuiInputBase-input": {
      color: "black",
    },
  };

  NewShift.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className="text-center">New Shift</DialogTitle>
      <form className="px-8 mb-2" onSubmit={createShift}>
        <div className="flex gap-2 mb-2">
          <MyTextField
            label="Client"
            required
            select
            onChange={(e) => setClient(e.target.value)}
            value={client}
            className="flex-1"
            sx={sx}
          >
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.name}>
                {client.name}
              </MenuItem>
            ))}
          </MyTextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Shift Date"
              slots={slots}
              className="flex-1"
              slotProps={{
                textField: {
                  required: true,
                },
              }}
            />
            <TimePicker
              label="Shift Time"
              slots={slots}
              className="flex-1"
              value={time}
              slotProps={{
                actionBar: {
                  actions: ["cancel", "accept"],
                  // OK button is the 'accept' action
                  sx: {
                    "& .MuiButtonBase-root:nth-of-type(even)": {
                      backgroundColor: "#007BFF", // Default background color for OK button
                      color: "#fff", // Default text color
                      "&:hover": {
                        backgroundColor: "#0056b3", // Hover background color
                        color: "#f0f0f0", // Hover text color
                      },
                    },
                    "& .MuiButtonBase-root:nth-of-type(odd)": {
                      backgroundColor: "red", // Default background color for OK button
                      color: "#fff", // Default text color
                      "&:hover": {
                        backgroundColor: "#cc0e0ef3", // Hover background color
                        color: "#f0f0f0", // Hover text color
                      },
                    },
                  },
                },
                textField: {
                  required: true,
                },
              }}
            />
          </LocalizationProvider>
          {/* <MyTextField label="Subject" sx={sx} />
          <MyTextField label="Message" multiline rows={8} sx={sx} /> */}
        </div>
        <div className="flex gap-2 mb-2">
          <MyTextField
            label="Type"
            value={type}
            select
            onChange={(e) => setType(e.target.value)}
            sx={sx}
            className="flex-1"
            required
          >
            <MenuItem value="AM">AM</MenuItem>
            <MenuItem value="PM">PM</MenuItem>
          </MyTextField>
          <MyTextField
            className="flex-1"
            type="number"
            label="Duration"
            required
            sx={sx}
          />
          <MyTextField
            className="flex-1"
            type="number"
            label="Amount"
            required
            sx={sx}
          />
        </div>
        <div className="flex gap-2 mb-2">
          <MyTextField
            value={staff}
            label="Staff"
            className="flex-1"
            sx={sx}
            select
            onChange={(e) => {
              setStaff(e.target.value);
              e.target.value ? setStatus("filled") : setStatus("");
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {staffs.map((staff) => (
              <MenuItem
                key={staff.id}
                value={`${staff.firstName} ${staff.lastName}`}
              >
                {`${staff.firstName} ${staff.lastName}`}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            value={status}
            label="Status"
            sx={sx}
            select
            className="flex-1"
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="filled">Filled</MenuItem>
            <MenuItem value="ongoing">Ongoing</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
            <MenuItem value="finished">Finished</MenuItem>
          </MyTextField>
        </div>
        <div className="flex gap-2 mb-2">
          <MyTextField label="Notes" multiline fullWidth rows={5} sx={sx} />
        </div>
        <div className="text-right">
          <Button
            type="submit"
            variant="contained"
            className="flex items-center gap-1 h-fit"
          >
            <p>Create</p>
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

const Shifts = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState(0);
  const [selectedRow, setSelectedRow] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cols = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      // width: 200,
    },
    {
      field: "location",
      headerName: "Location",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "time",
      headerName: "Time",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "type",
      headerName: "Type",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "duration",
      headerName: "Duration",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "client",
      headerName: "Client",
      align: "center",
      headerAlign: "center",
      width: 200,
      // renderCell: (params) => {
      //   return params.row.client.email;
      // },
      valueGetter: (value, row) => {
        return row.client.name;
      },
    },
    // {
    //   field: "staffId",
    //   headerName: "Staff ID",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    // },
    // {
    //   field: "amount",
    //   headerName: "Amount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    // },
    // {
    //   field: "paid",
    //   headerName: "Paid",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    // },
    {
      field: "status",
      headerName: "Status",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    // {
    //   field: "notes",
    //   headerName: "Notes",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    //   renderCell: (params) => {
    //     return params.row.notes[0]?.note ? params.row.notes[0]?.note : "-"
    //   }
    // },
    // {
    //   field: "clockin",
    //   headerName: "Clock In",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    //   renderCell: (params) =>{
    //     return params.row.clockin[0]?.time ? params.row.clockin[0]?.time : "-"
    //   }
    // },
    // {
    //   field: "clockout",
    //   headerName: "Clock Out",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    //   renderCell: (params) => {
    //     return params.row.clockout[0]?.time ? params.row.clockout[0]?.time : "-"
    //   }
    // },
  ];
  const handleRowClick = (params) => {
    console.log(params);
    const rowId = params.id;
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
  };

  Shifts.propTypes = {
    row: PropTypes.object.isRequired,
  };

  return (
    <div className="adminLayout">
      <div className="flex flex-col flex-1 gap-4 w-full">
        <DataGrid
          rows={shifts}
          columns={cols}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          onRowSelectionModelChange={(rows, details) => {
            if (rows.length === 1) {
              setSelectedRow(details.api.getRowParams(rows[0]).row);
            }

            setSelectedRows(rows.length);
          }}
          slots={{
            toolbar: (props) => (
              <div className="flex justify-between items-center">
                <p className="text-xl pl-1">Shifts</p>
                <GridToolbar {...props} />
              </div>
            ),
            row: (props) => (
              <>
                <GridRow {...props} />
                {expandedRow === props.row.id && (
                  <div
                    // sx={{
                    //   backgroundColor: "#c9c8c8",
                    //   padding: 2,
                    //   height: "fit-content",
                    //   width: "fit-content",
                    //   minWidth: "400px",
                    //   maxWidth: "400px",
                    // }}
                    className="p-4 h-fit w-full bg-[#c9c8c8]"
                  >
                    <div className="w-fit sticky left-4">
                      <Divider textAlign="left" className="md:w-full">
                        Assigned Staff
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        {props.row.staffId}
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Shift Amount
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        ${props.row.amount}.00
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Amount Paid
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        ${props.row.paid}.00
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Clock In
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        {props.row.clockin[0]?.time || "N/A"}
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Clock Out
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        {props.row.clockout[0]?.time || "N/A"}
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Notes
                      </Divider>
                      <div className="h-24 overflow-auto w-fit px-2 min-w-96">
                        <Table className="w-fit">
                          <TableBody>
                            {props.row.notes?.map((note, i) => {
                              return (
                                <TableRow
                                  key={i}
                                  className="flex"
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {note.staffId}:
                                  </TableCell>
                                  <TableCell align="left" className="w-[250px]">
                                    {note.note}
                                  </TableCell>
                                  <TableCell align="left">
                                    {dayjs(note.datetime).format(
                                      "YYYY-MM-DD h:mma"
                                    )}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ),
            footer: (props) => (
              <div className="flex gap-2 justify-center md:justify-between items-center px-2 flex-col lg:flex-row border-t-2">
                {selectedRows > 0 && (
                  <div className="flex gap-2 flex-1 items-center mt-5 lg:mt-0">
                    <p>{selectedRows} Selected</p>
                    {selectedRows > 1 ||
                      ["finished", "closed"].includes(selectedRow.status) || (
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                        >
                          Edit
                        </Button>
                      )}
                    <Button color="error" variant="contained" size="small">
                      Del
                    </Button>
                  </div>
                )}
                <GridFooter {...props} className="flex-1" />
              </div>
            ),
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          sx={{
            ".css-1654zhx-MuiFormControl-root-MuiTextField-root-MuiDataGrid-toolbarQuickFilter .MuiInputBase-input":
              {
                color: "black",
                fontSize: "13px",
              },
            "& .css-apdauw-MuiButtonBase-root-MuiButton-root": {
              display: "none",
            },
            ".css-de9k3v-MuiDataGrid-selectedRowCount": {
              visibility: "visible",
            },
            ".MuiDataGrid-selectedRowCount": {
              display: "block",
              height: "fit-content",
              width: "fit-content",
            },
            ".css-16mfp94-MuiTablePagination-root .MuiTablePagination-input": {
              display: "block",
            },
            ".css-16mfp94-MuiTablePagination-root .MuiTablePagination-selectLabel":
              {
                display: "block",
              },
            ".MuiInputBase-root > .css-16mfp94-MuiTablePagination-root, .MuiTablePagination-selectLabel":
              {
                display: "block",
              },
            "& .MuiDataGrid-footerContainer": {
              border: "none",
            },
            "& .MuiDataGrid-row": {
              bgcolor: "#e2fff5",
              borderRadius: "5px",
              cursor: "pointer",
            },
          }}
          hideFooterSelectedRowCount
          // disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleRowClick}
        />
      </div>
      <div className="h-fit p-2 text-right bg-slate-500 rounded-sm">
        <Button variant="contained" onClick={handleClickOpen}>
          New Shift
        </Button>
      </div>
      <NewShift open={open} onClose={handleClose} />
    </div>
  );
};

export default Shifts;
