import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Statistics from "../pages/Statistics";
import Dashbord from "../pages/Dasbord";
import User from "../pages/User";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashbord />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

export default routes;
