import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NotesContext } from "../Store/NotesContext";
import HeaderMessage from "../Components/HeaderMessage";

const OneNote = () => {
  const { id } = useParams();
  const cardID = id.split("-")[1];
  const { notes, setNotes } = useContext(NotesContext);

  const [showActionBtns, setShowActionBtns] = useState(false);

  const handleShowActionBtns = (e) => {
    e.preventDefault();

    setShowActionBtns(!showActionBtns);
  };

  const handleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isArchived: true } : note,
      ),
    );
  };

  const handleTrash = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isTrashed: true } : note,
      ),
    );
  };

  const navigate = useNavigate();
  const handleEditNavigation = (id) => {
    navigate(`/note-${id}/edit`);
  };

  return (
    <div className="h-screen overflow-hidden">
      {notes.filter(
        (item) => item.id == cardID && !item.isArchived && !item.isTrashed,
      ).length === 0 ? (
        <div className="p-5 pb-24 lg:pb-5">
          <HeaderMessage mainMessage={" Note not found 📝"} />
          <h3 className="font-['sora'] text-slate-400 text-xl capitalize">
            it seems it might moved or deleted. . .
          </h3>
        </div>
      ) : (
        notes
          .filter(
            (item) => item.id == cardID && !item.isArchived && !item.isTrashed,
          )
          .map((item) => (
            <div
              key={item.id}
              className="h-full p-5 pb-24 lg:pb-5 grid grid-rows-[auto_auto_1fr]"
            >
              <div className="flex flex-col-reverse md:flex-row justify-between md:items-center mb-4 gap-4">
                <HeaderMessage mainMessage={`${item.title}`} />

                <p className="font-['inter'] bg-amber-300 px-4 py-1.5 rounded-2xl text-slate-950">
                  {item.isEdit
                    ? `edited on : ${item.editedAt}`
                    : `created at : ${item.createdAt}`}
                </p>
              </div>

              <div className="flex justify-between relative">
                <p className="text-sky-500 px-3 py-1 border-2 border-sky-500 max-w-fit rounded-full">
                  #{item.tag}
                </p>
                <div
                  className={`${showActionBtns ? "absolute right-0 top-13 block bg-slate-900 px-4" : "hidden"}`}
                >
                  <button
                    className="font-['sora'] block my-4 w-full text-slate-50 px-4 py-1 border-2 border-slate-700 bg-slate-900 font-semibold cursor-pointer rounded-xl"
                    onClick={() => {
                      handleEditNavigation(item.id);
                    }}
                  >
                    edit
                  </button>

                  <button
                    className="font-['sora'] block my-4 w-full text-slate-50 px-4 py-1 border-2 border-amber-400 bg-amber-400 font-semibold cursor-pointer rounded-xl"
                    onClick={() => {
                      handleArchive(item.id);
                    }}
                  >
                    Archive
                  </button>
                  <button
                    className="font-['sora'] block my-4 w-full text-slate-50 px-4 py-1 border-2 border-red-400 bg-red-400 font-semibold cursor-pointer rounded-xl "
                    onClick={() => {
                      handleTrash(item.id);
                    }}
                  >
                    Tarsh
                  </button>
                </div>
                <button
                  className="text-sky-500 px-3 py-1 border-2 border-sky-500 max-w-fit rounded-full cursor-pointer"
                  onClick={handleShowActionBtns}
                >
                  Actions
                </button>
              </div>
              <div className="overflow-y-auto mt-4 scrollbar-none">
                <p className="text-slate-400 text-justify font-['inter']">
                  {item.description}
                </p>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default OneNote;
