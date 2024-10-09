import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import TimelineSharpIcon from "@mui/icons-material/TimelineSharp";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import Diversity3SharpIcon from "@mui/icons-material/Diversity3Sharp";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import AnnouncementSharpIcon from "@mui/icons-material/AnnouncementSharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import MarkEmailUnreadSharpIcon from "@mui/icons-material/MarkEmailUnreadSharp";
import DynamicFeedSharpIcon from "@mui/icons-material/DynamicFeedSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import ReportSharpIcon from "@mui/icons-material/ReportSharp";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const shutSidebar = () => {
    setOpen(prev => !prev);
  }

  const menus = [
    {
      menuheader: "Dashboard",
      list: [
        { icon: <HomeSharpIcon fontSize="small" />, label: "Home" },
        { icon: <TimelineSharpIcon fontSize="small" />, label: "Analytics" },
        { icon: <TrendingUpSharpIcon fontSize="small" />, label: "Sales" },
      ],
    },
    {
      menuheader: "Quick Menu",
      list: [
        { icon: <Diversity3SharpIcon fontSize="small" />, label: "Staffs" },
        { icon: <Diversity1SharpIcon fontSize="small" />, label: "Clients" },
        { icon: <CalendarMonthSharpIcon fontSize="small" />, label: "Shifts" },
        {
          icon: <AnnouncementSharpIcon fontSize="small" />,
          label: "Announcements",
        },
        { icon: <BarChartSharpIcon fontSize="small" />, label: "Incidents" },
      ],
    },
    {
      menuheader: "Notifications",
      list: [
        { icon: <MarkEmailUnreadSharpIcon fontSize="small" />, label: "Mail" },
        { icon: <DynamicFeedSharpIcon fontSize="small" />, label: "Feedback" },
        { icon: <MessageSharpIcon fontSize="small" />, label: "Messages" },
      ],
    },
    {
      menuheader: "Staff",
      list: [
        { icon: <ManageAccountsSharpIcon fontSize="small" />, label: "Manage" },
        { icon: <TimelineSharpIcon fontSize="small" />, label: "Analytics" },
        { icon: <ReportSharpIcon fontSize="small" />, label: "Reports" },
      ],
    },
  ];
  return (
    <div className={`bg-white w-fit min-w-fit ${!open && "md:w-[200px]"} pl-2 px-2 text-black text-xs flex flex-col justify-between items-center`}>
      <div className="w-fit text-left">
        {menus.map((menu, index) => {
          return (
            <div key={index} className="mt-3 ">
              <p className={`text-center ${!open && "md:text-left"}`}>{menu.menuheader}</p>
              <List component="div" disablePadding>
                {menu.list.map((item, index) => {
                  return (
                    <Link to={item.label.toLowerCase()} key={index}>
                      <Tooltip title={item.label} placement="left">
                        <ListItemButton
                          sx={{
                            py: 0,
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            height: "30px",
                            justifyContent: "center",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 12,
                              padding: 0,
                              display: "flex",
                              justifyItems: "center",
                            }}
                            className={`hidden ${!open && "md:block"}`}
                          />
                        </ListItemButton>
                      </Tooltip>
                    </Link>
                  );
                })}
              </List>
            </div>
          );
        })}
      </div>
      <div className="w-full hidden md:block text-center fixed bottom-0">
        <IconButton onClick={shutSidebar}>
          {
            open ? (
              <ArrowCircleRightSharpIcon />
            ) : (
              <ArrowCircleLeftSharpIcon />
            )
          }
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
