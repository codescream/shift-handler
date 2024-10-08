import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import ForwardToInboxSharpIcon from "@mui/icons-material/ForwardToInboxSharp";
import { DataGrid, GridRow, GridToolbar } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { MyTextField } from "../../components";
import dayjs from "dayjs";
import { useState } from "react";

const NewAnnouncement = (props) => {
  const { open, onClose } = props;

  const sx = {
    "& .MuiInputBase-input": {
      color: "black",
    },
  };

  NewAnnouncement.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <div className="px-8 text-right mb-2">
        <DialogTitle className="text-center">New Announcement</DialogTitle>
        <div className="flex flex-col gap-2 mb-2">
          <MyTextField label="Subject" sx={sx} />
          <MyTextField label="Message" multiline rows={8} sx={sx} />
        </div>
        <Button variant="contained" className="flex items-center gap-1 h-fit">
          <p>Send</p>
          <ForwardToInboxSharpIcon fontSize="small" />
        </Button>
      </div>
    </Dialog>
  );
};

const Announcements = () => {
  const [open, setOpen] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (params) => {
    const rowId = params.id;
    setExpandedRow((prev) => (prev === rowId ? null : rowId));
  };

  const deleteAnnouncement = (e) => {
    e.stopPropagation() ;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cols = [
    { field: "subject", headerName: "Subject", flex: 1 },
    {
      field: "date_time",
      headerName: "Date_Time",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return dayjs(params.row.date_time).format("YYYY-MM-DD h:mma");
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      align: "right",
      renderCell: () => (
        <IconButton aria-label="delete" onClick={deleteAnnouncement}>
          <DeleteOutlineSharpIcon color="error" fontSize="small" />
        </IconButton>
      ),
    },
  ];
  const sampleAnnouncements = [
    {
      id: 1,
      subject: "Meeting",
      date_time: "2024-10-12T14:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 2,
      subject: "Holiday",
      date_time: "2024-09-14T01:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 3,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 4,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 5,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 6,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 7,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 8,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 9,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 10,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 11,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 12,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 13,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 14,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
    {
      id: 15,
      subject: "New Employee",
      date_time: "2024-09-11T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et omnis aliquid est! Porro voluptates doloribus, consectetur nemo modi, fuga ea tempora repellendus unde amet delectus nisi minus! Dolor, distinctio!",
    },
  ];

  const sorted = sampleAnnouncements.sort(
    (a, b) => dayjs(b.date_time).valueOf() - dayjs(a.date_time).valueOf()
  );

  Announcements.propTypes = {
    row: PropTypes.object.isRequired,
  };
  return (
    <div className="flex flex-col flex-1 bg-white text-black drop-shadow-xl p-2 h-full w-full justify-between overflow-auto">
      <div className="flex h-fit overflow-auto flex-col flex-1 gap-4">
        <DataGrid
          rows={sorted}
          columns={cols}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          sx={{
            "& .css-8yphpr": {
              display: "none",
            },
            ".css-1654zhx-MuiFormControl-root-MuiTextField-root-MuiDataGrid-toolbarQuickFilter .MuiInputBase-input":
              {
                color: "black",
                fontSize: "13px",
              },
            "& .MuiDataGrid-columnHeaders, .css-apdauw-MuiButtonBase-root-MuiButton-root":
              {
                display: "none",
              },
            "&, .MuiDataGrid-cell, .MuiDataGrid-columnHeaders": {
              border: "none",
            },
            "& .MuiDataGrid-row": {
              bgcolor: "#e2fff5",
              borderRadius: "5px",
              cursor: "pointer",
            },
            "& .MuiDataGrid-row:not(:first-of-type)": {
              marginTop: "15px",
            },
          }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          slots={{
            toolbar: (props) => (
              <div className="flex justify-between items-center">
                <p className="text-xl">Announcements</p>
                <GridToolbar {...props} />
              </div>
            ),
            row: (props) => (
              <>
                <GridRow {...props} />
                {expandedRow === props.row.id && (
                  <Box
                    sx={{
                      backgroundColor: "#f0f0f0",
                      padding: 2,
                      height: "fit-content",
                    }}
                  >
                    <Divider textAlign="left">Message</Divider>
                    <Collapse in={expandedRow === props.row.id} timeout={1000}>
                      {props.row.description}
                    </Collapse>
                  </Box>
                )}
              </>
            ),
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          // checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleRowClick}
          getRowHeight={(params) => {
            expandedRow === params.id ? 500 : null;
          }}
        />
      </div>
      <div className="h-fit p-2 text-right bg-slate-500 rounded-sm">
        <Button variant="contained" onClick={handleClickOpen}>
          New Announcement
        </Button>
      </div>
      <NewAnnouncement open={open} onClose={handleClose} />
    </div>
  );
};

export default Announcements;
