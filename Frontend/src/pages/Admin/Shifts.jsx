import { DataGrid, GridFooter, GridRow, GridToolbar } from "@mui/x-data-grid";
import { PropTypes } from "prop-types";
import { staffs } from "./index";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";
import { clients } from "./index";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  GoogleMap,
  useJsApiLoader,
  useGoogleMap,
} from "@react-google-maps/api";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MyTextField } from "../../components";
import { useGetAllShiftsQuery } from "../../../services/api";
import { useLocation } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// const center = {
//   lat: 43.6319, // Example coordinates for San Francisco
//   lng: -79.3716,
// };

const CustomMarker = ({ position }) => {
  const map = useGoogleMap();

  console.log(position);

  CustomMarker.propTypes = {
    position: PropTypes.object.isRequired,
  };

  useEffect(() => {
    let marker;

    const loadMarkerLibrary = async () => {
      if (map && position) {
        // Dynamically import the marker library
        const { AdvancedMarkerElement } =
          await window.google.maps.importLibrary("marker");

        // const iconDiv = document.createElement('div');
        // iconDiv.style.width = '40px';
        // iconDiv.style.height = '40px';
        // iconDiv.style.backgroundImage = 'url("https://maps.google.com/mapfiles/ms/icons/blue-dot.png")'; // Replace with your icon URL
        // // iconDiv.innerHTML = "📍"; // specify an html element
        // // iconDiv.style.backgroundColor = "white";
        // iconDiv.style.backgroundSize = 'cover';
        // iconDiv.style.borderRadius = '50%';

        marker = new AdvancedMarkerElement({
          position,
          map,
          // content: iconDiv
        });
      }
    };

    loadMarkerLibrary();

    return () => {
      if (marker) {
        marker.map = null; // Remove marker on unmount
      }
    };
  }, [map, position]);

  return null;
};

