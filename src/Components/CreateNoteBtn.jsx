const CreateNoteBtn = ({ fxn }) => {
  return (
    <>
      <button
        className="text-slate-50 text-3xl fixed bottom-24 lg:bottom-5 right-5 rounded-full bg-sky-500 border-2 border-slate-700 px-4 py-1.5 z-50 cursor-pointer hover:shadow-2xl hover:shadow-sky-500 hover:scale-105 transition-all"
        title="create note "
        onClick={fxn}
      >
        +
      </button>
    </>
  );
};

export default CreateNoteBtn;
