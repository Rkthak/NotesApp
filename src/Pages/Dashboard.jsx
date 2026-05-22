import { useContext, useState } from "react";
import CreateNoteBtn from "../Components/CreateNoteBtn";
import CreateNoteForm from "../Components/CreateNoteForm";
import NotesCard from "../Components/NotesCard";
import HeaderMessage from "../Components/HeaderMessage";
import { NotesContext } from "../Store/NotesContext";
import { useNavigate } from "react-router";
import TagsBtn from "../Components/TagsBtn";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { notes, setNotes } = useContext(NotesContext);

  const [selectedTag, setSelectedTag] = useState("All");
  const filterBasedOnTag = notes
    .filter((note) => {
      if (selectedTag == "All") return !note.isArchived && !note.isTrashed;

      return note.tag === selectedTag && !note.isArchived && !note.isTrashed;
    })
    .map((note) => note);

  const navigate = useNavigate();

  const handleNavigate = (note) => {
    navigate(`/note-${note.id}`);
  };

  const handleArchive = (e, id) => {
    setNotes(
      filterBasedOnTag.map((note) =>
        note.id === id ? { ...note, isArchived: true } : note,
      ),
    );
  };

  const handleTrash = (e, id) => {
    setNotes(
      filterBasedOnTag.map((note) =>
        note.id === id ? { ...note, isTrashed: true } : note,
      ),
    );
  };

  const handleDisplayForm = () => {
    setShowForm(true);
  };
  const handleHideForm = () => {
    setShowForm(false);
  };

  let path = window.location.origin;

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

        <TagsBtn selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

        {/* notes card  */}

        <div className="scrollbar-none overflow-y-auto min-h-0 grid md:grid-cols-2  gap-4">
          {filterBasedOnTag.length == 0 ? (
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
            filterBasedOnTag.map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                handleYellowBtn={handleArchive}
                handleRedBtn={handleTrash}
                yellowBtnName={"Archive"}
                redBtnName={"Trash"}
                handleNavigate={() => handleNavigate(note)}
                title={`${path}/note-${note.id}`}
              />
            ))
          )}
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
