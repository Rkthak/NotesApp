import { useContext } from "react";
import { NotesContext } from "../Store/NotesContext";
import { Link } from "react-router";

const NotesCard = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const handleArchive = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isArchived: true } : note,
      ),
    );
  };

  return (
    <>
      {notes.filter((note) => !note.isArchived).length == 0 ? (
        <div className="w-full">
          <h3 className="font-['sora'] text-slate-50 font-semibold text-2xl capitalize">
            {" "}
            no note availble. . .
          </h3>
          <p className=" text-slate-400 font-['inter'] mt-1.5 mb-4">
            Click add + button to create a note.
          </p>
        </div>
      ) : (
        notes
          .filter((note) => !note.isArchived)
          .map((note) => (
            <Link to={`/note-${note.id}`} key={note.id}>
              <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-3 h-fit  max-w-80 relative">
                <div className="">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="font-['sora'] text-slate-50 font-semibold text-2xl capitalize">
                      {note.isPinned ? <span>📌</span> : ""}
                      {note.title.length > 15
                        ? note.title.slice(0, 15) + " ..."
                        : note.title}
                    </h2>
                    <span className=""> 📌</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="font-['sora'] text-sm text-sky-500 px-3 py-1 whitespace-nowrap bg-slate-800 rounded-full border-2 border-sky-500">
                      #
                      {note.tag.length > 8
                        ? note.tag.slice(0, 6) + "..."
                        : note.tag}
                    </button>

                    <span className="text-slate-400 font-['inter'] ml-4">
                      {note.createdAt}
                    </span>
                  </div>

                  <p className=" text-slate-400 font-['inter'] mt-1.5 mb-4">
                    {note?.description.toString().length > 30
                      ? note.description.toString().slice(0, 30) + " . . ."
                      : note.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <button className="font-soro text-slate-50 px-4 py-1 border-2 border-slate-700 bg-slate-900 font-semibold cursor-pointer rounded-xl">
                      edit
                    </button>
                    <div className="">
                      <button
                        className="font-soro text-slate-50 px-4 py-1 border-2 border-amber-400 bg-amber-400 font-semibold cursor-pointer rounded-xl ml-3 "
                        onClick={(e) => {
                          handleArchive(e, note.id);
                        }}
                      >
                        Archive
                      </button>
                      <button className="font-soro text-slate-50 px-4 py-1 border-2 border-red-400 bg-red-400 font-semibold cursor-pointer rounded-xl ml-3">
                        Trash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
      )}
    </>
  );
};

export default NotesCard;
