import { useContext } from "react";
import { NotesContext } from "../Store/NotesContext";
import HeaderMessage from "../Components/HeaderMessage";
import NotesCard from "../Components/NotesCard";

const Archive = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const handleUnArchive = (e, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isArchived: false } : note,
      ),
    );
  };

  return (
    <div className="p-5 h-screen grid grid-rows-[auto_auto_1fr] lg:gap-0.5 gap-4 lg:pb-1 pb-18">
      {/* HeaderMessage Comp */}
      <HeaderMessage mainMessage={"Archive 📦"} />

      <div className="scrollbar-none overflow-y-auto min-h-0 grid md:grid-cols-2 mt-4  gap-4">
        {notes.filter((note) => note.isArchived).length == 0 ? (
          <div className="w-full">
            <h3 className="font-['sora'] text-slate-400 text-xl capitalize">
              {" "}
              no note achived. . .
            </h3>
          </div>
        ) : (
          notes
            .filter((note) => note.isArchived)
            .map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                handleYellowBtn={handleUnArchive}
                yellowBtnName={"Restore"}
                redBtnName={"Trash"}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Archive;
