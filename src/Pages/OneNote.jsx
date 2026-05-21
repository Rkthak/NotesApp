import { useContext } from "react";
import { useParams } from "react-router";
import { NotesContext } from "../Store/NotesContext";

const OneNote = () => {
  const { id } = useParams();
  const cardID = id.split("-")[1];
  const { notes } = useContext(NotesContext);

  return (
    <div className="text-slate-50">
      {notes
        .filter((item) => item.id == cardID)
        .map((item) => (
          <h1> {item.title} </h1>
        ))}
    </div>
  );
};

export default OneNote;
