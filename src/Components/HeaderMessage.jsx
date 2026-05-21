const HeaderMessage = ({ mainMessage, secondryMessage }) => {
  return (
    <div>
      <h2 className="text-3xl text-slate-50 font-['sora'] font-bold">
        {mainMessage}
      </h2>
      <p className="text-slate-400 font-['inter']">{secondryMessage}</p>
    </div>
  );
};

export default HeaderMessage;
