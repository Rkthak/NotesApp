import { useState } from "react";
import CreateNoteBtn from "../Components/CreateNoteBtn";
import CreateNoteForm from "../Components/CreateNoteForm";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const handleDisplayForm = () => {
    setShowForm(true);
  };
  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <CreateNoteBtn fxn={handleDisplayForm} />
      <CreateNoteForm showForm={showForm} fxn={handleHideForm} />
    </>
  );
};

export default Dashboard;
