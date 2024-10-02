import { Avatar, Divider, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import Logout from "@mui/icons-material/Logout";
import SummarizeSharpIcon from "@mui/icons-material/SummarizeSharp";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AccountOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const location = useLocation();
  const curPath = location.pathname;

  const dataToPass = { currentPath: curPath };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <Tooltip title="Account Settings">
        <div className="flex gap-2 cursor-pointer" onClick={handleClick}>
          <AccountCircleSharpIcon />
          <p>Mark Ogilo</p>
        </div>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to={"/staff/account"} state={dataToPass}>
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <Link to={"/staff/shifts"} state={dataToPass}>
          <MenuItem onClick={handleClose}>
            <Avatar>
              <CalendarMonthSharpIcon />
            </Avatar>
            My Shifts
          </MenuItem>
        </Link>
        <Divider />
        <Link to={"/staff/report"} state={dataToPass}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AssignmentSharpIcon fontSize="small" />
            </ListItemIcon>
            Report Incident
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SummarizeSharpIcon fontSize="small" />
          </ListItemIcon>
          My Statements
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AccountOptions;
