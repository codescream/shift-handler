import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AccountSettings, Admin, LandingPage, Login, Report, ResetPassword, Shift, Shifts } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  const Layout = () => {
   return(
    <div className="flex flex-col h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
   ) 
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "landing",
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
      path: "/report",
      element: <Report />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