const NewShift = (props) => {
  const { open, onClose, row, edit } = props;
  const [formData, setFormData] = useState(row);
  const [isMapVisible, setIsMapVisible] = useState(false);
  // const [currentPosition, setCurrentPosition] = useState(center)

  // useEffect(() => {
  //   // Fetch the user's current position
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setCurrentPosition({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         });
  //       },
  //       () => alert('Geolocation is not supported by this browser.')
  //     );
  //   }
  // }, []);

  // Load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY, // Replace with your API key
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setIsMapVisible(isExpanded ? panel : false);
  };

  console.log(formData);
  // console.log(row);

  // Cleanup function when the map is unmounted
  // const handleMapUnmount = useCallback((map) => {
  //   console.log("Map is unmounted", map);
  //   // Nullify map instance and perform additional cleanup
  //   map = null;
  // }, []);

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
    edit: PropTypes.bool,
    row: PropTypes.object,
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className="text-center">
        {edit ? "Edit " : "New"} Shift
      </DialogTitle>
      <form className="px-8 mb-2" onSubmit={createShift}>
        <div className="flex gap-2 mb-2">
          <MyTextField
            label="Client"
            required
            name="client"
            select
            onChange={(e) =>
              setFormData({
                ...row,
                client: { ...row.client, name: e.target.value },
              })
            }
            value={`${row?.client?.name}`}
            className="flex-1"
            sx={sx}
          >
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.name}>
                {client?.name}
              </MenuItem>
            ))}
          </MyTextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Shift Date"
              slots={slots}
              value={dayjs(row.date)}
              name="date"
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
              value={dayjs(`${row.date}T${row.time}`)}
              name="time"
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
            value={row.type}
            name="type"
            select
            onChange={(e) => setFormData({ ...row, type: e.target.value })}
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
            name="duration"
            value={row.duration}
            onChange={(e) => setFormData({ ...row, duration: e.target.value })}
            required
            sx={sx}
          />
          <MyTextField
            className="flex-1"
            type="number"
            label="Amount"
            name="amount"
            value={row.amount}
            onChange={(e) => setFormData({ ...row, amount: e.target.value })}
            required
            sx={sx}
          />
        </div>
        <div className="flex gap-2 mb-2">
          <MyTextField
            value={row.staffId}
            label="Staff"
            className="flex-1"
            sx={sx}
            select
            name="staff"
            onChange={(e) => {
              setFormData({ ...row, staff: e.target.value });
              setFormData({
                ...row,
                status: e.target.value ? "filled" : "",
              });
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {staffs.map((staff) => (
              <MenuItem key={staff.id} value={`${staff.username}`}>
                {`${staff.firstName} ${staff.lastName}`}
              </MenuItem>
            ))}
          </MyTextField>
          <MyTextField
            value={row.status}
            label="Status"
            name="status"
            sx={sx}
            select
            className="flex-1"
            onChange={(e) => setFormData({ ...row, status: e.target.value })}
            required
          >
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="filled">Filled</MenuItem>
            <MenuItem value="ongoing">Ongoing</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
            <MenuItem value="finished">Finished</MenuItem>
          </MyTextField>
        </div>
        <div className="flex flex-col gap-2">
          {row?.clockin?.length > 0 && (
            <Accordion
              expanded={isMapVisible === "clockin"}
              onChange={handleAccordionChange("clockin")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Clock In:
              </AccordionSummary>
              <AccordionDetails>
                {row?.clockin?.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex justify-center">
                        {isMapVisible && isLoaded ? (
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={item.coordinates}
                            zoom={12}
                            // onUnmount={handleMapUnmount}
                            options={{ mapId: import.meta.env.VITE_MAP_ID }}
                          >
                            <CustomMarker position={item.coordinates} />
                          </GoogleMap>
                        ) : (
                          <p>Map will display here when expanded.</p>
                        )}
                      </div>
                      <p>
                        Time:{" "}
                        {dayjs(`${row.date}T${row.time}`).format("hh:mm A")}
                      </p>
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          )}
          {row?.clockout?.length > 0 && (
            <Accordion
              expanded={isMapVisible === "clockout"}
              onChange={handleAccordionChange("clockout")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Clock Out
              </AccordionSummary>
              <AccordionDetails>
                {row?.clockout?.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex justify-center">
                        {isMapVisible && isLoaded ? (
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={item.coordinates}
                            zoom={12}
                            // onUnmount={handleMapUnmount}
                            options={{ mapId: import.meta.env.VITE_MAP_ID }}
                          >
                            <CustomMarker position={item.coordinates} />
                          </GoogleMap>
                        ) : (
                          <p>Map will display here when expanded.</p>
                        )}
                      </div>
                      <p>
                        Time:{" "}
                        {dayjs(`${row.date}T${row.time}`).format("hh:mm A")}
                      </p>
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          )}
        </div>
        <div className="flex flex-col gap-2 my-2">
          {row?.notes?.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Previous Notes
              </AccordionSummary>
              <AccordionDetails>
                <Table className="w-fit">
                  <TableBody>
                    {row.notes?.map((note, i) => {
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
                            {dayjs(note.datetime).format("YYYY-MM-DD h:mma")}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          )}
          <MyTextField label="Notes" multiline fullWidth rows={5} sx={sx} />
        </div>
        <div className="text-right">
          {edit ? (
            <Button
              type="submit"
              variant="contained"
              className="flex items-center gap-1 h-fit"
            >
              <p>Update</p>
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              className="flex items-center gap-1 h-fit"
            >
              <p>Create</p>
            </Button>
          )}
        </div>
      </form>
    </Dialog>
  );
};

const Shifts = () => {
  const location = useLocation();
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editRow, setEditRow] = useState({});
  const [filterModel, setFilterModel] = useState({
    items: [
      {
        field: "id",
        operator: "equals",
        value: "",
      },
    ],
  });

  useEffect(() => {
    if (location?.state && location?.state?.searchTerm) {
      setFilterModel({
        ...filterModel,
        items: [
          {
            field: "id",
            operator: "equals",
            value: location?.state?.searchTerm
              ? `${location?.state?.searchTerm}`
              : "",
          },
        ],
        quickFilterExcludeHiddenColumns: false,
        quickFilterValues: location?.state?.searchTerm
          ? [`${location?.state?.searchTerm}`]
          : [""],
      });
    }
  }, [location.state]);

  const handleFilterModelChange = () => {
    setFilterModel({
      items: [
        {
          field: "id",
          operator: "equals",
          value: "",
        },
      ],
    });
  };

  const [selectedRow, setSelectedRow] = useState({
    date: null,
    time: null,
    type: "",
    duration: "",
    client: { name: "" },
    notes: [{}],
    amount: "",
    staffId: "",
    status: "",
    clockin: [],
    clockout: [],
    id: null,
    paid: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = (type) => {
    if (type === "edit") {
      setEdit(true);
      setEditRow(selectedRow);
    } else {
      setEdit(false);
      setEditRow({
        date: null,
        time: null,
        type: "",
        duration: "",
        client: { name: "" },
        notes: [],
        amount: "",
        staffId: "",
        status: "",
        clockin: [],
        clockout: [],
        id: null,
        paid: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customFooter = () => {
    return (
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
                  onClick={() => handleClickOpen("edit")}
                >
                  Edit
                </Button>
              )}
            <Button color="error" variant="contained" size="small">
              Del
            </Button>
          </div>
        )}
        <GridFooter className="flex-1" />
      </div>
    );
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
        return `${row.client.firstName} ${row.client.lastName}`;
      },
    },
    {
      field: "staffId",
      headerName: "Staff ID",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "amount",
      headerName: "Amount",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "paid",
      headerName: "Paid",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
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

  const { data, error, isLoading } = useGetAllShiftsQuery();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  const handleRowClick = (params) => {
    const rowId = params.id;
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
  };

  Shifts.propTypes = {
    row: PropTypes.object,
  };

  return (
    <div className="adminLayout">
      <div className="flex flex-col flex-1 gap-4 w-full">
        <DataGrid
          rows={data}
          columns={cols}
          columnVisibilityModel={{
            staffId: false,
            amount: false,
            paid: false,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            // filter: {
            //   filterModel:
            //     filterModel
            //   ,
            // },
          }}
          filterModel={filterModel}
          onFilterModelChange={handleFilterModelChange}
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
                {expandedRow === props.row?.id && (
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
                        {props.row?.staff?.id}
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Shift Amount
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        ${props.row?.amount}.00
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Amount Paid
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        ${props.row?.paid}.00
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Clock In
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        {props.row?.clockin?.time || "N/A"}
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Clock Out
                      </Divider>
                      <p className="w-full md:w-1/2 pl-2">
                        {props.row?.clockout?.time || "N/A"}
                      </p>
                      <Divider textAlign="left" className="md:w-full">
                        Notes
                      </Divider>
                      <div className="h-24 overflow-auto w-fit px-2 min-w-96">
                        <Table className="w-fit">
                          <TableBody>
                            {Object.values(props.row?.notes)?.map((note, i) => {
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
                                    {note.name}:
                                  </TableCell>
                                  <TableCell align="left" className="w-[250px]">
                                    {note.notes}
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
            footer: customFooter,
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
        <Button variant="contained" onClick={() => handleClickOpen("create")}>
          New Shift
        </Button>
      </div>
      <NewShift open={open} onClose={handleClose} row={editRow} edit={edit} />
    </div>
  );
};

export default Shifts;
