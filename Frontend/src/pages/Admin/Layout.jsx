import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import { Navbar, Sidebar } from "../../components";
import { Badge, Button, IconButton } from "@mui/material";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <span className="absolute top-9 left-[106px] text-xs">Admin</span>

      <div className="w-fit flex items-center">
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <Badge
            badgeContent={2}
            overlap="circular"
            color="error"
            showZero
            max={99}
            // sx={{
            //   "& .MuiBadge-badge": {
            //     // backgroundColor: "black",
            //     // width: "fit-content",
            //     // height: "fit-content",
            //     borderRadius: "80%",
            //     padding: "0px",
            //     margin: "0px",
            //     fontSize: "12px"
            //   }
            // }}
          >
            <NotificationsSharpIcon fontSize="small" />
          </Badge>
        </IconButton>
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <Badge
            badgeContent={2}
            overlap="circular"
            color="error"
            showZero
            max={99}
          >
            <LanguageSharpIcon fontSize="small" />
          </Badge>
        </IconButton>
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <SettingsSharpIcon fontSize="small" />
        </IconButton>
        <Button
          sx={{
            color: "white",
          }}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar>
        <Header />
      </Navbar>
      <div className="flex flex-1 overflow-auto">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
