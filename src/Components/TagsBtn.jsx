import { useContext } from "react";
import { NotesContext } from "../Store/NotesContext";

const TagsBtn = ({ selectedTag, setSelectedTag }) => {
  const { notes } = useContext(NotesContext);

  const allTags = notes
    .filter((note) => !note.isArchived && !note.isTrashed)
    .map((note) => note.tag);

  const uniqueTags = [...new Set(allTags)];

  const selectTag = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="mt-2 mb-5 flex overflow-scroll scrollbar-none">
      <button
        className={`${selectedTag === "All" ? "text-sky-500 border-sky-500" : "text-slate-50 border-slate-700"} font-['sora'] px-3 py-1 whitespace-nowrap bg-slate-800 rounded-full border-2  mr-4`}
        onClick={() => selectTag("All")}
      >
        #All
      </button>
      {uniqueTags.map((tag) => {
        return (
          <button
            className={`${selectedTag === tag ? "text-sky-500 border-sky-500" : "text-slate-50 border-slate-700"} font-['sora'] px-3 py-1 whitespace-nowrap bg-slate-800 rounded-full border-2  mr-4`}
            key={tag}
            onClick={() => selectTag(tag)}
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagsBtn;
