const NotesCard = ({
  note,
  handleRedBtn,
  handleYellowBtn,
  handlePinned,
  yellowBtnName,
  redBtnName,
  handleNavigate,
  handleEditNavigation,
  title,
}) => {
  return (
    <>
      <div
        className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-3 h-fit  max-w-80 relative cursor-pointer"
        title={title}
        onClick={(note) => handleNavigate?.(note)}
      >
        <div className="">
          <div className="flex justify-between items-center mb-1">
            <h2 className="font-['sora'] text-slate-50 font-semibold text-2xl capitalize">
              {note.isPinned ? <span>📌</span> : ""}
              {note.title.length > 15
                ? note.title.slice(0, 15) + " ..."
                : note.title}
            </h2>
            <span
              className="bg-slate-900 p-1 rounded-full border-2 border-slate-700"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePinned?.(e, note.id);
              }}
            >
              📌
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button className="font-['sora'] text-sm text-sky-500 px-3 py-1 whitespace-nowrap bg-slate-800 rounded-full border-2 border-sky-500">
              #{note.tag.length > 8 ? note.tag.slice(0, 6) + "..." : note.tag}
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
            <button
              className="font-['sora'] text-slate-50 px-4 py-1 border-2 border-slate-700 bg-slate-900 font-semibold cursor-pointer rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleEditNavigation?.(e, note.id);
              }}
            >
              edit
            </button>
            <div className="">
              <button
                className="font-['sora'] text-slate-50 px-4 py-1 border-2 border-amber-400 bg-amber-400 font-semibold cursor-pointer rounded-xl ml-3 "
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleYellowBtn(e, note.id);
                }}
              >
                {yellowBtnName}
              </button>
              <button
                className="font-['sora'] text-slate-50 px-4 py-1 border-2 border-red-400 bg-red-400 font-semibold cursor-pointer rounded-xl ml-3"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleRedBtn?.(e, note.id);
                }}
              >
                {redBtnName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesCard;
