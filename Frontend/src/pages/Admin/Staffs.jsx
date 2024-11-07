import { DataGrid, GridFooter, GridRow, GridToolbar } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Button, Divider } from "@mui/material";
import { useGetAllStaffsQuery } from "../../../services/api";
import { Link } from "react-router-dom";

const Staffs = () => {
  const { data, error, isLoading } = useGetAllStaffsQuery();
  const [selectedRows, setSelectedRows] = useState(0);
  const [allStaffs, setAllStaffs] = useState();
  const [selectedRow, setSelectedRow] = useState({});
  const [expandedRow, setExpandedRow] = useState(null);

  console.log(data);
  console.log(error);
  console.log(isLoading);

  useEffect(() => {
    setAllStaffs(data);
  }, [data]);

  const switchStatus = (e, row) => {
    // e.stopPropagation();
    const updatedStaffs = allStaffs.map((staff) =>
      staff.id === row.id ? { ...staff, isActive: e.target.checked } : staff
    );
    setAllStaffs(updatedStaffs);
    setSelectedRow(updatedStaffs.find((staff) => staff.id === row.id));
  };

  const handleWrapperClick = (e) => {
    e.stopPropagation();
  };

  const handleRowClick = (params) => {
    const rowId = params.id;
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
  };

  const showShift = (params) => {
    console.log("routing to shift");
    console.log(params);
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
        <div onClick={handleWrapperClick}>
          <Switch
            inputProps={{
              "aria-label": "status",
            }}
            checked={params.row.isActive}
            color="success"
            onChange={(e) => switchStatus(e, params.row)}
          />
        </div>
      ),
    },
  ];

  const shiftCols = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      renderCell: (params) => {
        return (
          <Link
            className="underline hover:text-red-500"
            to={"../shifts"}
            state={{ searchTerm: params.row.id }}
          >
            {params.row.id}
          </Link>
        );
      },
    },
    {
      field: "clientId",
      headerName: "Client",
      width: 130,
      renderCell: (params) => {
        return (
          <Link
            className="underline hover:text-red-500"
            to={"../clients"}
            state={{ searchTerm: params.row.clientId }}
          >
            {params.row.clientId}
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
  ];

  Staffs.propTypes = {
    row: PropTypes.object,
  };

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
            "& .MuiDataGrid-row": {
              bgcolor: "#e2fff5",
              borderRadius: "5px",
              cursor: "pointer",
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
                      <Divider textAlign="left">Shifts</Divider>
                      <DataGrid
                        rows={props.row?.shifts}
                        columns={shiftCols}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                          },
                        }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                        onRowClick={showShift}
                        disableRowSelectionOnClick
                      />
                    </div>
                  </div>
                )}
              </>
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
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default Staffs;
