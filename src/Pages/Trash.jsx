import { useContext } from "react";
import { NotesContext } from "../Store/NotesContext";
import HeaderMessage from "../Components/HeaderMessage";
import NotesCard from "../Components/NotesCard";
import { AlertContext } from "../Store/AlertContext";

const Archive = () => {
  const { notes, setNotes } = useContext(NotesContext);

  //  alert ===>
  const { setShowAlert, setAlertMessage } = useContext(AlertContext);

  const handleRestore = (e, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isTrashed: false } : note,
      ),
    );

    // alert ===>
    setShowAlert(true);
    setAlertMessage("note restored..!");
  };

  const handleDelete = (e, id) => {
    setNotes(notes.filter((note) => note.id !== id));

    // alert ===>
    setShowAlert(true);
    setAlertMessage("note deleted..!");
  };

  return (
    <div className="p-5 h-screen grid grid-rows-[auto_auto_1fr] lg:gap-0.5  gap-4 lg:pb-1 pb-18">
      <HeaderMessage mainMessage={"Trash 🗑️"} />
      <div className="scrollbar-none overflow-y-auto min-h-0 grid md:grid-cols-2 lg:mt-4 gap-4">
        {notes.filter((note) => note.isTrashed).length == 0 ? (
          <div className="w-full">
            <h3 className="font-['sora'] text-slate-400 text-xl capitalize">
              {" "}
              no note there. . .
            </h3>
          </div>
        ) : (
          notes
            .filter((note) => note.isTrashed)
            .map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                handleYellowBtn={handleRestore}
                handleRedBtn={handleDelete}
                yellowBtnName={"Restore"}
                redBtnName={"Delete"}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Archive;
