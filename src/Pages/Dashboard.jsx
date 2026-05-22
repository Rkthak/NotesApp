import { useContext, useState } from "react";
import CreateNoteBtn from "../Components/CreateNoteBtn";
import CreateNoteForm from "../Components/CreateNoteForm";
import NotesCard from "../Components/NotesCard";
import HeaderMessage from "../Components/HeaderMessage";
import { NotesContext } from "../Store/NotesContext";
import { useNavigate } from "react-router";
import TagsBtn from "../Components/TagsBtn";
import Search from "../Components/Search";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { notes, setNotes } = useContext(NotesContext);

  // search ====>
  const [searchVal, setSearchVal] = useState("");

  // tags ===>
  const [selectedTag, setSelectedTag] = useState("All");

  // both filtered note
  const filteredNotes = notes
    .filter((note) => {
      // 1. Tag
      const tagMatch =
        selectedTag === "All"
          ? !note.isArchived && !note.isTrashed
          : note.tag === selectedTag && !note.isArchived && !note.isTrashed;

      // 2. Search
      const title = note.title || "";
      const body = note.body || "";

      const searchMatch =
        searchVal === ""
          ? true
          : title.toLowerCase().includes(searchVal.toLowerCase()) ||
            body.toLowerCase().includes(searchVal.toLowerCase());

      // return both
      return tagMatch && searchMatch;
    })
    .sort((a, b) => b.isPinned - a.isPinned || b.createdAt - a.createdAt);

  const navigate = useNavigate();

  const handleNavigate = (note) => {
    navigate(`/note-${note.id}`);
  };

  const handleArchive = (e, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isArchived: true } : note,
      ),
    );
  };

  const handleTrash = (e, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isTrashed: true } : note,
      ),
    );
  };

  const handlePinned = (e, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note,
      ),
    );
  };

  const handleDisplayForm = () => {
    setShowForm(true);
  };
  const handleHideForm = () => {
    setShowForm(false);
  };

  // edit navigation

  const handleEditNavigation = (e, id) => {
    navigate(`/note-${id}/edit`);
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

          <Search searchVal={searchVal} setSearchVal={setSearchVal} />
        </div>

        <TagsBtn selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

        {/* notes card  */}

        <div className="scrollbar-none overflow-y-auto min-h-0 grid md:grid-cols-2  gap-4">
          {filteredNotes.length === 0 ? (
            <div className="w-full">
              <h3 className="font-['sora'] text-slate-50 font-semibold text-2xl capitalize">
                no note available. . .
              </h3>
              <p className=" text-slate-400 font-['inter'] mt-1.5 mb-4">
                Click add + button to create a note.
              </p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                handlePinned={handlePinned}
                handleYellowBtn={handleArchive}
                handleRedBtn={handleTrash}
                yellowBtnName={"Archive"}
                redBtnName={"Trash"}
                handleNavigate={() => handleNavigate(note)}
                title={`${path}/note-${note.id}`}
                handleEditNavigation={handleEditNavigation}
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
