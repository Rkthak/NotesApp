import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NotesContext } from "../Store/NotesContext";
import { AlertContext } from "../Store/AlertContext";

const EditeNote = () => {
  const { id } = useParams();
  const cardID = id.split("-")[1];

  // alert ==>
  const { setShowAlert, setAlertMessage } = useContext(AlertContext);

  // useNavigate
  const navigate = useNavigate();

  const now = new Date();
  const editedAt = now.toLocaleString();

  const { notes, setNotes } = useContext(NotesContext);
  const currentNote = notes.find((note) => (note.id == cardID ? note : ""));

  const [editData, setEditData] = useState({
    title: currentNote?.title || "",
    description: currentNote?.description || "",
    tag: currentNote?.tag || "",
  });

  const isChanged =
    editData.title !== currentNote.title ||
    editData.tag !== currentNote.tag ||
    editData.description !== currentNote.description;

  useEffect(() => {
    if (!currentNote) {
      navigate("/");
    }
  }, [currentNote, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotes(
      notes.map((item) =>
        item.id === currentNote.id
          ? { ...item, ...editData, isEdit: true, editedAt: editedAt }
          : item,
      ),
    );

    // alert ===>
    setShowAlert(true);
    setAlertMessage("note edited..!");

    navigate(`/${id}`);
  };
  return (
    <div className=" h-screen bg-slate-800 p-5">
      <form className="flex flex-col p-5 mt-8 lg:mt-0" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-400 mb-3 rounded outline-none"
          placeholder="title.. (max 25 characters)"
          name="title"
          required
          value={editData.title}
          onChange={handleChange}
          maxLength={25}
        />
        <textarea
          name="description"
          required
          value={editData.description}
          onChange={handleChange}
          id="description"
          rows={3}
          placeholder="description"
          className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-400 mb-3 rounded outline-none"
        ></textarea>
        <input
          type="text"
          className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-400 mb-3 rounded outline-none"
          placeholder="tag.. (max 8 characters)"
          name="tag"
          list="tagsList"
          required
          value={editData.tag}
          onChange={handleChange}
          maxLength={8}
        />
        <datalist id="tagsList">
          <option value="personal">personal</option>
        </datalist>
        <div>
          <button
            type="submit"
            disabled={!isChanged}
            className="disabled:opacity-25 disabled:bg-slate-400 disabled:hover:scale-100 disabled:hover:shadow-none  font-['sora'] text-slate-50 hover:shadow-green-200 hover:shadow-2xl hover:scale-90 transition-all w-fit px-5 py-1.5 rounded mt-5 bg-green-400 cursor-pointer"
          >
            {isChanged ? "Save changes" : "No changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditeNote;
