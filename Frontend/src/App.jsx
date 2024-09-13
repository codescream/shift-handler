import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AccountSettings, Admin, Home, LandingPage, Login, Report, ResetPassword, Shift, Shifts } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shifts",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <Shifts />
        },
        {
          path: ":id",
          element: <Shift />
        }
      ]
    }, 
    {
      path: "/account",
      element: <AccountSettings />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/report",
      element: <Report />,
    },
    {
      path: "/landing",
      element: <LandingPage />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
