const AsideButton = ({ btnName }) => {
  return (
    <button className="w-full text-slate-50 hover:bg-sky-500 hover:text-sky-200 transition-all px-5 py-4 text-left font-semibold font-['sora'] rounded-2xl mb-3">
      {btnName}
    </button>
  );
};

export default AsideButton;
