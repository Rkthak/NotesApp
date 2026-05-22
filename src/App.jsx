import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import MainLayout from "./Layout/MainLayout";
import { NotesContextProvider } from "./Store/NotesContext";
import OneNote from "./Pages/OneNote";
import EditeNote from "./Pages/EditeNote";

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
    <NotesContextProvider>
      <RouterProvider router={Router} />
    </NotesContextProvider>
  );
};

export default App;
