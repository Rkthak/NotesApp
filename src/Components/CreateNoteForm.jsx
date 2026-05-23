import { useContext, useState } from "react";
import { NotesContext } from "../Store/NotesContext";
import { AlertContext } from "../Store/AlertContext";

const CreateNoteForm = ({ showForm, setShowForm, handleHideForm }) => {
  const now = new Date();
  const createdON = now.toLocaleString();

  const { setNotes, notes } = useContext(NotesContext);

  // alert ===>
  const { setShowAlert, setAlertMessage } = useContext(AlertContext);

  const [inputVal, setInputVal] = useState({
    id: "",
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

    setInputVal({
      title: "",
      description: "",
      tag: "",
    });

    setShowForm(false);

    // alert ===>
    setShowAlert(true);
    setAlertMessage("note created..!");
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setInputVal({
      ...inputVal,
      [name]: value,
      id: Date.now(),
      createdAt: createdON,
      isArchived: false,
      isTrashed: false,
      isPinned: false,
    });
  };

  const resetForm = () => {
    setInputVal({
      ...inputVal,
      id: "",
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
      <div className="flex justify-end mt-8">
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
          placeholder="title.. (max 25 characters)"
          name="title"
          value={inputVal.title}
          onChange={handleInputChange}
          required
          maxLength={25}
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
          placeholder="tag.. (max 8 characters)"
          name="tag"
          value={inputVal.tag}
          onChange={handleInputChange}
          list="tagsList"
          required
          maxLength={8}
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
            type="button"
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
