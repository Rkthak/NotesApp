const BackGround = ({ children }) => {
  return (
    <div className="h-screen bg-slate-950 grid grid-cols-[auto_1fr] overflow-hidden ">
      {children}
    </div>
  );
};

export default BackGround;
