import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import MainLayout from "./Layout/MainLayout";
import { NotesContextProvider } from "./Store/NotesContext";
import OneNote from "./Pages/OneNote";
import EditeNote from "./Pages/EditeNote";
import { AlertContextProvider } from "./Store/AlertContext";
import AlertToast from "./Components/AlertToast";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/:id",
        element: <OneNote />,
      },
      {
        path: "/:id/edit",
        element: <EditeNote />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "trash",
        element: <Trash />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AlertContextProvider>
      <NotesContextProvider>
        <AlertToast />
        <RouterProvider router={Router} />
      </NotesContextProvider>
    </AlertContextProvider>
  );
};

export default App;
