import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import MainLayout from "./Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
