import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GoBack } from "../components";
import { useLocation } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 90,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "firstName",
    headerName: "First name",
    minWidth: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last name",
    minWidth: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    minWidth: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 19,
    test: "Test",
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Shifts = () => {
  const location = useLocation();
  const { currentPath } = location.state || {};
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full md:w-3/4 h-fit flex flex-col gap-2">
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
            },
          }}
          localeText={{
            footerRowSelected: (count) => {
              return (
                <div className="pt-2 flex md:pt-0 items-center justify-center gap-2 flex-wrap w-fit">
                  <p>{count} Selected</p>
                  <div className="flex gap-2">
                    <Button
                      sx={{ bgcolor: "red", color: "black" }}
                      variant="outlined"
                    >
                      Del
                    </Button>
                    {count < 2 && (
                      <Button
                        sx={{ bgcolor: "#1976d2", color: "black" }}
                        variant="outlined"
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
