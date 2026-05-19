import AsideButton from "./AsideButton";

const Aside = () => {
  return (
    <div className="min-h-screen bg-slate-900 w-62.5 border-r-slate-700 border-r-2 p-4 flex flex-col justify-between">
      <div>
        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-bold font-['sora'] text-sky-500  mb-5">
            NotesApp
          </h1>
        </div>

        {/* ASIDE BUTTONS */}

        <div>
          <AsideButton btnName={"Notes"} />
          <AsideButton btnName={"Archieve"} />
          <AsideButton btnName={"Trash"} />
        </div>
      </div>
      {/* can be added user profile viewer and user info after login --in bottom */}
    </div>
  );
};

export default Aside;
