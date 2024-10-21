import { DataGrid, GridFooter, GridToolbar } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";
import { staffs } from ".";
import { useState } from "react";
import { Button } from "@mui/material";

const Staffs = () => {
  const [selectedRows, setSelectedRows] = useState(0);
  const [allStaffs, setAllStaffs] = useState(staffs);
  const [selectedRow, setSelectedRow] = useState({});

  const switchStatus = (e, row) => {
    const updatedStaffs = allStaffs.map(staff => staff.id === row.id ? { ...staff, isActive: e.target.checked } : staff);
    setAllStaffs(updatedStaffs);
    setSelectedRow(updatedStaffs.find(staff => staff.id === row.id));
  };

  const cols = [
    { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
    {
      field: "firstName",
      headerName: "First Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "role",
      headerName: "Role",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "address",
      headerName: "Address",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "isActive",
      headerName: "Status",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Switch
          inputProps={{
            "aria-label": "status",
          }}
          checked={params.row.isActive}
          color="success"
          onChange={(e) => switchStatus(e, params.row)}
        />
      ),
    },
  ];

  return (
    <div className="adminLayout">
      <div className="flex flex-col flex-1 gap-4 w-full">
        <DataGrid
          rows={allStaffs}
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
          sx={{
            "& .css-apdauw-MuiButtonBase-root-MuiButton-root": {
              display: "none",
            },
            ".css-1654zhx-MuiFormControl-root-MuiTextField-root-MuiDataGrid-toolbarQuickFilter .MuiInputBase-input":
              {
                color: "black",
                fontSize: "13px",
              },
            "& .MuiDataGrid-footerContainer": {
              border: "none",
            },
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          slots={{
            toolbar: (props) => (
              <div className="flex justify-between items-center">
                <p className="text-xl pl-1">Staffs</p>
                <GridToolbar {...props} />
              </div>
            ),
            footer: (props) => (
              <div className="flex gap-2 justify-center md:justify-between items-center px-2 flex-col lg:flex-row border-t-2">
                {selectedRows > 0 && (
                  <div className="flex gap-2 lg:p-2 flex-1 items-center mt-5 lg:mt-0">
                    <p>{selectedRows} Selected</p>
                    {selectedRows > 1 || !selectedRow.isActive || (
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
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
          hideFooterSelectedRowCount
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </div>
    </div>
  );
};

export default Staffs;
