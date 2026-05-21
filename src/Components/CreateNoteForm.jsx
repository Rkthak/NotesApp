import { useContext, useState } from "react";
import { NotesContext } from "../Store/NotesContext";

const CreateNoteForm = ({ showForm, setShowForm, handleHideForm }) => {
  const now = new Date();
  const createdON = now.toLocaleString();

  const { setNotes, notes } = useContext(NotesContext);

  const [inputVal, setInputVal] = useState({
    title: "",
    description: "",
    tag: "",
    isPinned: "",
    isArchived: "",
    isTrashed: "",
    createdAt: "",
  });
  const handleForm = (e) => {
    e.preventDefault();

    setNotes([...notes, inputVal]);
    localStorage.setItem("Notes", notes);

    setInputVal({
      title: "",
      description: "",
      tag: "",
    });

    setShowForm(false);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setInputVal({
      ...inputVal,
      [name]: value,
      createdAt: createdON,
      isArchived: false,
      isTrashed: false,
      isPinned: false,
    });
  };

  const resetForm = () => {
    setInputVal({
      ...inputVal,
      title: "",
      description: "",
      tag: "",
      isPinned: "",
      isArchived: "",
      isTrashed: "",
      createdAt: "",
    });
  };

  return (
    <div
      className={
        showForm
          ? `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-slate-800 p-5 `
          : `hidden`
      }
    >
      <div className="flex justify-end">
        <button
          className=" bg-red-400 hover:shadow-red-200 hover:shadow-2xl hover:scale-90 transition-all px-5 py-1.5 rounded text-slate-50 cursor-pointer font-['sora']"
          onClick={handleHideForm}
        >
          Close
        </button>
      </div>
      <form className="flex flex-col p-5" onSubmit={handleForm}>
        <input
          type="text"
          className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-400 mb-3 rounded outline-none"
          placeholder="title.."
          name="title"
          value={inputVal.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          value={inputVal.description}
          onChange={handleInputChange}
          required
          id="description"
          rows={3}
          placeholder="description"
          className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-400 mb-3 rounded outline-none"
        ></textarea>
        <input
          type="text"
          className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-400 mb-3 rounded outline-none"
          placeholder="tag.."
          name="tag"
          value={inputVal.tag}
          onChange={handleInputChange}
          list="tagsList"
          required
        />
        <datalist id="tagsList">
          <option value="personal">personal</option>
        </datalist>
        <div>
          <button
            type="submit"
            className="font-['sora'] text-slate-50 hover:shadow-green-200 hover:shadow-2xl hover:scale-90 transition-all w-fit px-5 py-1.5 rounded mt-5 bg-green-400 cursor-pointer"
          >
            Create +
          </button>
          <button
            className="font-['sora'] text-slate-50 hover:shadow-amber-200 hover:shadow-2xl hover:scale-90 transition-all w-fit px-5 py-1.5 rounded mt-5 mx-5 bg-amber-400 cursor-pointer"
            onClick={resetForm}
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNoteForm;
