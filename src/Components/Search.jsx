const Search = ({ searchVal, setSearchVal }) => {
  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="flex-1 flex items-center justify-end">
      <input
        type="search"
        name=""
        value={searchVal}
        onChange={handleSearchChange}
        id=""
        className="text-slate-50 font-['sora'] px-5 py-2 bg-slate-800 rounded-2xl outline-0 border-2 lg:w-3/5  w-full border-slate-700"
        placeholder="Search notes.."
      />
    </div>
  );
};

export default Search;
