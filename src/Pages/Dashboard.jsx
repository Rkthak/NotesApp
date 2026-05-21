import { useState } from "react";
import CreateNoteBtn from "../Components/CreateNoteBtn";
import CreateNoteForm from "../Components/CreateNoteForm";
import NotesCard from "../Components/NotesCard";
import HeaderMessage from "../Components/HeaderMessage";

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
      <div className="p-5 h-screen grid grid-rows-[auto_auto_1fr] lg:gap-0.5 gap-4 lg:pb-1 pb-18">
        <div className="flex flex-wrap flex-col lg:flex-row gap-2">
          {/* HeaderMessage Comp */}
          <HeaderMessage
            mainMessage={"My Notes_🖊️"}
            secondryMessage={"Organize your thoughts💭 easily."}
          />

          <div className="flex-1 flex items-center justify-end">
            <input
              type="search"
              name=""
              id=""
              className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-800 rounded-2xl outline-0 border-2 lg:w-3/5  w-full border-slate-700"
              placeholder="Search notes.."
            />
          </div>
        </div>

        {/* notes card  */}

        <div className="scrollbar-none overflow-y-auto min-h-0 grid md:grid-cols-2  gap-4">
          <NotesCard />
        </div>
      </div>

      {/* form handling -- */}
      <CreateNoteBtn fxn={handleDisplayForm} />
      <CreateNoteForm
        showForm={showForm}
        setShowForm={setShowForm}
        handleHideForm={handleHideForm}
      />
    </>
  );
};

export default Dashboard;
