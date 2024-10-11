import { DataGrid, GridFooter, GridRow, GridToolbar } from "@mui/x-data-grid";
import { PropTypes } from "prop-types";
import { shifts } from "./index";
import { useState } from "react";
import { Button, Divider } from "@mui/material";
import dayjs from "dayjs";

const Shifts = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState(0);
  const [selectedRow, setSelectedRow] = useState({});

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
      <div className="flex overflow flex-col flex-1 gap-4 w-full">
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
            
            if(rows.length === 1) {
              setSelectedRow(details.api.getRowParams(rows[0]).row)
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
                    <div className="w-96 md:w-full">
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
                      <div className="h-24 overflow-auto w-fit md:w-1/2 px-2">
                        {props.row.notes?.map((note, i) => {
                          return (
                            <div
                              key={i}
                              className="flex justify-between gap-2 pt-2 w-full"
                            >
                              <p>{note.staffId}:</p>
                              <p className="flex-1">{note.note}</p>
                              <p className="flex-1">
                                {dayjs(note.datetime).format(
                                  "YYYY-MM-DD h:mma"
                                )}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ),
            footer: (props) => (
              <div className="flex gap-2 justify-center md:justify-between items-center px-2 flex-col lg:flex-row">
                {selectedRows > 0 && (
                  <div className="flex gap-2 flex-1 items-center mt-5 lg:mt-0">
                    <p>{selectedRows} Selected</p>
                    {(selectedRows > 1 || ["finished", "closed"].includes(selectedRow.status)) || (
                      <Button color="primary" variant="contained" size="small">
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
              ".MuiInputBase-root > .css-16mfp94-MuiTablePagination-root, .MuiTablePagination-selectLabel": {
              display: "block",
            },
            "& .MuiDataGrid-footerContainer": {
              border: "none"
            },
            "& .MuiDataGrid-row": {
              bgcolor: "#e2fff5",
              borderRadius: "5px",
              cursor: "pointer",
            },
          }}
          hideFooterSelectedRowCount
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default Shifts;
