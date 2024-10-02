import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import { AccountHome, AccountSettings, Admin, Home, LandingPage, Login, Report, ResetPassword, Shift, Shifts } from "./pages";
import { Footer, Navbar } from "./components";
import { Button } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const Layout = () => {
   return(
    <div className="flex flex-col h-screen">
      <Navbar>
        <Link to={"/login"}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "black",
              "&:hover": {
                color: "white",
              }
            }}
          >
            Login
          </Button>
        </Link>
      </Navbar>
      <Outlet />
      { !authenticated && <Footer /> }
    </div>
   ) 
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        }
      ]
    },
    {
      path: "/staff",
      element: <AccountHome />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "shifts",
          element: <Shifts />
        },
        {
          path: "shifts/:id",
          element: <Shift />
        }, 
        {
          path: "account",
          element: <AccountSettings />,
        },
        {
          path: "report",
          element: <Report />,
        }
      ]
    },
    {
      path: "/admin",
      element: <Admin />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
