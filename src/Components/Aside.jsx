const Aside = () => {
  return (
    <div className="min-h-screen bg-slate-900 min-w-62.5 border-r-slate-700 border-r-2 p-4 flex flex-col justify-between">
      <div>
        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-bold font-['sora'] text-sky-500  mb-5">
            NotesApp
          </h1>
        </div>

        {/* ASIDE BUTTONS */}

        <div className="space-y-3">
          <button className="w-full text-slate-50 hover:bg-sky-500 hover:text-sky-200 transition-all px-5 py-4 text-left font-semibold font-['sora'] rounded-2xl">
            Notes
          </button>
          <button className="w-full text-slate-50 hover:bg-sky-500  hover:text-sky-200 transition-all px-5 py-4 text-left font-semibold font-['sora'] rounded-2xl">
            Archive
          </button>
          <button className="w-full text-slate-50 hover:bg-sky-500  hover:text-sky-200 transition-all px-5 py-4 text-left font-semibold font-['sora'] rounded-2xl">
            Trash
          </button>
        </div>
      </div>
      {/* can be added user profile viewer and user info after login --in bottom */}
    </div>
  );
};

export default Aside;
