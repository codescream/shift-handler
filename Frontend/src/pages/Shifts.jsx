import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GoBack } from "../components";
import { useLocation } from "react-router-dom";

const handleViewClick = () => {};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "type",
    headerName: "Type (AM/PM)",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "range",
    headerName: "Range (hours)",
    type: "number",
    width: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "view",
    headerName: "View",
    width: 100,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleViewClick(params.row.id)}
      >
        View
      </Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    date: "2024-09-24",
    time: "09:00",
    location: "New York",
    type: "AM",
    range: 8,
    status: "open",
    notes: "Morning shift",
  },
  {
    id: 2,
    date: "2024-09-25",
    time: "14:00",
    location: "Chicago",
    type: "PM",
    range: 6,
    status: "filled",
    notes: "Afternoon shift",
  },
  {
    id: 3,
    date: "2024-09-26",
    time: "18:00",
    location: "Los Angeles",
    type: "PM",
    range: 10,
    status: "ongoing",
    notes: "Evening shift",
  },
  {
    id: 4,
    date: "2024-09-27",
    time: "08:00",
    location: "Houston",
    type: "AM",
    range: 8,
    status: "closed",
    notes: "Day shift",
  },
  {
    id: 5,
    date: "2024-09-28",
    time: "10:00",
    location: "Phoenix",
    type: "AM",
    range: 7,
    status: "finished",
    notes: "Completed shift",
  },
  {
    id: 6,
    date: "2024-09-29",
    time: "16:00",
    location: "Philadelphia",
    type: "PM",
    range: 5,
    status: "open",
    notes: "Short evening shift",
  },
  {
    id: 7,
    date: "2024-09-30",
    time: "07:00",
    location: "San Antonio",
    type: "AM",
    range: 9,
    status: "filled",
    notes: "Early morning shift",
  },
  {
    id: 8,
    date: "2024-10-01",
    time: "12:00",
    location: "San Diego",
    type: "PM",
    range: 6,
    status: "ongoing",
    notes: "Midday shift",
  },
  {
    id: 9,
    date: "2024-10-02",
    time: "11:00",
    location: "Dallas",
    type: "AM",
    range: 8,
    status: "closed",
    notes: "Morning shift",
  },
  {
    id: 10,
    date: "2024-10-03",
    time: "20:00",
    location: "San Jose",
    type: "PM",
    range: 10,
    status: "finished",
    notes: "Night shift",
  },
];

const Shifts = () => {
  const location = useLocation();
  const { currentPath } = location.state || {};
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full md:w-4/5 h-[600px] flex flex-col gap-2">
        <div className="w-full px-2 md:px-0 flex justify-between items-end">
          <GoBack path={currentPath} />
          <p className="w-fit">All Shifts</p>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            ".css-16mfp94-MuiTablePagination-root .MuiTablePagination-selectLabel":
              {
                display: "block",
              },
            ".css-16mfp94-MuiTablePagination-root": {
              overflow: "hidden",
            },
            ".css-16mfp94-MuiTablePagination-root .MuiTablePagination-input": {
              display: "block",
            },
            ".MuiInputBase-root": {
              display: "block",
            },
            ".MuiDataGrid-selectedRowCount": {
              display: "block",
              height: "fit-content",
              width: "fit-content",
            },
            ".css-de9k3v-MuiDataGrid-selectedRowCount": {
              visibility: "visible",
            },
            "@media (max-width: 768px)": {
              ".MuiDataGrid-footerContainer": {
                display: "flex",
                flexDirection: "column",
              },
              marginX: "10px",
            },
          }}
          localeText={{
            footerRowSelected: (count) => {
              return (
                <div className="pt-4 flex md:pt-0 items-center justify-center gap-2 flex-wrap w-fit">
                  <p>{count} Selected</p>
                  <div className="flex gap-2">
                    <Button
                      color="error"
                      variant="contained"
                      size="small"
                    >
                      Del
                    </Button>
                    {count < 2 && (
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                </div>
              );
            },
          }}
          // slots={{
          //   footer: () => (
          //     <div className="flex-col flex md:flex-row items-center justify-between border-gray-300 border-t-2">
          //       {/* <GridRowCount localeText  /> */}
          //       <Box sx={{ pl: 2, display: "flex" }}>Your custom footer stuff</Box>
          //       <GridPagination sx={{
          //         width: 'fit-content',
          //         display: "flex",
          //         flexDirection: "column",
          //         overflow: "hidden",
          //         ".MuiTablePagination-selectLabel": {
          //           display: "block",
          //         },
          //         ".MuiInputBase-root": {
          //           display: "block",
          //         }
          //       }} />
          //     </div>
          //   ),
          // }}
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Shifts;
